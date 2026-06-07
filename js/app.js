// SlotWiki — shared app logic (modal, card rendering, search)

// ── Card HTML ─────────────────────────────────────────────────────────────────
function slotCardHTML(slot) {
  const thumb = slot.thumbnail_url
    ? `<img src="${slot.thumbnail_url}" alt="${slot.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=card-thumb-placeholder><div class=placeholder-icon>🎰</div><span>${slot.name}</span></div>'">`
    : `<div class="card-thumb-placeholder"><div class="placeholder-icon">🎰</div><span>${slot.name}</span></div>`;

  const rtpBadge = slot.rtp
    ? `<span class="rtp-badge">RTP ${slot.rtp}</span>`
    : `<span class="rtp-badge unknown">RTP N/A</span>`;

  const maxWin = slot.max_win
    ? `<span class="max-win-badge">${slot.max_win}</span>`
    : "";

  const tagsHTML = slot.tags.slice(0, 3)
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  return `
    <article class="slot-card" data-slug="${slot.slug}" tabindex="0" role="button" aria-label="View ${slot.name}">
      <div class="card-thumb">${thumb}</div>
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

  const stats = [
    { label: "RTP", value: slot.rtp || "N/A", na: !slot.rtp },
    { label: "Max Win", value: slot.max_win || "N/A", na: !slot.max_win },
    slot.volatility ? { label: "Volatility", value: slot.volatility } : null,
    slot.release_date ? { label: "Released", value: slot.release_date } : null,
  ]
    .filter(Boolean)
    .map(
      (s) =>
        `<div class="stat-pill">
          <div class="stat-label">${s.label}</div>
          <div class="stat-value${s.na ? " na" : ""}">${s.value}</div>
        </div>`
    )
    .join("");

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
      <div class="modal-stats">${stats}</div>
      <p class="modal-description">${slot.tagline}</p>
      ${tagsHTML ? `<div class="modal-tags">${tagsHTML}</div>` : ""}
      <div class="modal-sections">
        ${featuresSection}
        ${bonusGamesSection}
        ${bonusBuySection}
      </div>
      <div class="modal-footer">
        ${releaseLine}
        <a href="${slot.provider_website}" class="btn-provider" target="_blank" rel="noopener noreferrer">
          Visit Provider ↗
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

// Expose for inline scripts
window.SlotWiki = { renderGrid, initModal, initSearch, searchSlots, openModal };
