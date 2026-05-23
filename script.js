/* ===== PROJECT DATA ===== */
const projects = [
    {
        id: 'biofarma',
        client: 'Bio Farma',
        title: 'Update Imun Campaign',
        category: 'campaign',
        type: 'Healthcare Campaign',
        year: '2025-2026',
        role: 'Key Visual & Campaign Assets',
        desc: 'Designed and executed visual content for Bio Farmas “Update Imun” product across social media, stories, and website platforms, ensuring consistent branding, clarity of information, and audience engagement within a healthcare communication context.',
        gallery: [320, 420, 280, 360]
    },
    {
        id: 'bankbjb',
        client: 'Bank BJB',
        title: 'Visual Campaign 360°',
        category: 'campaign',
        type: 'Banking & Finance Campaign',
        year: '2025-2026',
        role: 'Visual Campaign Design & Multi-Platform Adaptation',
        desc: 'A 360° visual campaign developed for Bank BJB with a strong focus on event promotions, printed materials, and integrated campaign visuals. The project covered event branding, promotional assets, social media content, motion graphics, and various print collaterals designed to maintain consistency across both digital and physical touchpoints. By combining bold layouts, strategic typography, and modern visual direction, the campaign translated Bank BJB’s brand identity into engaging promotional experiences that strengthened audience attention, brand presence, and campaign impact.',
        gallery: [340, 400, 300, 360, 280, 420]
    },
    {
        id: 'fashion',
        client: 'Various Brands',
        title: 'Apparel & Style Design',
        category: 'fashion',
        type: 'Fashion & Apparel',
        year: '2024 2026',
        role: 'Visual Design & Layout Design',
        desc: 'This project showcases a series of fashion design works developed for a range of local and international brands. The scope includes concept development, visual direction, and execution across apparel design, layout composition, and supporting campaign materials. Each design is tailored to reflect the brands identity while maintaining a strong balance between aesthetic appeal and market relevance. The work emphasizes consistency in visual language, attention to detail, and adaptability across different brand guidelines and target audiences',
        gallery: [400, 300, 360, 280, 420, 300, 360, 280]
    },
    {
        id: 'suaraperempuan',
        client: 'DP3A',
        title: 'Social Campaign Design',
        category: 'campaign',
        type: 'Integrated Campaign Visual Design (360°)',
        year: '2024',
        role: 'Campaign Visual Design & Content System',
        desc: '“Suara Perempuan” is a self-initiated campaign project developed to explore a 360° visual approach for social awareness. The project was designed from concept to full execution, covering key visual development and multi-platform applications including posters, billboards, event materials, merchandise, and digital assets. The campaign focuses on amplifying women\'s voices through strong, clear, and impactful visuals, translating social narratives into a cohesive visual system. This project demonstrates the ability to build scalable campaign assets and maintain consistency across various touchpoints, both print and digital.',
        gallery: [360, 300, 400, 280, 340]
    },
    {
        id: 'eventcampaign',
        client: 'Impartairial',
        title: 'Multi-Platform Event Assets',
        category: 'visual',
        type: 'Event & Promotion',
        year: '2024 — 2025',
        role: 'Event Visual Design & Asset Production',
        desc: 'This self-initiated project is a 360° campaign for the launch of Impartairial Verse II and the short film Resonansi, combining music and film into one cohesive visual narrative. The project includes concept development, key visuals, and multi-platform promotional assets such as social media content, digital campaigns, event collaterals, and supporting materials. The focus was on creating a consistent and scalable visual system that captures the emotional atmosphere of both projects while adapting seamlessly across different media formats.',
        gallery: [300, 380, 340, 420, 300]
    },
    {
        id: 'typography',
        client: 'International Brand (Confidential)',
        title: 'Bespoke Typeface Design',
        category: 'branding',
        type: 'Typography',
        year: '2025',
        role: 'Typeface Design & Lettering',
        desc: 'A custom typography project created for an international brand, combining metal and tribal influences into a bold and distinctive lettering system. The project covered the full process from concept exploration to final vector execution, focusing on expressive letterforms and a strong visual identity. Sharp, aggressive structures were balanced with organic tribal elements to create a cohesive and recognizable typographic style, delivered as a scalable vector system adaptable across multiple branding and visual applications.',
        gallery: [300, 400, 340, 280]
    },
    {
        id: 'albumcover',
        client: 'Various Artists',
        title: 'Visual Identity & Single Cover',
        category: 'branding',
        type: 'Music & Identity',
        year: '2023 — 2026',
        role: 'Artwork Design & Visual Identity',
        desc: 'Designed cover artworks for various artists across multiple music genres, focusing on creating distinctive visual identities for each release. The work involved translating the artist’s sound, mood, and narrative into strong visual compositions through tailored creative approaches. From concept development to final delivery, each artwork was crafted to maintain originality, clarity, and relevance while demonstrating versatility and consistent visual quality across different projects.',
        gallery: [380]
    },
    {
        id: 'rtsr',
        client: 'RTSR',
        title: 'End Year Sale Campaign',
        category: 'campaign',
        type: 'Retail Campaign',
        year: '2024',
        role: 'Campaign Key Visual & Promotional Design',
        desc: 'RTSR End Year Campaign was developed under a tight timeline, focusing on fast concept development and efficient execution for social media platforms. The project covered the full creative process, from campaign direction and visual exploration to final delivery across reels and feed formats. The campaign emphasized cohesive visual consistency between motion and static assets while maintaining a strong brand identity, showcasing the ability to deliver polished and impactful visuals under high-pressure production timelines.',
        gallery: [340]
    }
];

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initLoader();
    initCursor();
    initNavbar();
    initFilters();
    initProjectDetail();
    initLightbox();
    initScrollAnims();
    initSmoothScroll();
});

/* ===== LOADER ===== */
function initLoader() {
    const loader = document.getElementById('loader');
    const bar = loader.querySelector('.loader-progress');
    const pct = document.getElementById('loaderPct');
    let p = 0;

    const interval = setInterval(() => {
        p += Math.random() * 15;
        if (p > 100) p = 100;
        bar.style.width = p + '%';

        if (p === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('fade-out');
                setTimeout(() => {
                    document.querySelectorAll('[data-animate]').forEach((el) => {
                        const delay = el.dataset.delay || 0;
                        setTimeout(() => el.classList.add('visible'), delay * 200);
                    });
                }, 500);
            }, 500);
        }
    }, 100);
}

/* ===== CURSOR & PARTICLES ===== */
function initCursor() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    const cursorLight = document.getElementById('cursorLight');
    const atmo = document.getElementById('atmosphere');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx, dy = my;
    let rx = mx, ry = my;

    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;

        // Hover effects
        const target = e.target;
        if (target.closest('a') || target.closest('button') || target.closest('.project-card') || target.closest('.gallery-item')) {
            dot.classList.add('hover');
            ring.classList.add('hover');
        } else {
            dot.classList.remove('hover');
            ring.classList.remove('hover');
        }
    });

    function renderCursor() {
        dx += (mx - dx) * 0.2;
        dy += (my - dy) * 0.2;
        rx += (mx - rx) * 0.1;
        ry += (my - ry) * 0.1;

        dot.style.transform = `translate(-50%, -50%) translate(${dx}px, ${dy}px)`;
        ring.style.transform = `translate(-50%, -50%) translate(${rx}px, ${ry}px)`;

        if (cursorLight) {
            cursorLight.style.transform = `translate(-50%, -50%) translate(${dx}px, ${dy}px)`;
        }

        // Parallax Atmosphere (110% bounds fix applies here)
        if (atmo) {
            const px = (mx / window.innerWidth - 0.5) * 30;
            const py = (my / window.innerHeight - 0.5) * 30;
            atmo.style.transform = `translate(${px}px, ${py}px)`;
        }

        requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Setup Canvas Particles
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor(isComet = false) {
            this.isComet = isComet;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            if (this.isComet) {
                this.size = Math.random() * 1.5 + 1.5;
                this.speedX = (Math.random() * 4 + 3) * (Math.random() > 0.5 ? 1 : -1);
                this.speedY = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1);
                this.baseOpacity = Math.random() * 0.5 + 0.5;
                this.opacity = this.baseOpacity;
                this.cometTail = [];
            } else {
                // Stars: 90% small, 10% slightly larger
                this.size = Math.random() < 0.9 ? Math.random() * 1.2 + 0.1 : Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.05;
                this.speedY = (Math.random() - 0.5) * 0.05;
                this.baseOpacity = Math.random() * 0.8 + 0.2;
                this.opacity = this.baseOpacity;

                this.twinkleSpeed = Math.random() * 0.02 + 0.005;
                this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
                this.depth = Math.random() * 0.6 + 0.2; // parallax intensity
            }
        }
        update(mouseX, mouseY) {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.isComet) {
                this.cometTail.push({ x: this.x, y: this.y });
                if (this.cometTail.length > 25) this.cometTail.shift();
            } else {
                // Twinkling
                this.opacity += this.twinkleSpeed * this.twinkleDir;
                if (this.opacity >= 1) {
                    this.opacity = 1;
                    this.twinkleDir = -1;
                } else if (this.opacity <= this.baseOpacity * 0.2) {
                    this.opacity = this.baseOpacity * 0.2;
                    this.twinkleDir = 1;
                }

                // Subtle parallax away from mouse
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 250) {
                    this.x -= (dx / dist) * this.depth * 0.15;
                    this.y -= (dy / dist) * this.depth * 0.15;
                }
            }

            // Boundary checks
            if (this.y < -50 || this.y > canvas.height + 50 || this.x < -50 || this.x > canvas.width + 50) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                if (this.isComet) {
                    this.cometTail = [];
                    // Comets spawn from the edge
                    if (Math.random() > 0.5) {
                        this.x = this.speedX > 0 ? -40 : canvas.width + 40;
                    } else {
                        this.y = this.speedY > 0 ? -40 : canvas.height + 40;
                    }
                }
            }
        }
        draw() {
            if (this.isComet && this.cometTail.length > 0) {
                ctx.beginPath();
                ctx.moveTo(this.cometTail[0].x, this.cometTail[0].y);
                for (let i = 1; i < this.cometTail.length; i++) {
                    ctx.lineTo(this.cometTail[i].x, this.cometTail[i].y);
                }
                ctx.lineTo(this.x, this.y);
                const grad = ctx.createLinearGradient(this.cometTail[0].x, this.cometTail[0].y, this.x, this.y);
                grad.addColorStop(0, 'rgba(255,255,255,0)');
                grad.addColorStop(1, `rgba(255,255,255,${this.baseOpacity})`);
                ctx.strokeStyle = grad;
                ctx.lineWidth = this.size;
                ctx.lineCap = 'round';
                ctx.stroke();

                // Head glow
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${this.baseOpacity})`;
                ctx.fill();
            } else {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Subtle glow for larger stars
                if (this.size > 1.2) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.25})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }
    }

    // Create 150 stars and 2 comets
    for (let i = 0; i < 150; i++) particles.push(new Particle(false));
    for (let i = 0; i < 2; i++) particles.push(new Particle(true));

    function anim() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update(mx, my);
            p.draw();
        });
        requestAnimationFrame(anim);
    }
    anim();
}

/* ===== NAVBAR ===== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(3, 3, 5, 0.85)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(3, 3, 5, 0.6)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    });

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
}

/* ===== PROJECTS RENDER ===== */
function renderProjects() {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;
    grid.innerHTML = '';

    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.cat = p.category;
        card.dataset.id = p.id;
        card.setAttribute('data-animate', '');

        // Setup image fallback
        const thumbPath = `Assets/${p.id}/thumb.svg`;
        const fallbackSvg = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDcwNzA3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM1NTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij5Bc3NldCBNaXNzaW5nPC90ZXh0Pjwvc3ZnPg==`;

        card.innerHTML = `
            <div class="card-thumb">
                <img src="${thumbPath}" alt="${p.title}" onerror="this.src='${fallbackSvg}'">
            </div>
            <div class="card-body">
                <span class="card-client">${p.client}</span>
                <h3 class="card-title">${p.title}</h3>
                <p class="card-type">${p.type}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* ===== FILTERS ===== */
function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return;

            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const f = btn.dataset.filter;
            const grid = document.getElementById('projectGrid');

            // Smooth fade out
            grid.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            grid.style.opacity = '0';
            grid.style.transform = 'translateY(15px)';

            setTimeout(() => {
                // Filter items while invisible
                document.querySelectorAll('.project-card').forEach(card => {
                    const match = f === 'all' || card.dataset.cat === f;
                    card.style.display = match ? 'block' : 'none';
                });

                // Fade back in
                requestAnimationFrame(() => {
                    grid.style.opacity = '1';
                    grid.style.transform = 'translateY(0)';
                });

                // Retrigger intersection observer for newly visible cards
                initScrollAnims();
            }, 400);
        });
    });
}

/* ===== PROJECT DETAIL ===== */
let currentDetailObj = null;
function initProjectDetail() {
    const detail = document.getElementById('projectDetail');
    const close = document.getElementById('detailClose');

    document.addEventListener('click', e => {
        const card = e.target.closest('.project-card');
        if (card) {
            const id = card.dataset.id;
            const p = projects.find(x => x.id === id);
            if (p) openDetail(p);
        }
    });

    close.addEventListener('click', () => {
        detail.classList.remove('active');
        document.body.style.overflow = '';
        currentDetailObj = null;
    });

    function openDetail(p) {
        currentDetailObj = p;

        const thumbPath = `Assets/${p.id}/thumb.svg`;
        const hero = document.getElementById('detailHero');
        hero.style.background = `url('${thumbPath}') center/cover no-repeat`;

        document.getElementById('detailMeta').innerHTML = `
            <div><span class="m-lab">Client</span><span class="m-val">${p.client}</span></div>
            <div><span class="m-lab">Role</span><span class="m-val">${p.role}</span></div>
            <div><span class="m-lab">Year</span><span class="m-val">${p.year}</span></div>
        `;
        document.getElementById('detailDesc').innerHTML = `<strong>${p.title}</strong><br><br>${p.desc}`;

        const gal = document.getElementById('detailGallery');
        gal.innerHTML = '';

        const fallbackSvg = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDcwNzA3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM1NTUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0Ij5Bc3NldCBNaXNzaW5nPC90ZXh0Pjwvc3ZnPg==`;

        p.gallery.forEach((g, i) => {
            const path = `Assets/${p.id}/gallery-${i + 1}.svg`;
            gal.innerHTML += `
                <div class="gallery-item">
                    <img src="${path}" alt="Gallery ${i + 1}" onerror="this.src='${fallbackSvg}'">
                </div>
            `;
        });

        detail.scrollTo(0, 0);
        detail.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/* ===== LIGHTBOX ===== */
function initLightbox() {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const close = document.getElementById('lightboxClose');
    const prev = document.getElementById('lbPrev');
    const next = document.getElementById('lbNext');
    let currentIndex = 0;

    document.addEventListener('click', e => {
        const gi = e.target.closest('.gallery-item');
        if (gi) {
            const items = Array.from(document.querySelectorAll('.gallery-item img'));
            currentIndex = items.indexOf(gi.querySelector('img'));
            img.src = items[currentIndex].src;
            lb.classList.add('active');
        }
    });

    close.addEventListener('click', () => {
        lb.classList.remove('active');
    });

    prev.addEventListener('click', () => {
        const items = Array.from(document.querySelectorAll('.gallery-item img'));
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        img.src = items[currentIndex].src;
    });

    next.addEventListener('click', () => {
        const items = Array.from(document.querySelectorAll('.gallery-item img'));
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
                const delay = e.target.dataset.delay || 0;
                setTimeout(() => {
                    e.target.classList.add('visible');
                }, delay * 200);
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
                const offset = 100;
                const top = t.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}
