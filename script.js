/* ============================================================
   MFNH PORTFOLIO — SWISS EDITORIAL REDESIGN
   ============================================================ */

/* ===== PROJECT DATA ===== */
const projects = [
    {
        id: 'biofarma',
        client: 'Bio Farma',
        title: 'Update Imun',
        category: 'campaign',
        type: 'Healthcare Campaign',
        year: '2025',
        role: 'Key Visual & Campaign Assets',
        desc: 'Designed and executed visual content for Bio Farma\'s "Update Imun" product across social media, stories, and website platforms, ensuring consistent branding, clarity of information, and audience engagement within a healthcare communication context.',
        gallery: [320, 420, 280, 360]
    },
    {
        id: 'bankbjb',
        client: 'Bank BJB',
        title: 'Visual 360°',
        category: 'campaign',
        type: 'Banking Campaign',
        year: '2026',
        role: 'Visual Campaign Design',
        desc: 'A 360° visual campaign developed for Bank BJB with a strong focus on event promotions, printed materials, and integrated campaign visuals. By combining bold layouts, strategic typography, and modern visual direction, the campaign translated Bank BJB\'s brand identity into engaging promotional experiences.',
        gallery: [340, 400, 300, 360, 280, 420]
    },
    {
        id: 'fashion',
        client: 'Various',
        title: 'Apparel Design',
        category: 'fashion',
        type: 'Fashion & Style',
        year: '2026',
        role: 'Visual Direction',
        desc: 'This project showcases a series of fashion design works developed for a range of local and international brands. The scope includes concept development, visual direction, and execution across apparel design, layout composition, and supporting campaign materials.',
        gallery: [400, 300, 360, 280, 420, 300]
    },
    {
        id: 'suaraperempuan',
        client: 'DP3A',
        title: 'Suara Perempuan',
        category: 'campaign',
        type: 'Social Campaign',
        year: '2024',
        role: 'Content System',
        desc: '"Suara Perempuan" is a self-initiated campaign project developed to explore a 360° visual approach for social awareness. The project focuses on amplifying women\'s voices through strong, clear, and impactful visuals, translating social narratives into a cohesive visual system.',
        gallery: [360, 300, 400, 280, 340]
    },
    {
        id: 'eventcampaign',
        client: 'Impartairial',
        title: 'Verse II Launch',
        category: 'visual',
        type: 'Event Promotion',
        year: '2025',
        role: 'Event Visual Design',
        desc: 'This self-initiated project is a 360° campaign for the launch of Impartairial Verse II and the short film Resonansi, combining music and film into one cohesive visual narrative.',
        gallery: [300, 380, 340, 420, 300]
    },
    {
        id: 'typography',
        client: 'Confidential',
        title: 'Bespoke Type',
        category: 'branding',
        type: 'Typography',
        year: '2025',
        role: 'Typeface Design',
        desc: 'A custom typography project created for an international brand, combining metal and tribal influences into a bold and distinctive lettering system.',
        gallery: [300, 400, 340, 280]
    },
    {
        id: 'albumcover',
        client: 'Various',
        title: 'Single Covers',
        category: 'branding',
        type: 'Music Identity',
        year: '2026',
        role: 'Artwork Design',
        desc: 'Designed cover artworks for various artists across multiple music genres, focusing on creating distinctive visual identities for each release.',
        gallery: [380]
    },
    {
        id: 'rtsr',
        client: 'RTSR',
        title: 'End Year Sale',
        category: 'campaign',
        type: 'Retail Campaign',
        year: '2024',
        role: 'Key Visual',
        desc: 'RTSR End Year Campaign was developed under a tight timeline, focusing on fast concept development and efficient execution for social media platforms.',
        gallery: [340]
    }
];

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initCursor();
    initNavbar();
    initMobileMenu();
    renderProjects();
    initFilters();
    initProjectDetail();
    initLightbox();
    initScrollAnims();
    initSmoothScroll();
});

/* ===== LOADER ===== */
function initLoader() {
    const loader = document.getElementById('loader');
    const pct = document.getElementById('loaderPct');
    
    let p = 0;
    const interval = setInterval(() => {
        p += Math.floor(Math.random() * 15) + 5;
        if (p > 100) p = 100;
        
        if (pct) pct.textContent = p + '%';

        if (p === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hide');
                setTimeout(() => triggerHeroAnims(), 500);
            }, 400);
        }
    }, 80);
}

function triggerHeroAnims() {
    document.querySelectorAll('[data-animate]').forEach((el) => {
        const delay = parseFloat(el.dataset.delay || 0);
        setTimeout(() => el.classList.add('visible'), delay * 200);
    });
}

/* ===== CUSTOM CURSOR ===== */
function initCursor() {
    const dot = document.getElementById('cursorDot');
    if (!dot) return;

    let targetX = -100, targetY = -100;
    let curX = -100, curY = -100;

    document.addEventListener('mousemove', e => {
        targetX = e.clientX;
        targetY = e.clientY;

        const target = e.target;
        const isInteractive = target.closest('a') || target.closest('button') || target.closest('.work-card');
        
        if (isInteractive) {
            dot.classList.add('hover');
        } else {
            dot.classList.remove('hover');
        }
    });

    document.addEventListener('mousedown', () => dot.classList.add('active'));
    document.addEventListener('mouseup', () => dot.classList.remove('active'));

    function render() {
        curX += (targetX - curX) * 0.2;
        curY += (targetY - curY) * 0.2;
        dot.style.left = curX + 'px';
        dot.style.top = curY + 'px';
        requestAnimationFrame(render);
    }
    render();
}

/* ===== NAVBAR ===== */
function initNavbar() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });
}

/* ===== MOBILE MENU ===== */
function initMobileMenu() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobileMenu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('open');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            menu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

/* ===== RENDER PROJECTS (3-COLUMN GRID) ===== */
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    
    // Fallback SVG image
    const fallbackSvg = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDcwNzA3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzMzMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij5WaXN1YWwgQXNzZXQ8L3RleHQ+PC9zdmc+`;

    filtered.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'work-card';
        card.dataset.id = p.id;
        card.setAttribute('data-animate', '');
        card.setAttribute('data-delay', (i % 2) * 0.1); // Stagger based on column

        card.innerHTML = `
            <div class="wc-image-wrap">
                <img src="Assets/${p.id}/thumb.svg" alt="${p.title}" onerror="this.src='${fallbackSvg}'">
            </div>
            <div class="wc-info">
                <h3 class="wc-title">${p.title}</h3>
                <div class="wc-meta">
                    <span>${p.type}</span>
                    <span>${p.year}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    initScrollAnims(); // Re-trigger animations

    grid.querySelectorAll('.work-card').forEach(card => {
        card.addEventListener('click', () => {
            const p = projects.find(x => x.id === card.dataset.id);
            if (p) openModal(p);
        });
    });
}

/* ===== FILTERS ===== */
function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const grid = document.getElementById('projectGrid');
            grid.style.opacity = '0';
            grid.style.transform = 'translateY(20px)';
            grid.style.transition = '0.4s';

            setTimeout(() => {
                renderProjects(btn.dataset.filter);
                requestAnimationFrame(() => {
                    grid.style.opacity = '1';
                    grid.style.transform = 'translateY(0)';
                });
            }, 400);
        });
    });
}

/* ===== PROJECT MODAL ===== */
function openModal(p) {
    const modal = document.getElementById('projectModal');
    const hero = document.getElementById('modalHero');
    
    hero.style.backgroundImage = `url('Assets/${p.id}/thumb.svg')`;
    document.getElementById('modalTitle').textContent = p.title;

    document.getElementById('modalMeta').innerHTML = `
        <div><span>Client</span><span>${p.client}</span></div>
        <div><span>Role</span><span>${p.role}</span></div>
        <div><span>Type</span><span>${p.type}</span></div>
        <div><span>Year</span><span>${p.year}</span></div>
    `;

    document.getElementById('modalDesc').innerHTML = `<p>${p.desc}</p>`;

    const gal = document.getElementById('modalGallery');
    gal.innerHTML = '';
    const fallbackSvg = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDcwNzA3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzMzMiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0Ij5WaXN1YWwgQXNzZXQ8L3RleHQ+PC9zdmc+`;

    p.gallery.forEach((g, i) => {
        gal.innerHTML += `<img src="Assets/${p.id}/gallery-${i + 1}.svg" onerror="this.src='${fallbackSvg}'" class="modal-gal-img">`;
    });

    modal.classList.add('active');
    modal.scrollTo(0,0);
    document.body.style.overflow = 'hidden';
}

function initProjectDetail() {
    const modal = document.getElementById('projectModal');
    const close = document.getElementById('modalClose');

    close.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

/* ===== LIGHTBOX ===== */
function initLightbox() {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lbImg');
    const close = document.getElementById('lbClose');
    const prev = document.getElementById('lbPrev');
    const next = document.getElementById('lbNext');
    let currentIndex = 0;

    document.addEventListener('click', e => {
        if (e.target.classList.contains('modal-gal-img')) {
            const items = Array.from(document.querySelectorAll('.modal-gal-img'));
            currentIndex = items.indexOf(e.target);
            img.src = items[currentIndex].src;
            lb.classList.add('active');
        }
    });

    function closeLb() { lb.classList.remove('active'); }
    close.addEventListener('click', closeLb);
    lb.addEventListener('click', e => { if(e.target === lb) closeLb(); });

    prev.addEventListener('click', () => {
        const items = Array.from(document.querySelectorAll('.modal-gal-img'));
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        img.src = items[currentIndex].src;
    });

    next.addEventListener('click', () => {
        const items = Array.from(document.querySelectorAll('.modal-gal-img'));
        currentIndex = (currentIndex + 1) % items.length;
        img.src = items[currentIndex].src;
    });
}

/* ===== SCROLL ANIMATIONS ===== */
function initScrollAnims() {
    const els = document.querySelectorAll('[data-animate]:not(.visible)');
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const delay = parseFloat(e.target.dataset.delay || 0);
                setTimeout(() => e.target.classList.add('visible'), delay * 200);
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
}

/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const href = a.getAttribute('href');
            if (href === '#') return;
            const t = document.querySelector(href);
            if (t) {
                const offset = 80;
                const top = t.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}
