/* ============================================================
   MFNH PORTFOLIO — HOMEPAGE CONTROLLER
   Updated: 2026-10 — Responsive mobile fixes, working video controls,
   always-on auto-looping previews, image lightbox w/ prev/next,
   new music video (HAF x FLYZAD), RTSR vertical reels.
   ============================================================ */

/* ===== HERO SLIDER CONFIG ===== */
const heroSliders = [
    {
        sliderId: 'slider-art',
        images: [
            'public/assets/hero-previews/art-direction/slide-suara-perempuan.svg',
            'public/assets/hero-previews/art-direction/slide-verse-2.svg',
            'public/assets/hero-previews/art-direction/slide-rtsr.svg',
            'public/assets/hero-previews/art-direction/slide-single-covers.svg'
        ]
    },
    {
        sliderId: 'slider-graphic',
        images: [
            'public/assets/hero-previews/graphic-design/slide-kickfest.svg',
            'public/assets/hero-previews/graphic-design/slide-kickfest 2.svg',
            'public/assets/hero-previews/graphic-design/slide-bank-bjb.svg',
            'public/assets/hero-previews/graphic-design/slide-updateimun.svg',
            'public/assets/hero-previews/graphic-design/slide-bjb-event.svg'
        ]
    },
    {
        sliderId: 'slider-apparel',
        images: [
            'public/assets/hero-previews/apparel-design/slide-apparel.svg',
            'public/assets/hero-previews/apparel-design/slide-apparel-craft.svg',
            'public/assets/hero-previews/apparel-design/slide-apparel-gal1.svg',
            'public/assets/hero-previews/apparel-design/slide-apparel-gal2.svg',
            'public/assets/hero-previews/apparel-design/slide-apparel-prints.svg'
        ]
    }
];

/* ===== SVG ICONS ===== */
const ICO_BACK  = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>`;
const ICO_CLOSE = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`;
const ICO_PLAY  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
const ICO_PAUSE = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="3" width="4" height="18"/><rect x="14" y="3" width="4" height="18"/></svg>`;
const ICO_MUTE  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
const ICO_VOL   = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;
const ICO_FULL  = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`;
const ICO_PREV  = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`;
const ICO_NEXT  = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;

const FALLBACK_SVG = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTExIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM0NDQiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj5WaXN1YWwgQXNzZXQ8L3RleHQ+PC9zdmc+`;

/* ===== INIT ===== */
function initApp() {
    initLoader();
    initCursor();
    initNavbar();
    initMobileMenu();
    initHeroSliders();
    renderSelectedWorks('all');
    initFilters();
    initModalControls();
    initScrollAnims();
    initSmoothScroll();
    handleIncomingHash();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

/* ============================================================
   1. ONE-TIME SESSION LOADER WITH FAIL-SAFE FALLBACK
   ============================================================ */
function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    // Subsequent internal navigation: instantly hide loader without re-animating
    if (sessionStorage.getItem('hasLoaded') || sessionStorage.getItem('mfnh_site_loaded')) {
        loader.style.display = 'none';
        loader.classList.add('instant-hide');
        triggerHeroAnims(true);
        if (window.__loaderTimeout) clearTimeout(window.__loaderTimeout);
        return;
    }

    // Set visited keys immediately on initial entry
    sessionStorage.setItem('hasLoaded', 'true');
    sessionStorage.setItem('mfnh_site_loaded', 'true');
    const pct = document.getElementById('loaderPct');
    let isDismissed = false;
    let animId = null;

    const dismissLoader = (immediate = false) => {
        if (isDismissed) return;
        isDismissed = true;
        if (animId) cancelAnimationFrame(animId);
        clearTimeout(fallbackTimer);
        if (window.__loaderTimeout) clearTimeout(window.__loaderTimeout);
        sessionStorage.setItem('hasLoaded', 'true');
        sessionStorage.setItem('mfnh_site_loaded', 'true');

        if (pct) pct.textContent = '100%';
        if (immediate) {
            loader.style.display = 'none';
            triggerHeroAnims(true);
        } else {
            loader.classList.add('hide');
            setTimeout(() => {
                loader.style.display = 'none';
                triggerHeroAnims(false);
            }, 350);
        }
    };

    // FAIL-SAFE FALLBACK TIMEOUT: Max 2.2s
    const fallbackTimer = setTimeout(() => {
        dismissLoader(false);
    }, 2200);

    // Silky-smooth frame-by-frame counter from 0% to 100% with easeOutCubic
    const startTime = performance.now();
    const duration = 1200;

    function step(now) {
        if (isDismissed) return;
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentPct = Math.min(100, Math.floor(ease * 100));
        if (pct) pct.textContent = currentPct + '%';

        if (progress < 1) {
            animId = requestAnimationFrame(step);
        } else {
            if (pct) pct.textContent = '100%';
            setTimeout(() => dismissLoader(false), 180);
        }
    }
    animId = requestAnimationFrame(step);
}

function triggerHeroAnims(immediate) {
    document.querySelectorAll('[data-animate]').forEach(el => {
        if (immediate) {
            el.classList.add('visible');
        } else {
            const delay = parseFloat(el.dataset.delay || 0);
            setTimeout(() => el.classList.add('visible'), delay * 140);
        }
    });
}

/* ============================================================
   2. HERO AUTO-SLIDERS
   ============================================================ */
function initHeroSliders() {
    heroSliders.forEach(({ sliderId, images }) => {
        const container = document.getElementById(sliderId);
        if (!container) return;
        container.innerHTML = '';
        images.forEach((src, i) => {
            const slide = document.createElement('div');
            slide.className = 'hcol-slide' + (i === 0 ? ' active' : '');
            slide.style.backgroundImage = `url('${src}')`;
            container.appendChild(slide);
        });
        let current = 0;
        const slides = container.querySelectorAll('.hcol-slide');
        if (slides.length <= 1) return;
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 3400 + Math.random() * 400);
    });
}

/* ============================================================
   3. SELECTED WORKS — 4-COLUMN GRID
   ============================================================ */

function renderSelectedWorks(filter = 'all') {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const list = typeof MFNH_PROJECTS_LIST !== 'undefined' ? MFNH_PROJECTS_LIST : [];
    const filtered = filter === 'all' ? list : list.filter(p => p.category === filter);

    filtered.forEach((p, i) => {
        const isVideoProject = p.isVideoProject;
        const card = document.createElement('div');
        card.className = 'work-card-compact' + (isVideoProject ? ' video-card' : '');
        card.dataset.id = p.id;
        card.setAttribute('data-animate', '');
        card.setAttribute('data-delay', (i % 4) * 0.08);

        // For video projects: always-on silent looping preview from middle frame
        const thumbContent = isVideoProject
            ? `<div class="wcc-thumb" style="position:relative;overflow:hidden;aspect-ratio:16/9;background:#000;">
                 <video class="wcc-video-preview" src="${p.videos[0].src}" autoplay muted loop playsinline preload="metadata"></video>
                 <div class="wcc-play-badge">${ICO_PLAY}</div>
               </div>`
            : `<div class="wcc-image-wrap">
                 <img src="${p.thumb}" alt="${p.title}" onerror="this.src='${FALLBACK_SVG}'">
               </div>`;

        card.innerHTML = `
            ${thumbContent}
            <div class="wcc-info">
                <h3 class="wcc-title">${p.title}</h3>
                <div class="wcc-meta">
                    <span class="wcc-badge">${p.type}</span>
                    <span>${p.year}</span>
                    <span class="wcc-arrow">${isVideoProject ? '▶' : '↗'}</span>
                </div>
            </div>
        `;

        // Always-on: play from middle frame regardless of hover
        if (isVideoProject) {
            const vid = card.querySelector('.wcc-video-preview');
            if (vid) {
                vid.muted = true;
                vid.loop = true;
                const playFromMiddle = () => {
                    if (vid.duration && isFinite(vid.duration)) {
                        vid.currentTime = vid.duration * 0.45;
                    }
                    vid.play().catch(() => {});
                };
                if (vid.readyState >= 1) playFromMiddle();
                else vid.addEventListener('loadedmetadata', playFromMiddle, { once: true });
                vid.play().catch(() => {});
            }
        }

        card.addEventListener('click', e => {
            e.preventDefault();
            // Kickfest routes to sub-landing
            if (p.id === 'kickfest') {
                window.location.href = 'kickfest.html';
                return;
            }
            // Video-only projects: open intermediate clean video list
            if (p.isVideoProject) {
                openVideoListModal(p.id);
                return;
            }
            // Standard image/case study projects (including RTSR)
            openProjectModal(p.id);
        });

        grid.appendChild(card);
    });

    initScrollAnims();
}

/* ============================================================
   4. FILTER CONTROLS
   ============================================================ */
function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const grid = document.getElementById('projectGrid');
            if (!grid) return;
            grid.style.opacity = '0';
            grid.style.transform = 'translateY(12px)';
            grid.style.transition = '0.25s ease';
            setTimeout(() => {
                renderSelectedWorks(btn.dataset.filter);
                requestAnimationFrame(() => {
                    grid.style.opacity = '1';
                    grid.style.transform = 'translateY(0)';
                });
            }, 250);
        });
    });
}

/* ============================================================
   5. STANDARD IMAGE-BASED PROJECT MODAL (RTSR: VERTICAL REELS)
   ============================================================ */
function openProjectModal(projectId, assetPrefix = '') {
    const p = (typeof MFNH_PROJECTS !== 'undefined') ? MFNH_PROJECTS[projectId] : null;
    if (!p) return;

    let modal = document.getElementById('projectModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'projectModal';
        modal.className = 'project-modal';
        document.body.appendChild(modal);
    }

    /* Build image section HTML */
    let sectionsHtml = '';
    (p.sections || []).forEach(sec => {
        const rowClass = sec.layout === '3col' ? 'modal-asset-row-3col' : 'modal-asset-row-2col';
        let imagesHtml = sec.images.map(img => `
            <div class="modal-asset-card">
                <img src="${assetPrefix}${img.src}" alt="${img.alt}" loading="lazy">
            </div>`).join('');
        sectionsHtml += `
            <div class="modal-asset-section">
                <h3 class="modal-asset-section-title">${sec.title}</h3>
                <p class="modal-asset-section-desc">${sec.desc}</p>
                <div class="${rowClass}">${imagesHtml}</div>
            </div>`;
    });

    /* RTSR ONLY: Vertical format video cards with always-on auto-looping preview */
    let videoReelHtml = '';
    if (p.hasVideos && p.videos && p.videos.length) {
        const isRTSR = p.id === 'rtsr';
        const reelCards = p.videos.map((v, idx) => `
            <div class="modal-reel-card${isRTSR ? ' vertical' : ''}" data-video-idx="${idx}" data-project-id="${p.id}">
                <div class="modal-reel-top">
                    <video src="${assetPrefix}${v.src}" autoplay muted loop playsinline preload="metadata"></video>
                    <div class="modal-reel-play">${ICO_PLAY}</div>
                </div>
                <div class="modal-reel-info">
                    <span class="modal-reel-title">${v.title}</span>
                    <span class="modal-reel-sub">Campaign Reel // 0${idx + 1}</span>
                </div>
            </div>`).join('');
        videoReelHtml = `
            <div class="modal-video-section-label">Campaign Reels — Vertical Video Series</div>
            <div class="modal-video-reels-grid">${reelCards}</div>`;
    }

    const bannerHtml = `<div class="modal-hero-banner"><img src="${assetPrefix}${p.thumb}" alt="${p.title} Key Visual"></div>`;

    modal.innerHTML = `
        <div class="modal-nav-bar">
            <button class="modal-back-btn" id="modalBackBtn" title="Back to Overview">
                ${ICO_BACK}<span>Back to Overview</span>
            </button>
            <div class="modal-category-tag">${p.client} // ${p.categoryLabel}</div>
            <button class="modal-close-icon" id="modalCloseBtn" title="Close (Esc)">
                <span>Close</span>${ICO_CLOSE}
            </button>
        </div>

        <div class="modal-container">
            ${bannerHtml}
            <div class="modal-header-block">
                <h2 class="modal-project-title">${p.title}</h2>
                <p class="modal-subtitle">${p.subtitle}</p>
            </div>
            <div class="modal-specs-table">
                <div class="modal-spec-item"><span class="modal-spec-label">Client</span><span class="modal-spec-val">${p.client}</span></div>
                <div class="modal-spec-item"><span class="modal-spec-label">Role</span><span class="modal-spec-val">${p.role}</span></div>
                <div class="modal-spec-item"><span class="modal-spec-label">Discipline</span><span class="modal-spec-val">${p.categoryLabel}</span></div>
                <div class="modal-spec-item"><span class="modal-spec-label">Year</span><span class="modal-spec-val">${p.year}</span></div>
            </div>
            <p class="modal-desc-text">${p.desc}</p>
            <div class="modal-asset-grid">
                ${sectionsHtml}
                ${videoReelHtml}
            </div>
            <div class="modal-bottom-bar">
                <button class="modal-bottom-close-btn" id="modalBottomCloseBtn">
                    ${ICO_BACK}<span>Back / Close Project Table</span>
                </button>
            </div>
        </div>`;

    document.getElementById('modalBackBtn').addEventListener('click', closeProjectModal);
    document.getElementById('modalCloseBtn').addEventListener('click', closeProjectModal);
    document.getElementById('modalBottomCloseBtn').addEventListener('click', closeProjectModal);

    /* Wire reel cards → always-on looping preview + open full player on click */
    modal.querySelectorAll('.modal-reel-card').forEach(rc => {
        const vid = rc.querySelector('video');
        if (vid) {
            vid.muted = true;
            vid.loop = true;
            const bootPreview = () => {
                if (vid.duration && isFinite(vid.duration)) vid.currentTime = vid.duration * 0.35;
                vid.play().catch(() => {});
            };
            if (vid.readyState >= 1) bootPreview();
            else vid.addEventListener('loadedmetadata', bootPreview, { once: true });
            vid.play().catch(() => {});
        }
        rc.addEventListener('click', () => {
            const idx = parseInt(rc.dataset.videoIdx);
            const pid = rc.dataset.projectId;
            openFullVideoPlayer(pid, idx, assetPrefix, 'modal');
        });
    });

    /* NOTE: Image lightbox for modal images is handled by the
       capture-phase universal delegate below (fires on any img click
       inside .project-modal.active). No per-image wiring needed here. */

    modal.classList.add('active');
    modal.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    history.pushState({ modalOpen: p.id }, '', `#project-${p.id}`);
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal || !modal.classList.contains('active')) return;
    modal.querySelectorAll('video').forEach(v => { v.pause(); v.src = ''; });
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (window.location.hash.startsWith('#project-')) {
        history.pushState(null, '', window.location.pathname);
    }
}

/* ============================================================
   6. VIDEO LIST MODAL (BBTH & Music Videos: Clean, Balanced 16/9)
   ============================================================ */
function openVideoListModal(projectId, assetPrefix = '') {
    const p = (typeof MFNH_PROJECTS !== 'undefined') ? MFNH_PROJECTS[projectId] : null;
    if (!p || !p.videos) return;

    const existing = document.getElementById('videoListModal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'videoListModal';
    modal.className = 'video-list-modal';

    // Standard 16/9 balanced layout - always-on silent looping preview
    const videoCards = p.videos.map((v, idx) => `
        <div class="vlm-video-card" data-video-idx="${idx}" data-project-id="${p.id}">
            <div class="vlm-video-top">
                <video src="${assetPrefix}${v.src}" autoplay muted loop playsinline preload="metadata"></video>
                <div class="vlm-vc-play">${ICO_PLAY}</div>
            </div>
            <div class="vlm-video-info">
                <div class="vlm-vc-title">${v.title}</div>
                <div class="vlm-vc-dir">Directed by ${v.dir}</div>
            </div>
        </div>`).join('');

    modal.innerHTML = `
        <div class="vlm-nav">
            <button class="vlm-back" id="vlmBackBtn">${ICO_BACK}<span>Back to Overview</span></button>
            <div class="vlm-title">${p.title}</div>
            <button class="vlm-close" id="vlmCloseBtn">${ICO_CLOSE}<span>Close</span></button>
        </div>
        <div class="vlm-header">
            <h2>${p.title}</h2>
            <p>${p.desc}</p>
        </div>
        <div class="vlm-grid">${videoCards}</div>`;

    document.body.appendChild(modal);

    /* Always-on silent looping preview for every video card */
    modal.querySelectorAll('.vlm-video-card').forEach(vc => {
        const vid = vc.querySelector('video');
        if (vid) {
            vid.muted = true;
            vid.loop = true;
            const bootPreview = () => {
                if (vid.duration && isFinite(vid.duration)) vid.currentTime = vid.duration * 0.35;
                vid.play().catch(() => {});
            };
            if (vid.readyState >= 1) bootPreview();
            else vid.addEventListener('loadedmetadata', bootPreview, { once: true });
            vid.play().catch(() => {});
        }
        vc.addEventListener('click', () => {
            const idx = parseInt(vc.dataset.videoIdx);
            const pid = vc.dataset.projectId;
            openFullVideoPlayer(pid, idx, assetPrefix, 'vlm');
        });
    });

    document.getElementById('vlmBackBtn').addEventListener('click', closeVideoListModal);
    document.getElementById('vlmCloseBtn').addEventListener('click', closeVideoListModal);

    requestAnimationFrame(() => { modal.classList.add('active'); });
    document.body.style.overflow = 'hidden';
    history.pushState({ vlmOpen: projectId }, '', `#videos-${projectId}`);
}

function closeVideoListModal() {
    const modal = document.getElementById('videoListModal');
    if (!modal) return;
    modal.querySelectorAll('video').forEach(v => { v.pause(); v.src = ''; });
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 350);
    document.body.style.overflow = '';
    if (window.location.hash.startsWith('#videos-')) {
        history.pushState(null, '', window.location.pathname);
    }
}

/* ============================================================
   7. FULL VIDEO PLAYER MODAL (FULLY WORKING CONTROLS)
   ============================================================ */
function openFullVideoPlayer(projectId, videoIdx, assetPrefix = '', returnTarget = 'modal') {
    const p = (typeof MFNH_PROJECTS !== 'undefined') ? MFNH_PROJECTS[projectId] : null;
    if (!p || !p.videos || !p.videos[videoIdx]) return;

    const vData = p.videos[videoIdx];
    const prev = document.getElementById('videoPlayerModal');
    if (prev) prev.remove();

    const vpm = document.createElement('div');
    vpm.id = 'videoPlayerModal';
    vpm.className = 'video-player-modal';

    vpm.innerHTML = `
        <div class="vpm-nav">
            <button class="vpm-back" id="vpmBackBtn">${ICO_BACK}<span>Back to Videos</span></button>
            <button class="vpm-close-btn" id="vpmCloseBtn">${ICO_CLOSE}<span>Close</span></button>
        </div>
        <div class="vpm-stage">
            <video id="vpmVideo" src="${assetPrefix}${vData.src}" playsinline preload="metadata"></video>
        </div>
        <div class="vpm-controls">
            <div class="vpm-progress-wrap">
                <div class="vpm-progress" id="vpmProgress">
                    <div class="vpm-progress-fill" id="vpmFill"></div>
                </div>
                <div class="vpm-time" id="vpmTime">0:00 / 0:00</div>
            </div>
            <div class="vpm-bottom-row">
                <div class="vpm-left-controls">
                    <button class="vpm-btn" id="vpmPlayBtn" title="Play / Pause" aria-label="Play / Pause">
                        ${ICO_PAUSE}
                    </button>
                    <div class="vpm-volume-wrap">
                        <button class="vpm-btn" id="vpmMuteBtn" title="Mute / Unmute" aria-label="Mute / Unmute">
                            ${ICO_VOL}
                        </button>
                        <input type="range" class="vpm-volume-slider" id="vpmVolume" min="0" max="1" step="0.05" value="0.8">
                    </div>
                    <button class="vpm-btn" id="vpmFullBtn" title="Fullscreen" aria-label="Fullscreen">
                        ${ICO_FULL}
                    </button>
                </div>
                <div class="vpm-meta">
                    <div class="vpm-meta-title">${vData.title}</div>
                    <div class="vpm-meta-dir">Directed by ${vData.dir}</div>
                </div>
            </div>
        </div>`;

    document.body.appendChild(vpm);
    requestAnimationFrame(() => vpm.classList.add('active'));

    const video    = vpm.querySelector('#vpmVideo');
    const playBtn  = vpm.querySelector('#vpmPlayBtn');
    const muteBtn  = vpm.querySelector('#vpmMuteBtn');
    const volSlide = vpm.querySelector('#vpmVolume');
    const progress = vpm.querySelector('#vpmProgress');
    const fill     = vpm.querySelector('#vpmFill');
    const timeDisp = vpm.querySelector('#vpmTime');
    const fullBtn  = vpm.querySelector('#vpmFullBtn');
    const stage    = vpm.querySelector('.vpm-stage');

    /* Sync play icon */
    function syncPlayIcon() {
        playBtn.innerHTML = (video.paused || video.ended) ? ICO_PLAY : ICO_PAUSE;
    }

    function togglePlay() {
        if (video.paused || video.ended) {
            video.play().then(() => syncPlayIcon()).catch(() => {});
        } else {
            video.pause();
            syncPlayIcon();
        }
    }

    playBtn.addEventListener('click', e => {
        e.stopPropagation();
        togglePlay();
    });

    stage.addEventListener('click', e => {
        if (e.target.closest('.vpm-controls') || e.target.closest('.vpm-nav')) return;
        togglePlay();
    });

    video.addEventListener('play', syncPlayIcon);
    video.addEventListener('pause', syncPlayIcon);
    video.addEventListener('ended', syncPlayIcon);

    /* Volume controls */
    let lastVolume = 0.8;
    function setVolume(val) {
        val = Math.max(0, Math.min(1, parseFloat(val)));
        video.volume = val;
        video.muted = (val === 0);
        volSlide.value = val;
        muteBtn.innerHTML = video.muted ? ICO_MUTE : ICO_VOL;
        if (val > 0) lastVolume = val;
    }

    muteBtn.addEventListener('click', e => {
        e.stopPropagation();
        if (video.muted || video.volume === 0) {
            setVolume(lastVolume || 0.8);
        } else {
            lastVolume = video.volume || 0.8;
            setVolume(0);
        }
    });

    volSlide.addEventListener('input', e => {
        e.stopPropagation();
        setVolume(volSlide.value);
    });
    volSlide.addEventListener('click', e => e.stopPropagation());

    /* Start playback (with browser policy fallback) */
    setVolume(0.8);
    const playAttempt = video.play();
    if (playAttempt !== undefined) {
        playAttempt.then(() => syncPlayIcon()).catch(() => {
            // Unmuted autoplay blocked by browser: fallback to muted autoplay
            video.muted = true;
            muteBtn.innerHTML = ICO_MUTE;
            volSlide.value = 0;
            video.play().then(() => syncPlayIcon()).catch(() => syncPlayIcon());
        });
    }

    /* Format time */
    function fmtTime(s) {
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60).toString().padStart(2, '0');
        return `${m}:${sec}`;
    }

    video.addEventListener('timeupdate', () => {
        if (!video.duration) return;
        const pct = (video.currentTime / video.duration) * 100;
        fill.style.width = pct + '%';
        timeDisp.textContent = `${fmtTime(video.currentTime)} / ${fmtTime(video.duration)}`;
    });

    /* Progress seeking */
    function seekTo(e) {
        const rect = progress.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        if (video.duration && isFinite(video.duration)) {
            video.currentTime = pct * video.duration;
            fill.style.width = (pct * 100) + '%';
        }
    }
    progress.addEventListener('click', seekTo);
    progress.addEventListener('touchstart', seekTo, { passive: true });

    /* Fullscreen */
    fullBtn.addEventListener('click', e => {
        e.stopPropagation();
        if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            const req = vpm.requestFullscreen || vpm.webkitRequestFullscreen || video.webkitEnterFullscreen;
            if (req) req.call(vpm);
        } else {
            const exit = document.exitFullscreen || document.webkitExitFullscreen;
            if (exit) exit.call(document);
        }
    });

    /* Close video player */
    function closePlayer() {
        video.pause();
        video.src = '';
        vpm.classList.remove('active');
        setTimeout(() => vpm.remove(), 350);
        document.removeEventListener('keydown', onKeyDown);
        // Resume background preview videos
        document.querySelectorAll('.modal-reel-card video, .vlm-video-card video, .wcc-video-preview').forEach(v => {
            try { v.play().catch(() => {}); } catch(err) {}
        });
        history.pushState(null, '', window.location.pathname);
    }

    // Pause background preview videos while player is active
    document.querySelectorAll('.modal-reel-card video, .vlm-video-card video, .wcc-video-preview').forEach(v => {
        try { v.pause(); } catch(err) {}
    });

    vpm.querySelector('#vpmBackBtn').addEventListener('click', closePlayer);
    vpm.querySelector('#vpmCloseBtn').addEventListener('click', closePlayer);

    function onKeyDown(e) {
        if (e.key === 'Escape') {
            closePlayer();
        } else if (e.code === 'Space' && e.target === document.body) {
            e.preventDefault();
            togglePlay();
        }
    }
    document.addEventListener('keydown', onKeyDown);

    history.pushState({ vpmOpen: true }, '', `#playing-${projectId}-${videoIdx}`);
}

/* ============================================================
   8. IMAGE LIGHTBOX WITH PREV/NEXT NAVIGATION
   ============================================================ */
let _lightboxGallery = [];
let _lightboxIdx = 0;

function openImageLightbox(gallery, startIndex = 0) {
    if (!gallery || !gallery.length) return;
    _lightboxGallery = gallery;
    _lightboxIdx = Math.max(0, Math.min(startIndex, gallery.length - 1));

    let modal = document.getElementById('imageLightboxModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageLightboxModal';
        modal.className = 'image-lightbox-modal';
        document.body.appendChild(modal);
    }

    const item = _lightboxGallery[_lightboxIdx];
    const hasMultiple = _lightboxGallery.length > 1;

    modal.innerHTML = `
        <div class="ilm-nav">
            <button class="ilm-btn" id="ilmCloseBtn">
                ${ICO_BACK}<span>Back / Close</span>
            </button>
            <div class="ilm-caption" id="ilmCaption">${item.alt || 'Visual Deliverable'}</div>
            <button class="ilm-btn" id="ilmCloseBtnR" title="Close (ESC)">
                ${ICO_CLOSE}<span>Close</span>
            </button>
        </div>
        <div class="ilm-stage" id="ilmStage">
            ${hasMultiple ? `<button class="ilm-arrow ilm-prev" id="ilmPrevBtn" title="Previous (←)">${ICO_PREV}</button>` : ''}
            <div class="ilm-img-wrap" id="ilmImgWrap">
                <img id="ilmImg" src="${item.src}" alt="${item.alt || ''}">
            </div>
            ${hasMultiple ? `<button class="ilm-arrow ilm-next" id="ilmNextBtn" title="Next (→)">${ICO_NEXT}</button>` : ''}
        </div>
        <div class="ilm-footer">
            <span id="ilmCounter">${_lightboxIdx + 1} / ${_lightboxGallery.length}</span>
            <span class="ilm-hint">${hasMultiple ? '← → Navigate  ·  ESC to close' : 'ESC to close'}</span>
        </div>
    `;

    const imgEl = modal.querySelector('#ilmImg');
    if (imgEl) {
        imgEl.style.opacity = '1';
        imgEl.style.transform = 'scale(1)';
        imgEl.style.transition = 'opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
    }

    const goTo = (newIdx) => {
        newIdx = (newIdx + _lightboxGallery.length) % _lightboxGallery.length;
        _lightboxIdx = newIdx;
        const it = _lightboxGallery[newIdx];
        const img = modal.querySelector('#ilmImg');
        const cap = modal.querySelector('#ilmCaption');
        const counter = modal.querySelector('#ilmCounter');

        if (cap) cap.textContent = it.alt || 'Visual Deliverable';
        if (counter) counter.textContent = (newIdx + 1) + ' / ' + _lightboxGallery.length;

        if (img) {
            img.style.opacity = '0.35';
            img.style.transform = 'scale(0.98)';
            const reveal = () => {
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            };
            img.onload = reveal;
            img.onerror = reveal;
            img.src = it.src;
            img.alt = it.alt || '';
            setTimeout(reveal, 120);
        }
    };

    modal.querySelector('#ilmCloseBtn').addEventListener('click', closeImageLightbox);
    modal.querySelector('#ilmCloseBtnR').addEventListener('click', closeImageLightbox);
    modal.querySelector('#ilmStage').addEventListener('click', (e) => {
        if (e.target.id === 'ilmStage') closeImageLightbox();
    });
    if (hasMultiple) {
        modal.querySelector('#ilmPrevBtn').addEventListener('click', (e) => { e.stopPropagation(); goTo(_lightboxIdx - 1); });
        modal.querySelector('#ilmNextBtn').addEventListener('click', (e) => { e.stopPropagation(); goTo(_lightboxIdx + 1); });
    }

    // Touch swipe support
    let touchStartX = 0;
    modal.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    modal.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50 && hasMultiple) goTo(_lightboxIdx + (dx < 0 ? 1 : -1));
    }, { passive: true });

    requestAnimationFrame(() => modal.classList.add('active'));
    document.body.style.overflow = 'hidden';
}

function closeImageLightbox() {
    const modal = document.getElementById('imageLightboxModal');
    if (!modal || !modal.classList.contains('active')) return;
    modal.classList.remove('active');
    const activeProjectModal = document.querySelector('.project-modal.active, #projectModal.active');
    if (activeProjectModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

/* ============================================================
   9. MODAL CONTROLS (ESC, backdrop, popstate, lightbox keys)
   ============================================================ */
function initModalControls() {
    document.addEventListener('click', e => {
        const modal = document.getElementById('projectModal');
        if (modal && modal.classList.contains('active') && e.target === modal) closeProjectModal();
    });

    document.addEventListener('keydown', e => {
        // Lightbox gets top priority
        const ilm = document.getElementById('imageLightboxModal');
        if (ilm && ilm.classList.contains('active')) {
            if (e.key === 'Escape') { closeImageLightbox(); return; }
            if (e.key === 'ArrowLeft')  { ilm.querySelector('#ilmPrevBtn')?.click(); return; }
            if (e.key === 'ArrowRight') { ilm.querySelector('#ilmNextBtn')?.click(); return; }
            return;
        }

        if (e.key !== 'Escape') return;
        const vpm = document.getElementById('videoPlayerModal');
        if (vpm && vpm.classList.contains('active')) return; // handled inside player
        const vlm = document.getElementById('videoListModal');
        if (vlm && vlm.classList.contains('active')) { closeVideoListModal(); return; }
        closeProjectModal();
    });

    window.addEventListener('popstate', () => {
        const ilm = document.getElementById('imageLightboxModal');
        if (ilm?.classList.contains('active')) { closeImageLightbox(); return; }
        const vpm = document.getElementById('videoPlayerModal');
        if (vpm && vpm.classList.contains('active')) {
            vpm.querySelector('#vpmBackBtn')?.click();
            return;
        }
        const vlm = document.getElementById('videoListModal');
        if (vlm && vlm.classList.contains('active')) { closeVideoListModal(); return; }
        closeProjectModal();
    });
}

/* ============================================================
   UNIVERSAL IMAGE LIGHTBOX EVENT DELEGATION
   Handles:
   1. Any image/card clicked inside an active project modal (.project-modal.active)
   2. Profile image (.about-visual / .av-frame)
   Excludes:
   Outer card thumbnails (.work-card-compact, .hcol-clean, etc.) so they open modals.
   ============================================================ */
document.addEventListener('click', function(e) {
    if (e.target.closest('#imageLightboxModal')) return;

    // Skip UI chrome
    if (e.target.closest('.logo, .nav-cta, .cursor-dot, .vpm-controls, .modal-nav-bar, .ilm-nav, .burger')) return;

    // Outer grid thumbnails must trigger card click to open modal, not lightbox
    if (e.target.closest('.work-card-compact, .hcol-clean, .category-project-card, .kickfest-sub-card')) {
        return;
    }

    // 1. Inside active project modal
    const insideActiveModal = e.target.closest('.project-modal.active, #projectModal.active');
    if (insideActiveModal) {
        const clickedTarget = e.target.closest('.modal-asset-card, .modal-hero-banner') || (e.target.tagName === 'IMG' ? e.target : null);
        if (!clickedTarget) return;

        const img = clickedTarget.tagName === 'IMG' ? clickedTarget : clickedTarget.querySelector('img');
        if (!img) return;

        const src = img.currentSrc || img.src || img.getAttribute('src');
        if (!src || src === '' || src === window.location.href) return;

        e.preventDefault();
        e.stopPropagation();

        const isRealImg = (i) => {
            const s = i.currentSrc || i.src || '';
            return s && s !== '' && s !== window.location.href
                && !s.includes('IMAGE NOT FOUND') && !s.includes('VmlzdWFsIEFzc2V0');
        };

        const modalImgs = Array.from(insideActiveModal.querySelectorAll(
            '.modal-hero-banner img, .modal-asset-card img'
        )).filter(isRealImg);

        let gallery, startIndex;
        if (modalImgs.length > 0) {
            gallery = modalImgs.map(i => ({ src: i.currentSrc || i.src, alt: i.alt || 'Deliverable Asset' }));
            startIndex = Math.max(0, modalImgs.indexOf(img));
        } else {
            gallery = [{ src: src, alt: img.alt || 'Visual Deliverable' }];
            startIndex = 0;
        }

        openImageLightbox(gallery, startIndex);
        return;
    }

    // 2. Profile picture in Profile section
    const profileWrap = e.target.closest('.av-frame, .about-visual');
    if (profileWrap) {
        const pImg = profileWrap.querySelector('img');
        if (pImg) {
            e.preventDefault();
            e.stopPropagation();
            const pSrc = pImg.currentSrc || pImg.src || pImg.getAttribute('src');
            openImageLightbox([{ src: pSrc, alt: pImg.alt || 'Creative Profile — M. Fariz Nabil Heryana' }], 0);
        }
        return;
    }
}, true);

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
function initCursor() {
    const dot = document.getElementById('cursorDot');
    if (!dot) return;
    if (window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
        dot.style.display = 'none';
        return;
    }
    let targetX = -100, targetY = -100, curX = -100, curY = -100;
    let hasMoved = false;

    document.addEventListener('mousemove', e => {
        targetX = e.clientX;
        targetY = e.clientY;
        if (!hasMoved) {
            curX = targetX;
            curY = targetY;
            hasMoved = true;
            dot.style.opacity = '1';
        }
        const isInteractive = e.target.closest('a, button, .work-card-compact, .hcol-clean, .vlm-video-card, .kickfest-sub-card, .category-project-card, .modal-asset-card, .ilm-btn, .ilm-arrow');
        dot.classList.toggle('hover', !!isInteractive);
    }, { passive: true });

    document.addEventListener('mousedown', () => dot.classList.add('active'));
    document.addEventListener('mouseup',   () => dot.classList.remove('active'));

    function render() {
        if (hasMoved) {
            curX += (targetX - curX) * 0.25;
            curY += (targetY - curY) * 0.25;
            dot.style.left = curX + 'px';
            dot.style.top  = curY + 'px';
        }
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50), { passive: true });
}

/* ============================================================
   MOBILE MENU (WITH ANIMATED BURGER)
   ============================================================ */
function initMobileMenu() {
    const burger = document.getElementById('burger');
    const menu   = document.getElementById('mobileMenu');
    if (!burger || !menu) return;
    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        menu.classList.toggle('open');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        burger.classList.remove('open');
        menu.classList.remove('open');
        document.body.style.overflow = '';
    }));
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
function initScrollAnims() {
    const els = document.querySelectorAll('[data-animate]:not(.visible)');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const delay = parseFloat(e.target.dataset.delay || 0);
                setTimeout(() => e.target.classList.add('visible'), delay * 160);
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
}

/* ============================================================
   SMOOTH SCROLL & INCOMING HASH HANDLER
   ============================================================ */
function handleIncomingHash() {
    const hash = window.location.hash;
    if (hash && (hash === '#work' || hash === '#about' || hash === '#services' || hash === '#contact' || hash === '#home')) {
        const scrollToTarget = () => {
            const target = document.querySelector(hash);
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        };
        setTimeout(scrollToTarget, 100);
        setTimeout(scrollToTarget, 300);
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href*="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const href = a.getAttribute('href');
            if (!href) return;
            const hashIndex = href.indexOf('#');
            if (hashIndex === -1) return;
            const hash = href.substring(hashIndex);
            if (!hash || hash === '#' || hash.startsWith('#project-') || hash.startsWith('#videos-') || hash.startsWith('#playing-')) return;
            
            const target = document.querySelector(hash);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
                history.pushState(null, '', hash);
            }
        });
    });
}
