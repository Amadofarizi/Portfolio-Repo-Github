/* ============================================================
   MFNH PORTFOLIO — CANONICAL PROJECTS DATA
   Updated: 2026-10 — Added BBTH, Music Videos, updated RTSR vertical reels, refreshed project suite
   ============================================================ */

const MFNH_PROJECTS = {

    /* ─── KICKFEST: special routing → /kickfest/ sub-landing ─── */
    'kickfest': {
        id: 'kickfest',
        title: 'Kickfest Festival',
        subtitle: '360° Festival Identity — Bandung, December 2026',
        client: 'Kickfest',
        role: '360° Visual Identity & Art Direction',
        category: 'graphic-illustration',
        categoryLabel: 'Graphic & Illustration',
        type: 'Event Production & Brand System',
        year: '2026',
        location: 'Bandung',
        deliverables: 'Main Stage Scenography, Gate Installation, Wayfinding Monoliths, Lanyards, Instagram 9-Grid, OOH Billboard Suite',
        thumb: 'Assets/Kickfest Festival/thumb.svg',
        specialRoute: 'kickfest.html',   /* triggers sub-landing page navigation */
        desc: 'Kickfest is one of Indonesia\'s leading independent streetwear and youth culture festivals. For the upcoming Bandung edition (December 2026), the comprehensive creative direction bridges industrial production systems with street culture aesthetics — delivering an end-to-end visual ecosystem spanning environmental graphics, on-site wayfinding, and a high-frequency digital promotion campaign.',
        subCategories: [
            {
                id: 'kickfest-produksi',
                label: 'Event Production',
                subtitle: 'Event Production, Stage & Environmental Design',
                desc: 'Comprehensive spatial design and on-site production management—from 3D motion animations to large-scale stage design, entrance gates, and immersive field collateral.',
                thumb: 'Assets/Kickfest Festival/01_EVENT_PRODUCTION/mockup produksi_Artboard 1.svg',
                sections: [
                    {
                        title: 'Stage, Gate & Environmental Production',
                        desc: 'Stage backdrop, main entrance gateway, wayfinding monoliths, and access pass/lanyard credential systems.',
                        layout: '3col',
                        images: [
                            { src: 'Assets/Kickfest Festival/01_EVENT_PRODUCTION/mockup produksi_Artboard 1.svg', alt: 'Stage Artboard 1' },
                            { src: 'Assets/Kickfest Festival/01_EVENT_PRODUCTION/mockup produksi_Artboard 2.svg', alt: 'Stage Artboard 2' },
                            { src: 'Assets/Kickfest Festival/01_EVENT_PRODUCTION/mockup produksi_Artboard 3.svg', alt: 'Stage Artboard 3' },
                            { src: 'Assets/Kickfest Festival/01_EVENT_PRODUCTION/mockup produksi_Artboard 4.svg', alt: 'Stage Artboard 4' },
                            { src: 'Assets/Kickfest Festival/01_EVENT_PRODUCTION/mockup produksi_Artboard 5.svg', alt: 'Stage Artboard 5' },
                            { src: 'Assets/Kickfest Festival/01_EVENT_PRODUCTION/mockup produksi_Artboard 6.svg', alt: 'Stage Artboard 6' },
                            { src: 'Assets/Kickfest Festival/01_EVENT_PRODUCTION/mockup produksi_Artboard 7.svg', alt: 'Stage Artboard 7' },
                            { src: 'Assets/Kickfest Festival/01_EVENT_PRODUCTION/mockup produksi_Artboard 8.svg', alt: 'Stage Artboard 8' },
                            { src: 'Assets/Kickfest Festival/01_EVENT_PRODUCTION/mockup produksi_Artboard 9.svg', alt: 'Stage Artboard 9' }
                        ]
                    }
                ]
            },
            {
                id: 'kickfest-sosmed',
                label: 'Social Media Content',
                subtitle: 'Social Media, Digital Ads & OOH Promotion',
                desc: 'End-to-end digital campaign and social branding—dynamic Instagram feed grid architecture, interactive stories, and promotional collateral driving high festival engagement.',
                thumb: 'Assets/Kickfest Festival/02_PROMOTION_&_DIGITAL/Mockup Sosmed Kickfest-01.svg',
                sections: [
                    {
                        title: 'Social Media & Digital Promotion Suite',
                        desc: 'Instagram 9-tile feed architecture, OOH billboard, and digital campaign assets.',
                        layout: '2col',
                        images: [
                            { src: 'Assets/Kickfest Festival/02_PROMOTION_&_DIGITAL/Mockup Sosmed Kickfest-01.svg', alt: 'Sosmed Kickfest 01' },
                            { src: 'Assets/Kickfest Festival/02_PROMOTION_&_DIGITAL/Mockup Sosmed Kickfest-02.svg', alt: 'Sosmed Kickfest 02' }
                        ]
                    }
                ]
            }
        ]
    },

    /* ─── ART DIRECTION ─── */
    'suaraperempuan': {
        id: 'suaraperempuan',
        title: 'Suara Perempuan',
        subtitle: '360° Social Advocacy & Editorial Campaign System',
        client: 'DP3A',
        role: 'Content System & Art Direction',
        category: 'art-direction',
        categoryLabel: 'Art Direction',
        type: 'Social Campaign',
        year: '2024',
        deliverables: 'Campaign Key Visuals, Editorial Grid, Social Motion, Advocacy Posters',
        thumb: 'Assets/suaraperempuan/thumb.svg',
        desc: '"Suara Perempuan" is a 360° visual campaign designed to amplify women\'s voices and drive societal advocacy. Through high-contrast editorial typography, emotive monochrome photography, and structured modular grids, the campaign delivers an urgent and commanding visual identity across print publications and digital media channels.',
        sections: [
            {
                title: 'Campaign Visual Identity & Media Collaterals',
                desc: 'Editorial layouts, print advocacy posters, and multi-format social media assets.',
                layout: '2col',
                images: [
                    { src: 'Assets/suaraperempuan/gallery-1.svg', alt: 'Suara Perempuan Visual 01' },
                    { src: 'Assets/suaraperempuan/gallery-2.svg', alt: 'Suara Perempuan Visual 02' },
                    { src: 'Assets/suaraperempuan/gallery-3.svg', alt: 'Suara Perempuan Visual 03' },
                    { src: 'Assets/suaraperempuan/gallery-4.svg', alt: 'Suara Perempuan Visual 04' },
                    { src: 'Assets/suaraperempuan/gallery-5.svg', alt: 'Suara Perempuan Visual 05' }
                ]
            }
        ]
    },

    'eventcampaign': {
        id: 'eventcampaign',
        title: 'Verse II Launch',
        subtitle: 'Music Premiere, Film Identity & Stage Scenography',
        client: 'Impartairial',
        role: 'Event Visual Design & Direction',
        category: 'art-direction',
        categoryLabel: 'Art Direction',
        type: 'Event Promotion',
        year: '2025',
        deliverables: 'Launch Key Visual, Short Film "Resonansi" Identity, Premiere Posters, Event Collaterals',
        thumb: 'Assets/eventcampaign/thumb.svg',
        desc: 'A multi-platform 360° visual rollout for the launch of Impartairial Verse II and the companion short film "Resonansi". Integrating cinematic typography with brutalist stage signage, festival trailers, and merchandise collaterals into one cohesive visual narrative.',
        sections: [
            {
                title: 'Event Visual Rollout & Film Collaterals',
                desc: 'Cinematic key visuals, stage projections, and premiere collateral systems.',
                layout: '2col',
                images: [
                    { src: 'Assets/eventcampaign/gallery-1.svg', alt: 'Verse II Visual 01' },
                    { src: 'Assets/eventcampaign/gallery-2.svg', alt: 'Verse II Visual 02' },
                    { src: 'Assets/eventcampaign/gallery-3.svg', alt: 'Verse II Visual 03' },
                    { src: 'Assets/eventcampaign/gallery-4.svg', alt: 'Verse II Visual 04' },
                    { src: 'Assets/eventcampaign/gallery-5.svg', alt: 'Verse II Visual 05' }
                ]
            }
        ]
    },

    'rtsr': {
        id: 'rtsr',
        title: 'RTSR — End Year Sale',
        subtitle: 'High-Impact Retail Campaign & Kinetic Social Promotion',
        client: 'RTSR',
        role: 'Key Visual & Concept Development',
        category: 'art-direction',
        categoryLabel: 'Art Direction',
        type: 'Retail Campaign',
        year: '2024',
        deliverables: 'Retail Key Visual, Social Media Promo Suite, Story Templates, Campaign Reels',
        thumb: 'Assets/rtsr/thumb.svg',
        hasVideos: true,
        videoType: 'reels',
        desc: 'Developed under an intensive production timeline, the RTSR End Year Sale campaign combined rapid concept development with high-impact kinetic typography and assertive discount visual hierarchies tailored for rapid mobile feed consumption. Campaign also includes on-ground documentary reels capturing the energy of the live campaign rollout.',
        videos: [
            { src: 'Assets/rtsr/CAMPAIGN DAY 1  - PAKET FINAL.mp4', title: 'CAMPAIGN DAY 1 - PAKET FINAL', dir: 'Muhammad Fariz Nabil H' },
            { src: 'Assets/rtsr/CAMPAIGN DAY 1 - CONFETTI.mp4',      title: 'CAMPAIGN DAY 1 - CONFETTI',  dir: 'Muhammad Fariz Nabil H' },
            { src: 'Assets/rtsr/CAMPAIGN DAY 1 - LIVE.mp4',          title: 'CAMPAIGN DAY 1 - LIVE',       dir: 'Muhammad Fariz Nabil H' },
            { src: 'Assets/rtsr/CAMPAIGN DAY 1 - PACKING.mp4',       title: 'CAMPAIGN DAY 1 - PACKING',    dir: 'Muhammad Fariz Nabil H' },
            { src: 'Assets/rtsr/CAMPAIGN DAY 1 - PRE LIVE.mp4',      title: 'CAMPAIGN DAY 1 - PRE LIVE',   dir: 'Muhammad Fariz Nabil H' },
            { src: 'Assets/rtsr/CAMPAIGN DAY 2 - INTERVIEW.mp4',     title: 'CAMPAIGN DAY 2 - INTERVIEW',  dir: 'Muhammad Fariz Nabil H' },
            { src: 'Assets/rtsr/CAMPAIGN DAY 2 - THE DAY.mp4',       title: 'CAMPAIGN DAY 2 - THE DAY',    dir: 'Muhammad Fariz Nabil H' }
        ],
        sections: []
    },

    'albumcover': {
        id: 'albumcover',
        title: 'Single Cover Collection',
        subtitle: 'Curated Music Identities & Digital Packaging Suite',
        client: 'Various Independent Artists',
        role: 'Artwork & Identity Design',
        category: 'art-direction',
        categoryLabel: 'Art Direction',
        type: 'Music Identity',
        year: '2022',
        deliverables: 'Cover Artworks, Streaming Identity Systems, Vinyl Sleeves, Artist Merch Mockups',
        thumb: 'Assets/albumcover/thumb.svg',
        desc: 'Curated cover artworks and streaming identity systems designed for various musicians and indie labels across indie rock, post-punk, and electronic genres. Each release is treated as a distinctive graphic statement celebrating the intersection of sound and print craft.',
        sections: [
            {
                title: 'Music Artwork & Streaming Identities',
                desc: 'Digital cover artworks and companion promotional graphics.',
                layout: '2col',
                images: [
                    { src: 'Assets/albumcover/gallery-1.svg', alt: 'Single Cover Gallery 01' },
                    { src: 'Assets/albumcover/gallery-2.svg', alt: 'Single Cover Gallery 02' },
                    { src: 'Assets/albumcover/gallery-3.svg', alt: 'Single Cover Gallery 03' }
                ]
            }
        ]
    },

    /* ─── BRING BACK THE HYPE (BBTH) — Video Project ─── */
    'bbth': {
        id: 'bbth',
        title: 'Bring Back The Hype (BBTH)',
        subtitle: 'Hip-Hop Gigs Activation Campaign — 2023/2024',
        client: 'BBTH',
        role: 'Campaign Art Direction & Video Production',
        category: 'art-direction',
        categoryLabel: 'Art Direction',
        type: 'Campaign Event',
        year: '2023/2024',
        deliverables: 'Campaign Concept, Activation Videos, Event Reels, Visual Campaign Direction',
        thumb: 'Assets/bbth/BBTH 1.mp4',   /* video thumb — rendered as looping muted clip */
        hasVideos: true,
        videoType: 'campaign',
        isVideoProject: true,
        desc: 'Bring Back The Hype (BBTH) is a gigs activation event series held across lounges and clubs in Bandung, focused on celebrating hip-hop culture, underground music scenes, and community-driven live performances. Campaign direction included concept development, visual identity, and full on-ground video documentation.',
        videos: [
            { src: 'Assets/bbth/BBTH 1.mp4',                                        title: 'BBTH 1',                                     dir: 'Muhammad Fariz Nabil H', orientation: 'vertical' },
            { src: 'Assets/bbth/BBTH 2.mp4',                                        title: 'BBTH 2',                                     dir: 'Muhammad Fariz Nabil H', orientation: 'horizontal' },
            { src: 'Assets/bbth/Teaser 1 bbth.mp4',                                 title: 'Teaser 1 bbth',                              dir: 'Muhammad Fariz Nabil H', orientation: 'vertical' },
            { src: 'Assets/bbth/[Preface] History of Hip Hop - Version 1.mp4',      title: '[Preface] History of Hip Hop - Version 1',   dir: 'Muhammad Fariz Nabil H', orientation: 'horizontal' }
        ],
        sections: []   /* no static image sections — all video */
    },

    /* ─── MUSIC VIDEOS COLLECTION — Video Project ─── */
    'musicvideo': {
        id: 'musicvideo',
        title: 'Music Videos Collection',
        subtitle: 'Talent Campaign Strategy & Music Release Promotion',
        client: 'Various Artists',
        role: 'Directed by Muhammad Fariz Nabil H',
        category: 'art-direction',
        categoryLabel: 'Art Direction',
        type: 'Music Video',
        year: '2021–2025',
        deliverables: 'Music Video Direction, Visual Concept, Post-Production Art Direction',
        thumb: 'Assets/music video/CAUSA FORTIS - TOO DOPE TO DIE (OFFICIAL MUSIC VIDEO).mp4',
        hasVideos: true,
        videoType: 'music',
        isVideoProject: true,
        desc: 'A curated collection of directed music videos developed as part of a talent campaign strategy to promote music releases across independent artists and labels. Each video reflects a distinct visual concept executed in partnership with the artist\'s sonic identity.',
        videos: [
            { src: 'Assets/music video/AMADO - MOONLIGHT (OFFICIAL MUSIC VIDEO).mp4',           title: 'AMADO - MOONLIGHT (OFFICIAL MUSIC VIDEO)',                          dir: 'Muhammad Fariz Nabil H', orientation: 'horizontal' },
            { src: 'Assets/music video/CAUSA FORTIS - TOO DOPE TO DIE (OFFICIAL MUSIC VIDEO).mp4',              title: 'CAUSA FORTIS - TOO DOPE TO DIE (OFFICIAL MUSIC VIDEO)',             dir: 'Muhammad Fariz Nabil H', orientation: 'horizontal' },
            { src: 'Assets/music video/DIAGONAL CHORDS - SMILE (OFFICIAL MUSIC VIDEO).mp4',                     title: 'DIAGONAL CHORDS - SMILE (OFFICIAL MUSIC VIDEO)',                    dir: 'Muhammad Fariz Nabil H', orientation: 'horizontal' },
            { src: 'Assets/music video/FORCEPARKBOIS - LOTUS INDONESIAN REMIX (CAUSA FORTIS _ AWILIGAR BOYZ).mp4', title: 'FORCEPARKBOIS - LOTUS INDONESIAN REMIX (CAUSA FORTIS _ AWILIGAR BOYZ)', dir: 'Muhammad Fariz Nabil H', orientation: 'horizontal' },
            { src: 'Assets/music video/HAF x FLYZAD - NAIK LAGI (OFFICIAL MUSIC VIDEO).mp4',                    title: 'HAF x FLYZAD - NAIK LAGI (OFFICIAL MUSIC VIDEO)',                   dir: 'Muhammad Fariz Nabil H', orientation: 'horizontal' },
            { src: 'Assets/music video/Sang Joon.mp4',                                                          title: 'Sang Joon | Cukup Feat. @ardyminaj (Music Video)',                  dir: 'Muhammad Fariz Nabil H', orientation: 'horizontal' }
        ],
        sections: []
    },

    /* ─── GRAPHIC & ILLUSTRATION ─── */
    'bankbjb': {
        id: 'bankbjb',
        title: 'Bank BJB Campaign',
        subtitle: '360° Banking Promotional & Event Visual Campaign',
        client: 'Bank BJB',
        role: 'Visual Campaign Design',
        category: 'graphic-illustration',
        categoryLabel: 'Graphic & Illustration',
        type: 'Banking Campaign',
        year: '2026',
        deliverables: 'Event Promotions, Printed Collaterals, High-visibility Signage, Digital Ads',
        thumb: 'Assets/bankbjb/thumb.svg',
        desc: 'A comprehensive 360° visual campaign developed for Bank BJB focusing on event promotions, high-visibility printed collaterals, and integrated digital marketing assets. Combining bold modular grid layouts with contemporary corporate typography.',
        sections: [
            {
                title: '360° Banking Collaterals & Promotional Suite',
                desc: 'Print assets, event promotional backdrops, and integrated campaign marketing.',
                layout: '3col',
                images: [
                    { src: 'Assets/bankbjb/gallery-1.svg', alt: 'Bank BJB Visual 01' },
                    { src: 'Assets/bankbjb/gallery-2.svg', alt: 'Bank BJB Visual 02' },
                    { src: 'Assets/bankbjb/gallery-3.svg', alt: 'Bank BJB Visual 03' },
                    { src: 'Assets/bankbjb/gallery-4.svg', alt: 'Bank BJB Visual 04' },
                    { src: 'Assets/bankbjb/gallery-5.svg', alt: 'Bank BJB Visual 05' },
                    { src: 'Assets/bankbjb/gallery-6.svg', alt: 'Bank BJB Visual 06' }
                ]
            }
        ]
    },

    'biofarma': {
        id: 'biofarma',
        title: 'Update Imun',
        subtitle: 'Multi-platform Healthcare Campaign & Content System',
        client: 'Bio Farma',
        role: 'Key Visual & Campaign Assets',
        category: 'graphic-illustration',
        categoryLabel: 'Graphic & Illustration',
        type: 'Healthcare Campaign',
        year: '2025',
        deliverables: 'Social Media Feed Direction, Stories System, Web Banners, Informational Graphics',
        thumb: 'Assets/biofarma/thumb.svg',
        desc: 'Designed and executed multi-channel visual content for Bio Farma\'s "Update Imun" public healthcare initiative across social media channels, dynamic Stories layouts, and digital portals — ensuring clarity of information, strict brand compliance, and high public engagement.',
        sections: [
            {
                title: 'Healthcare Content & Digital Campaign Suite',
                desc: 'Cross-platform editorial infographics, social feed grids, and promotional assets.',
                layout: '2col',
                images: [
                    { src: 'Assets/biofarma/gallery-1.svg', alt: 'Bio Farma Visual 01' },
                    { src: 'Assets/biofarma/gallery-2.svg', alt: 'Bio Farma Visual 02' },
                    { src: 'Assets/biofarma/gallery-3.svg', alt: 'Bio Farma Visual 03' },
                    { src: 'Assets/biofarma/gallery-4.svg', alt: 'Bio Farma Visual 04' }
                ]
            }
        ]
    },

    /* ─── APPAREL DESIGN ─── */
    'fashion': {
        id: 'fashion',
        title: 'Apparel Design',
        subtitle: 'Streetwear Collections, Textile Graphics & Merged Merchandise Typography',
        client: 'Various Independent Labels',
        role: 'Visual Direction & Apparel Graphics',
        category: 'apparel-design',
        categoryLabel: 'Apparel Design',
        type: 'Apparel & Streetwear',
        year: '2025',
        deliverables: 'Garment Mockups, Textile Graphics, Placement Prints, Custom Lettering Systems, Lookbook Layouts',
        thumb: 'Assets/fashion/thumb.svg',
        desc: 'A comprehensive fashion design portfolio combining garment graphics, oversized back prints, technical apparel mockups, and custom merchandise typography into one unified apparel design showcase. Features streetwear collections alongside intricate custom lettering developed for heavy-cotton tees, hoodies, and woven labels.',
        sections: [
            {
                title: 'Streetwear Collections & Garment Mockups',
                desc: 'Technical apparel mockups, placement prints, and collection lookbook visuals.',
                layout: '2col',
                images: [
                    { src: 'Assets/fashion/gallery-1.svg', alt: 'Apparel Visual 01' },
                    { src: 'Assets/fashion/gallery-2.svg', alt: 'Apparel Visual 02' },
                    { src: 'Assets/fashion/gallery-3.svg', alt: 'Apparel Visual 03' },
                    { src: 'Assets/fashion/gallery-4.svg', alt: 'Apparel Visual 04' },
                    { src: 'Assets/fashion/gallery-5.svg', alt: 'Apparel Visual 05' },
                    { src: 'Assets/fashion/gallery-6.svg', alt: 'Apparel Visual 06' },
                    { src: 'Assets/fashion/gallery-7.svg', alt: 'Apparel Visual 07' },
                    { src: 'Assets/fashion/gallery-8.svg', alt: 'Apparel Visual 08' }
                ]
            },
            {
                title: 'Textile Graphics & Merchandise Typography',
                desc: 'Metal band aesthetics, tribal geometry, and custom lettering systems applied to merchandise.',
                layout: '2col',
                images: [
                    { src: 'Assets/fashion/gallery-9.svg',  alt: 'Merch Typography 01' },
                    { src: 'Assets/fashion/gallery-10.svg', alt: 'Merch Typography 02' },
                    { src: 'Assets/fashion/gallery-11.svg', alt: 'Merch Typography 03' },
                    { src: 'Assets/fashion/gallery-12.svg', alt: 'Merch Typography 04' }
                ]
            }
        ]
    }
};

/* ─── ORDERED LIST FOR GRIDS ─── */
const MFNH_PROJECTS_LIST = [
    /* Art Direction */
    MFNH_PROJECTS['suaraperempuan'],
    MFNH_PROJECTS['eventcampaign'],
    MFNH_PROJECTS['rtsr'],
    MFNH_PROJECTS['albumcover'],
    MFNH_PROJECTS['bbth'],
    MFNH_PROJECTS['musicvideo'],
    /* Graphic & Illustration */
    MFNH_PROJECTS['kickfest'],
    MFNH_PROJECTS['bankbjb'],
    MFNH_PROJECTS['biofarma'],
    /* Apparel Design */
    MFNH_PROJECTS['fashion']
];
