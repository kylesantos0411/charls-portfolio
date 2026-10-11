/**
 * ============================================================================
 * CHARLS ANDRADA — PORTFOLIO CONTENT DATA
 * ============================================================================
 * Accurate data populated directly from the client's official Intake Form.
 * Tone: Refined, clear, straightforward, and entrepreneurial.
 * ============================================================================
 */

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  myRole: string;
  outcomes: string[];
}

export interface BusinessItem {
  id: string;
  name: string;
  category: string;
  role: string;
  tagline: string;
  shortDescription: string;
  year: string;
  image: string;
  logo?: string;
  link?: string;
  featured: boolean;
  keyInitiative?: {
    title: string;
    role: string;
    description: string;
    tags: string[];
  };
  caseStudy?: CaseStudy;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Venture Building' | 'Academic' | 'Brand & Creative' | 'Strategy';
  role: string;
  year: string;
  shortDescription: string;
  technologiesOrMethods: string[];
  image: string;
  link?: string;
  featured: boolean;
  caseStudy?: CaseStudy;
}

export interface CertificateRecord {
  title: string;
  courseName: string;
  completionDate: string;
  image: string;
  verificationCode?: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  distinction?: string;
  description: string;
  type: 'Degree' | 'Honor' | 'Certification' | 'Program';
  logo?: string;
  certificateImage?: string;
  certificates?: CertificateRecord[];
}

export interface SocialLink {
  name: string;
  platform: 'linkedin' | 'x' | 'instagram' | 'email';
  url: string;
  handle: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  organization: string;
  badge?: string;
  badgeType?: 'spruce' | 'terracotta' | 'stone';
  description: string;
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioData {
  personal: {
    fullName: string;
    firstName: string;
    lastName: string;
    monogram: string;
    professionalTitle: string;
    academicDistinction: string;
    heroHeadline: string;
    heroSubheadline: string;
    portraitImage: string;
    aboutImage: string;
    resumePdfPath: string;
    location: string;
    email: string;
    availability: string;
  };

  philosophy: {
    statementPrefix: string;
    statementHighlight: string;
    statementSuffix: string;
    subheadline: string;
    principles: PhilosophyPrinciple[];
  };

  about: {
    headline: string;
    bioParagraphs: string[];
    degree: string;
    institution: string;
    graduationHonor: string;
    corePrinciples: { title: string; desc: string }[];
  };

  timeline: {
    headline: string;
    subheadline: string;
    milestones: TimelineMilestone[];
  };

  businesses: {
    headline: string;
    subheadline: string;
    items: BusinessItem[];
  };

  projects: {
    headline: string;
    subheadline: string;
    items: ProjectItem[];
  };

  credentials: {
    headline: string;
    subheadline: string;
    items: CredentialItem[];
  };

  contact: {
    headline: string;
    subheadline: string;
    email: string;
    socials: SocialLink[];
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Charls Marion A. Andrada",
    firstName: "Charls",
    lastName: "Andrada",
    monogram: "CA",
    professionalTitle: "Entrepreneur | Business Development & Digital Marketing Specialist",
    academicDistinction: "Magna Cum Laude • BS Entrepreneurship",
    heroHeadline: "Building Ideas Into Brands. Turning Strategy Into Growth.",
    heroSubheadline: "Entrepreneur and business development specialist with hands-on experience in brand building, digital marketing, e-commerce, and day-to-day operations. Magna Cum Laude graduate of Marikina Polytechnic College.",
    portraitImage: "/charls_portrait.jpg",
    aboutImage: "/charls_portrait.jpg",
    resumePdfPath: "/resume.pdf",
    location: "Marikina City, Philippines",
    email: "andradachrlsmrn@gmail.com",
    availability: "Open to career opportunities, ventures & strategic partnerships",
  },

  philosophy: {
    statementPrefix: "I turn ideas into businesses",
    statementHighlight: "built to last",
    statementSuffix: ".",
    subheadline: "A disciplined, ground-up approach to venture building — combining thorough market validation, lean operational execution, and consistent brand value.",
    principles: [
      {
        number: "01",
        title: "Strategy With Execution",
        description: "Develop ideas through grounded research and market planning, then turn them into actionable, step-by-step business strategies."
      },
      {
        number: "02",
        title: "Customer & Market Awareness",
        description: "Deeply understand customer needs, buying behavior, and demand trends before allocating resources or making commercial decisions."
      },
      {
        number: "03",
        title: "Hands-On Leadership",
        description: "Take an active role in daily operations, supplier coordination, and team problem-solving to maintain consistent quality."
      },
      {
        number: "04",
        title: "Sustainable Venture Growth",
        description: "Focus on clear unit economics, healthy gross margins, and dependable customer relationships that compound over time."
      }
    ]
  },

  about: {
    headline: "Turning ideas into workable, revenue-generating opportunities.",
    bioParagraphs: [
      "I am an entrepreneur and business development specialist with a background in Entrepreneurship and hands-on experience in brand management, digital marketing, e-commerce, and business operations. As a Magna Cum Laude graduate of Marikina Polytechnic College, I combine academic rigor with practical experience in launching and managing commercial ventures.",
      "My entrepreneurial journey includes building LOSTDAWG, a streetwear retail brand; AIGHT CAFE, a modern coffee and matcha beverage business; and JUNKYARD PH, a matcha-focused beverage venture. My responsibilities span concept development, market research, product innovation, website management, content creation, and business planning.",
      "Alongside my own ventures, I developed strong operational discipline as an Assistant Supervisor at Zugusho Aircon & Refrigeration Services, managing service scheduling, field team coordination, customer inquiries, and job quality standards."
    ],
    degree: "Bachelor of Science in Entrepreneurship",
    institution: "Marikina Polytechnic College",
    graduationHonor: "Magna Cum Laude (Class of 2026)",
    corePrinciples: [
      {
        title: "Strategy With Execution",
        desc: "Research the market thoroughly, plan systematically, and execute with measurable commercial targets."
      },
      {
        title: "Customer & Market Awareness",
        desc: "Study real customer habits and demand signals first rather than building on speculative assumptions."
      },
      {
        title: "Hands-On Leadership",
        desc: "Direct involvement in daily operations, product quality checks, and team problem-solving."
      }
    ]
  },

  timeline: {
    headline: "Entrepreneurial Trajectory",
    subheadline: "A chronological record of academic excellence, commercial ventures launched, and operational leadership.",
    milestones: [
      {
        id: "mile-2022",
        year: "2022 — 2024",
        title: "Academic Excellence & Field Leadership",
        organization: "Marikina Polytechnic College & Zugusho Aircon Services",
        badge: "Operations & Leadership",
        badgeType: "stone",
        description: "Maintained top academic standing in BS Entrepreneurship. Simultaneously served as Assistant Supervisor at Zugusho Aircon & Refrigeration Services, coordinating on-site field technicians, job dispatch, and customer service delivery."
      },
      {
        id: "mile-2024",
        year: "2024",
        title: "Founded LOSTDAWG E-Commerce Storefront",
        organization: "Streetwear Retail & Dropshipping Enterprise",
        badge: "Venture Launch",
        badgeType: "spruce",
        description: "Established LOSTDAWG inspired by US and European streetwear trends. Engineered the e-commerce storefront (launched October 2024), coordinated international dropshipping supply chains, and led digital marketing campaigns."
      },
      {
        id: "mile-2025",
        year: "2025",
        title: "Co-Founded AIGHT CAFE & JUNKYARD PH",
        organization: "Food & Beverage Innovation • Coffee & Matcha",
        badge: "F&B Expansion",
        badgeType: "spruce",
        description: "Expanded into beverage entrepreneurship: co-founded AIGHT CAFE (innovative coffee & matcha drinks in sealed pop cans) and JUNKYARD PH (specialty matcha culture, pop-up events, and social media brand development)."
      },
      {
        id: "mile-2026",
        year: "2026",
        title: "Graduated Magna Cum Laude & TESDA Certification",
        organization: "Marikina Polytechnic College",
        badge: "Magna Cum Laude",
        badgeType: "terracotta",
        description: "Graduated with highest Latin distinction (Magna Cum Laude) in BS Entrepreneurship. Completed TESDA iSTAR Online certification and actively scaling commercial ventures."
      }
    ]
  },

  businesses: {
    headline: "Founded Businesses",
    subheadline: "Commercial enterprises built from the ground up across fashion retail, e-commerce, and beverage concepts.",
    items: [
      {
        id: "venture-lostdawg",
        name: "LOSTDAWG",
        category: "Streetwear & E-Commerce",
        role: "Founder & Website Manager",
        tagline: "Streetwear for Those Who Move Differently.",
        shortDescription: "Founded in 2024, LOSTDAWG is a streetwear retail brand inspired by US and European fashion trends using a dropshipping model. Built and managed the website, oversaw online operations, and developed digital marketing strategies. Within the first five months, achieved sales targets while building the brand's online presence and customer base.",
        year: "2024 — Present",
        image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1200&auto=format&fit=crop",
        logo: "/logos/lostdawg.jpg",
        link: "https://instagram.com/lost_dawgz",
        featured: true,
        keyInitiative: {
          title: "Storefront Architecture & Dropshipping Pipeline",
          role: "E-Commerce Developer & Operations Lead",
          description: "End-to-end design and technical deployment of an online retail dropshipping storefront with seamless checkout, product drops, and catalog management.",
          tags: ["E-Commerce Storefront", "Dropshipping Logistics", "Digital Marketing", "Catalog Management"]
        },
        caseStudy: {
          overview: "LOSTDAWG provides direct access to modern, high-appeal streetwear apparel and accessories inspired by global street fashion cultures through a dropshipping model.",
          problem: "Fashion enthusiasts in the local market often faced limited access or prohibitive markups on curated international streetwear styles.",
          solution: "Built and launched an official e-commerce storefront, curated global supply channels, and drove digital marketing strategies that met sales targets within the first 5 months.",
          myRole: "Founder & Website Manager: Storefront web development and management, product sourcing coordination, online operations, and digital marketing strategies.",
          outcomes: [
            "Built and launched the brand's official online retail storefront (October 2024)",
            "Achieved targeted sales goals within the first five months of operation",
            "Developed an active online brand identity and sustained customer acquisition"
          ]
        }
      },
      {
        id: "venture-aightcafe",
        name: "AIGHT CAFE",
        category: "Beverage & Pop-Can Coffee",
        role: "Co-Founder & Brand Manager",
        tagline: "Modern Coffee and Matcha, Made to Go.",
        shortDescription: "Founded in 2025, AIGHT CAFE is a beverage brand specializing in coffee and matcha drinks served in sealed pop cans. Helped grow the business through brand development, digital marketing, social media content creation, and product innovation, while managing online presence and exploring opportunities for business expansion.",
        year: "2025 — Present",
        image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1200&auto=format&fit=crop",
        logo: "/logos/aightcafe.jpg",
        link: "#",
        featured: true,
        keyInitiative: {
          title: "Can Packaging Concept & Recipe Formulation",
          role: "Brand & Product Strategist",
          description: "Formulated the visual identity, sealed pop can packaging concept, and signature beverage recipes for a grab-and-go coffee and matcha venture.",
          tags: ["Beverage Formulation", "Can Packaging Design", "Brand Identity", "Visual Content Creation"]
        },
        caseStudy: {
          overview: "AIGHT CAFE reinvents the on-the-go cafe experience with portable, high-quality handcrafted coffee and matcha drinks served in modern sealed pop cans.",
          problem: "Standard takeaway cups easily spill, lose temperature, and lack distinct branding in a crowded local cafe market.",
          solution: "Introduced sleek sealed aluminum pop cans that guarantee freshness, portability, and instant visual distinction on social media.",
          myRole: "Co-Founder & Brand Manager: Brand development, digital marketing, social media content creation, product innovation, and business expansion initiatives.",
          outcomes: [
            "Developed the brand's visual identity, logo, and modern packaging presentation",
            "Formulated signature coffee and matcha beverage offerings in sealed pop cans",
            "Explored pop-up and event-based selling opportunities for business expansion"
          ]
        }
      },
      {
        id: "venture-junkyardph",
        name: "JUNKYARD PH",
        category: "Matcha Culture & Events",
        role: "Co-Founder & Marketing Lead",
        tagline: "Matcha Culture Meets Creative Entrepreneurship.",
        shortDescription: "Founded in 2025, co-founded JUNKYARD PH, contributing to the development of its physical store and pop-up operations. Managed concept development, strategic planning, market research, and matcha product development. Led digital marketing, content creation, and brand development to strengthen brand awareness, attract customers, and support business growth.",
        year: "2025 — Present",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200&auto=format&fit=crop",
        logo: "/logos/junkyard.jpg",
        link: "https://instagram.com/junkyardph",
        featured: true,
        keyInitiative: {
          title: "Mobile Pop-Up Booth Operations & Community Bar",
          role: "Business Developer & Operations Lead",
          description: "Planned and executed mobile pop-up booth setups, live event operations, recipe validation, and customer acquisition for a specialty matcha concept.",
          tags: ["Event Operations", "Customer Research", "Mobile Bar Setup", "Social Media Strategy"]
        },
        caseStudy: {
          overview: "JUNKYARD PH is a dedicated matcha beverage brand ('the matcha bar') blending authentic matcha flavors with creative culture, physical store development, and community pop-ups.",
          problem: "Traditional tea spaces can feel intimidating or dated, while mainstream cafes often lack authentic ceremonial matcha quality and vibrant community culture.",
          solution: "Built a distinct brand culture paired with high-quality matcha recipes, vibrant merchandise aesthetic, and agile mobile pop-up booth operations.",
          myRole: "Co-Founder & Marketing Lead: Physical store & pop-up operations development, concept development, strategic planning, market research, matcha product development, digital marketing, content creation, and brand building.",
          outcomes: [
            "Co-founded and established the brand's visual identity, logo, and community presence (@junkyardph)",
            "Developed physical store concepts and high-impact pop-up operations",
            "Formulated signature ceremonial matcha recipes and executed customer acquisition campaigns"
          ]
        }
      }
    ]
  },

  projects: {
    headline: "Selected Projects & Initiatives",
    subheadline: "Real business implementations, digital storefront architectures, and commercial feasibility initiatives.",
    items: [
      {
        id: "proj-lostdawg-dev",
        title: "LOSTDAWG E-Commerce Storefront Development",
        category: "Venture Building",
        role: "E-Commerce Developer & Operations Lead",
        year: "2024",
        shortDescription: "End-to-end design and technical deployment of an online retail dropshipping storefront with seamless checkout and catalog management.",
        technologiesOrMethods: ["E-Commerce Storefront", "Dropshipping Logistics", "Digital Marketing", "Catalog Management"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        link: "#",
        featured: true,
        caseStudy: {
          overview: "Constructed the digital shopping infrastructure for LOSTDAWG to handle orders, showcase apparel drops, and convert social traffic.",
          problem: "Launching an independent streetwear retail brand requires a reliable, mobile-optimized storefront that builds buyer trust immediately.",
          solution: "Built a responsive storefront featuring high-resolution product galleries, direct cart checkout, and integrated customer communication channels.",
          myRole: "Website design, product photography curation, checkout integration, and supplier order routing.",
          outcomes: [
            "Successfully launched online storefront in October 2024",
            "Maintained consistent customer conversion across digital ad traffic",
            "Established automated order notifications and dropshipping fulfilment pipeline"
          ]
        }
      },
      {
        id: "proj-aightcafe-brand",
        title: "AIGHT CAFE Brand & Product Innovation",
        category: "Brand & Creative",
        role: "Brand & Product Strategist",
        year: "2025",
        shortDescription: "Formulated the visual identity, can packaging concept, and product recipes for a modern canned coffee and matcha venture.",
        technologiesOrMethods: ["Beverage Formulation", "Can Packaging Design", "Brand Identity", "Visual Content Creation"],
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
        link: "#",
        featured: true,
        caseStudy: {
          overview: "Conceptualized and executed the brand development for AIGHT CAFE's sealed can beverage line.",
          problem: "Standing out in a saturated beverage market requires unique packaging, distinct taste profiles, and bold visual storytelling.",
          solution: "Designed cohesive can labels, formulated signature espresso and matcha blends, and produced social video content to drive pre-launch buzz.",
          myRole: "Lead brand designer, product recipe tester, and content director.",
          outcomes: [
            "Created complete visual brand guidelines and packaging prototypes",
            "Standardized drink measurement ratios for consistent taste and shelf life",
            "Positioned brand for ready-to-drink retail placement"
          ]
        }
      },
      {
        id: "proj-junkyard-popup",
        title: "JUNKYARD PH Business & Pop-Up Development",
        category: "Strategy",
        role: "Business Developer & Operations Lead",
        year: "2025",
        shortDescription: "Planned and executed mobile pop-up booth setups, live event operations, and customer acquisition for a specialty matcha concept.",
        technologiesOrMethods: ["Event Operations", "Customer Research", "Mobile Bar Setup", "Social Media Strategy"],
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200&auto=format&fit=crop",
        link: "#",
        featured: true,
        caseStudy: {
          overview: "Directed the on-the-ground operational model and customer acquisition experiments for JUNKYARD PH matcha pop-ups.",
          problem: "Validating beverage demand before signing fixed-lease storefront contracts requires agile, low-cost physical testing.",
          solution: "Organized pop-up setups at strategic gatherings to test customer flavor preferences, pricing points, and speed-of-service bar layout.",
          myRole: "Operations planning, equipment procurement, social media promotion (@junkyardph), and customer interview collection.",
          outcomes: [
            "Conducted direct customer preference testing across multiple drink iterations",
            "Optimized beverage preparation speed to under 90 seconds per serving",
            "Generated repeat word-of-mouth following within the target demographic"
          ]
        }
      }
    ]
  },

  credentials: {
    headline: "Education & Distinctions",
    subheadline: "Academic degrees, Latin honors, leadership roles, and professional business certifications.",
    items: [
      {
        id: "cred-01",
        title: "Bachelor of Science in Entrepreneurship",
        institution: "Marikina Polytechnic College",
        year: "Class of 2026",
        distinction: "Graduated Magna Cum Laude",
        description: "Four-year specialized degree program covering venture finance, market research, enterprise development, supply chain logistics, and business law.",
        type: "Degree"
      },
      {
        id: "cred-02",
        title: "Magna Cum Laude Latin Honor",
        institution: "Marikina Polytechnic College",
        year: "2026",
        distinction: "High Academic Distinction",
        description: "Conferred for outstanding academic excellence, maintaining top grade standing across all academic years while actively building commercial enterprises.",
        type: "Honor"
      },
      {
        id: "cred-03",
        title: "TESDA Online Program Certifications (iSTAR)",
        institution: "Technical Education and Skills Development Authority (TESDA)",
        year: "December 14, 2023",
        distinction: "6 Verified Certifications",
        description: "Official Certificates of Completion awarded by the National Institute for Technical Education and Skills Development (NITESD) across enterprise planning, operational management, business sustainability, digital commerce, and retail safety.",
        type: "Certification",
        certificates: [
          {
            title: "Safe Stores Education",
            courseName: "Safe Stores Education",
            completionDate: "December 14, 2023",
            image: "/certificates/safe-stores-education.png",
            verificationCode: "PdikUYLh3e"
          },
          {
            title: "Building Business Mindset",
            courseName: "Building Business Mindset",
            completionDate: "December 14, 2023",
            image: "/certificates/building-business-mindset.png",
            verificationCode: "4D14HcahfR"
          },
          {
            title: "Planning the Business",
            courseName: "Planning the Business",
            completionDate: "December 14, 2023",
            image: "/certificates/planning-the-business.png",
            verificationCode: "zcAOp6VQiW"
          },
          {
            title: "Managing Business Operations",
            courseName: "Managing Business Operations",
            completionDate: "December 14, 2023",
            image: "/certificates/managing-business-operations.png",
            verificationCode: "8AhbacPNkB"
          },
          {
            title: "Ensuring Business Sustainability & Success",
            courseName: "Ensuring Business Sustainability and Success",
            completionDate: "December 14, 2023",
            image: "/certificates/ensuring-business-sustainability.png",
            verificationCode: "273IRmqfbr"
          },
          {
            title: "E-Commerce",
            courseName: "E-Commerce",
            completionDate: "December 14, 2023",
            image: "/certificates/e-commerce.png",
            verificationCode: "EBbtr2DRY1"
          }
        ]
      },
      {
        id: "cred-04",
        title: "Assistant Supervisor (Field Operations)",
        institution: "Zugusho Aircon & Refrigeration Services",
        year: "Tenure: 1 Year & 2 Months",
        distinction: "Operational Leadership",
        description: "Supported daily field operations by coordinating manpower, scheduling on-site service visits, and supervising team performance. Monitored work quality and safety compliance, prepared operational reports, and helped ensure efficient service delivery and smooth project execution.",
        type: "Program",
        logo: "/logos/zugusho.png"
      }
    ]
  },

  contact: {
    headline: "Let's discuss opportunities and ventures.",
    subheadline: "Whether you have an entrepreneurial project to build, want to explore a strategic partnership, or discuss business development, I welcome your message.",
    email: "andradachrlsmrn@gmail.com",
    socials: [
      {
        name: "LinkedIn",
        platform: "linkedin",
        url: "https://www.linkedin.com/in/charls-marion-a-andrada-2ba6b3428/",
        handle: "charls-marion-a-andrada"
      },
      {
        name: "Instagram",
        platform: "instagram",
        url: "https://www.instagram.com/chrlssard/",
        handle: "@chrlssard"
      },
      {
        name: "Official Email",
        platform: "email",
        url: "mailto:andradachrlsmrn@gmail.com",
        handle: "andradachrlsmrn@gmail.com"
      }
    ]
  }
};
