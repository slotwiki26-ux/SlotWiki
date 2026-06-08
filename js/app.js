// SlotWiki — shared app logic (modal, card rendering, search, comparison)

// ── Helpers ───────────────────────────────────────────────────────────────────
function volLevel(volatility) {
  if (!volatility) return 0;
  const v = volatility.toLowerCase();
  if (v === 'low') return 1;
  if (v.includes('medium') && v.includes('low')) return 2;
  if (v === 'medium') return 3;
  if (v.includes('medium') && v.includes('high')) return 4;
  return 5;
}

function volBarsHTML(volatility) {
  const level = volLevel(volatility);
  if (!level) return '';
  const palette = { 1: '#0EAD72', 2: '#0EAD72', 3: '#C9A84C', 4: '#E07B35', 5: '#D9562A' };
  const color = palette[level];
  const bars = Array.from({ length: 5 }, (_, i) =>
    `<span class="vol-bar" style="${i < level ? `background:${color}` : ''}"></span>`
  ).join('');
  return `<div class="vol-bars">${bars}</div>`;
}

function rtpGaugeHTML(rtp) {
  if (!rtp) return '';
  const val = parseFloat(rtp);
  if (isNaN(val)) return '';
  const pct = Math.max(0, Math.min(100, (val - 90) / 8 * 100)).toFixed(1);
  return `<div class="rtp-gauge"><div class="rtp-gauge-fill" style="width:${pct}%"></div></div>`;
}

// ── Comparison State ──────────────────────────────────────────────────────────
let compareList = [];

function toggleCompare(slug, e) {
  if (e) { e.stopPropagation(); e.preventDefault(); }
  const idx = compareList.indexOf(slug);
  if (idx > -1) {
    compareList.splice(idx, 1);
  } else {
    if (compareList.length >= 3) return;
    compareList.push(slug);
  }
  document.querySelectorAll('.slot-card').forEach(card => {
    const inC = compareList.includes(card.dataset.slug);
    card.classList.toggle('in-compare', inC);
    const btn = card.querySelector('.card-compare-btn');
    if (btn) btn.textContent = inC ? '✓' : '+';
  });
  renderCompareBar();
}

function clearCompare() {
  compareList = [];
  document.querySelectorAll('.slot-card').forEach(card => {
    card.classList.remove('in-compare');
    const btn = card.querySelector('.card-compare-btn');
    if (btn) btn.textContent = '+';
  });
  renderCompareBar();
}

function renderCompareBar() {
  let bar = document.getElementById('compare-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'compare-bar';
    bar.className = 'compare-bar';
    bar.innerHTML = `
      <div class="compare-bar-inner">
        <div class="compare-bar-label">Compare</div>
        <div class="compare-bar-slots" id="compare-bar-slots"></div>
        <div class="compare-bar-actions">
          <button class="compare-clear-btn" id="compare-clear-btn">Clear All</button>
        </div>
      </div>`;
    document.body.appendChild(bar);
    document.getElementById('compare-clear-btn').addEventListener('click', clearCompare);
  }

  const slotsEl = document.getElementById('compare-bar-slots');
  if (compareList.length === 0) {
    bar.classList.remove('visible');
    document.body.classList.remove('comparing');
    return;
  }

  bar.classList.add('visible');
  document.body.classList.add('comparing');

  const filled = compareList.map(slug => {
    const s = SLOTS.find(x => x.slug === slug);
    if (!s) return '';
    const thumb = s.thumbnail_url
      ? `<img src="${s.thumbnail_url}" alt="${s.name}">`
      : `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:18px;opacity:.3">🎰</div>`;
    const stats = [
      s.rtp ? `<span class="stat-gold">${s.rtp}</span>` : null,
      s.volatility || null,
      s.max_win || null,
    ].filter(Boolean).join(' · ');
    return `
      <div class="compare-bar-slot">
        <div class="compare-bar-slot-thumb">${thumb}</div>
        <div class="compare-bar-slot-info">
          <div class="compare-bar-slot-name">${s.name}</div>
          <div class="compare-bar-slot-stats">${stats}</div>
        </div>
        <button class="compare-bar-remove" onclick="toggleCompare('${slug}',event)" title="Remove">×</button>
      </div>`;
  }).join('');

  const empties = Array.from({ length: Math.max(0, 3 - compareList.length) },
    () => `<div class="compare-bar-empty-slot">+ add slot</div>`).join('');

  slotsEl.innerHTML = filled + empties;
}

// ── Card HTML ─────────────────────────────────────────────────────────────────
function slotCardHTML(slot) {
  const inCompare = compareList.includes(slot.slug);
  const thumb = slot.thumbnail_url
    ? `<img src="${slot.thumbnail_url}" alt="${slot.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=card-thumb-placeholder><div class=placeholder-icon>🎰</div><span>${slot.name}</span></div>'">`
    : `<div class="card-thumb-placeholder"><div class="placeholder-icon">🎰</div><span>${slot.name}</span></div>`;

  const rtpBadge = slot.rtp
    ? `<span class="rtp-badge">RTP ${slot.rtp}</span>`
    : ``;

  const maxWin = slot.max_win
    ? `<span class="max-win-badge">${slot.max_win}</span>`
    : "";

  const tagsHTML = slot.tags.slice(0, 3)
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  return `
    <article class="slot-card${inCompare ? ' in-compare' : ''}" data-slug="${slot.slug}" tabindex="0" role="button" aria-label="View ${slot.name}">
      <div class="card-thumb">${thumb}</div>
      <button class="card-compare-btn" title="Compare" onclick="toggleCompare('${slot.slug}',event)">${inCompare ? '✓' : '+'}</button>
      <div class="card-body">
        <div class="card-name">${slot.name}</div>
        <div class="card-provider">${slot.provider_name}</div>
        <div class="card-meta">
          ${rtpBadge}
          ${maxWin}
        </div>
        ${tagsHTML ? `<div class="card-tags">${tagsHTML}</div>` : ""}
      </div>
    </article>`;
}

// ── Grid Rendering ─────────────────────────────────────────────────────────────
function renderGrid(slots, containerId, countId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (slots.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">🔍</div>
        <h3>No slots found</h3>
        <p>Try a different search term or tag — e.g. "pirate", "egypt", "horror".</p>
      </div>`;
  } else {
    container.innerHTML = slots.map(slotCardHTML).join("");
    container.querySelectorAll(".slot-card").forEach((card) => {
      card.addEventListener("click", () => openModal(card.dataset.slug));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") openModal(card.dataset.slug);
      });
    });
  }

  const countEl = document.getElementById(countId);
  if (countEl) countEl.textContent = slots.length + " slots";
}

// ── Modal ──────────────────────────────────────────────────────────────────────
function openModal(slug) {
  const slot = SLOTS.find((s) => s.slug === slug);
  if (!slot) return;

  const overlay = document.getElementById("modal-overlay");
  const modal = document.getElementById("modal");

  const hero = slot.hero_url
    ? `<img src="${slot.hero_url}" alt="${slot.name}" onerror="this.parentElement.innerHTML='<div class=modal-hero-placeholder>🎰</div>'">`
    : `<div class="modal-hero-placeholder">🎰</div>`;

  const statItems = [
    slot.rtp ? {
      label: "RTP",
      value: slot.rtp,
      sub: rtpGaugeHTML(slot.rtp),
    } : { label: "RTP", value: "N/A", na: true, sub: '' },
    {
      label: "Volatility",
      value: slot.volatility || "N/A",
      na: !slot.volatility,
      sub: volBarsHTML(slot.volatility),
    },
    slot.max_win ? { label: "Max Win", value: slot.max_win, sub: '' } : null,
    slot.release_date ? { label: "Released", value: slot.release_date, sub: '' } : null,
  ].filter(Boolean);

  const stats = statItems.map(s => `
    <div class="modal-stat">
      <div class="modal-stat-value${s.na ? ' na' : ''}">${s.value}</div>
      <div class="modal-stat-label">${s.label}</div>
      ${s.sub || ''}
    </div>`).join('');

  const tagsHTML = slot.tags.length
    ? slot.tags.map((t) => `<span class="tag">${t}</span>`).join("")
    : "";

  // Bonus buy RTPs section
  let bonusBuySection = "";
  if (slot.bonus_buy_rtps && slot.bonus_buy_rtps.length) {
    const rtps = slot.bonus_buy_rtps
      .map((r) => `<span class="rtp-variant">${r}</span>`)
      .join("");
    bonusBuySection = `
      <div class="modal-section">
        <h4>Bonus Buy RTPs</h4>
        <div class="rtp-variants">${rtps}</div>
      </div>`;
  }

  // Features section
  let featuresSection = "";
  if (slot.features && slot.features.length) {
    const items = slot.features
      .map(
        (f) =>
          `<div class="feature-item">
            <div class="feature-title">${f.title}</div>
            <div class="feature-desc">${f.description}</div>
          </div>`
      )
      .join("");
    featuresSection = `
      <div class="modal-section">
        <h4>Features</h4>
        <div class="feature-list">${items}</div>
      </div>`;
  }

  // Bonus games section
  let bonusGamesSection = "";
  if (slot.bonus_games && slot.bonus_games.length) {
    const items = slot.bonus_games
      .map(
        (b) =>
          `<div class="feature-item">
            <div class="feature-title">${b.title}</div>
            <div class="feature-desc">${b.description}</div>
          </div>`
      )
      .join("");
    bonusGamesSection = `
      <div class="modal-section">
        <h4>Bonus Games</h4>
        <div class="feature-list">${items}</div>
      </div>`;
  }

  const releaseLine = slot.release_date
    ? `<span class="release-date">Released ${slot.release_date}</span>`
    : `<span class="release-date"></span>`;

  modal.innerHTML = `
    <div class="modal-hero">${hero}</div>
    <button class="modal-close" id="modal-close" aria-label="Close">✕</button>
    <div class="modal-body">
      <div class="modal-provider">${slot.provider_name}</div>
      <h2 class="modal-title">${slot.name}</h2>
      <div class="modal-stat-bar">${stats}</div>
      <p class="modal-description">${slot.tagline}</p>
      ${tagsHTML ? `<div class="modal-tags">${tagsHTML}</div>` : ""}
      <div class="modal-sections">
        ${featuresSection}
        ${bonusGamesSection}
        ${bonusBuySection}
      </div>
      <div class="modal-footer">
        ${releaseLine}
        <a href="${slot.hacksaw_url}" class="btn-demo-play" target="_blank" rel="noopener noreferrer">
          Demo Play
        </a>
      </div>
    </div>`;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";

  document.getElementById("modal-close").addEventListener("click", closeModal);
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

// ── Modal Init ─────────────────────────────────────────────────────────────────
function initModal() {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// ── Search + Filter (homepage) ─────────────────────────────────────────────────
function initSearch({ gridId, countId, inputId, providerChipsId }) {
  const input = document.getElementById(inputId);
  if (!input) return;

  let activeProvider = null;
  let debounceTimer = null;

  function update() {
    const slots = searchSlots(input.value, activeProvider);
    renderGrid(slots, gridId, countId);
  }

  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(update, 180);
  });

  // Provider chips
  const chipsContainer = document.getElementById(providerChipsId);
  if (chipsContainer) {
    const chips = chipsContainer.querySelectorAll(".chip[data-provider]");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const val = chip.dataset.provider || null;
        activeProvider = activeProvider === val ? null : val;
        chips.forEach((c) => c.classList.toggle("active", c.dataset.provider === activeProvider));
        update();
      });
    });
  }
}

// ── Search Dropdown ───────────────────────────────────────────────────────────
function initSearchDropdown(inputId, wrapSelector) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const wrap = input.closest(wrapSelector || '.search-wrap');
  if (!wrap) return;

  let dropdown = null;

  function getOrCreateDropdown() {
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.id = 'search-dropdown';
      dropdown.className = 'search-dropdown';
      wrap.appendChild(dropdown);
    }
    return dropdown;
  }

  function showDropdown(query) {
    if (!query || query.length < 1) { hideDropdown(); return; }
    const results = searchSlots(query, null).slice(0, 7);
    if (!results.length) { hideDropdown(); return; }
    const dd = getOrCreateDropdown();
    const total = searchSlots(query, null).length;
    dd.innerHTML = results.map(s => {
      const thumb = s.thumbnail_url
        ? `<img src="${s.thumbnail_url}" alt="" loading="lazy">`
        : `<div class="search-drop-placeholder">🎰</div>`;
      const rtp = s.rtp ? `<span class="search-drop-rtp">${s.rtp}</span> · ` : '';
      return `
        <div class="search-drop-item" data-slug="${s.slug}">
          <div class="search-drop-thumb">${thumb}</div>
          <div class="search-drop-info">
            <div class="search-drop-name">${s.name}</div>
            <div class="search-drop-meta">${rtp}${s.provider_name}</div>
          </div>
        </div>`;
    }).join('') + (total > 7 ? `<div class="search-drop-more">${total - 7} more results — press Enter to see all</div>` : '');
    dd.classList.add('visible');
    dd.querySelectorAll('.search-drop-item').forEach(item => {
      item.addEventListener('mousedown', e => {
        e.preventDefault();
        openModal(item.dataset.slug);
        hideDropdown();
        input.value = '';
      });
    });
  }

  function hideDropdown() {
    if (dropdown) dropdown.classList.remove('visible');
  }

  input.addEventListener('input', () => showDropdown(input.value.trim()));
  input.addEventListener('focus', () => { if (input.value.trim()) showDropdown(input.value.trim()); });
  input.addEventListener('blur', () => setTimeout(hideDropdown, 150));
}

// Expose for inline scripts
window.SlotWiki = { renderGrid, initModal, initSearch, searchSlots, openModal, toggleCompare, clearCompare, initSearchDropdown };
