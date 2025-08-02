import bankingImg from "./assets/Service/banking.jpg";
import fintechImg from "./assets/Service/fintech.jpg";
import healthcareImg from "./assets/Service/healthcare.jpg";
import automobileImg from "./assets/Service/automobile.jpg";
import itServiceImg from "./assets/Service/IT service.jpg";
import startupImg from "./assets/Service/startup.jpg";


export const heroData = {
  home: {
    tag: "Cyber Security",
    titleLine1: "Secure Your Data",
    titleLine2: "World with AI Defense",
    description: "At Relish Tech Global, we specialize in providing top-tier cybersecurity, risk management, and compliance solutions to help businesses safeguard their digital infrastructure",
    primaryCta: "Our Services",
    secondaryCta: "Learn More"
  },
  about: {
    tag: "About Us",
    titleLine1: "Empowering Cybersecurity",
    titleLine2: "Through Innovation",
    description: "We combine automation, intelligence, and speed to deliver seamless cybersecurity. Here's how our system protects you, step-by-step.",
    primaryCta: "Our Story",
    secondaryCta: "Meet the Team"
  },
  whyChooseUs: {
    tag: "Why Choose Us",
    titleLine1: "Your Trusted Partner in",
    titleLine2: "Cybersecurity Excellence",
    description: "We deliver unmatched cybersecurity solutions with proven expertise, comprehensive protection, and dedicated support to safeguard your digital future.",
    primaryCta: "Get Started",
    secondaryCta: "View Services"
  },
  ourWork: {
    tag: "Our Portfolio",
    titleLine1: "Showcasing Our",
    titleLine2: "Cybersecurity Excellence",
    description: "Explore our comprehensive portfolio of successful cybersecurity implementations, compliance achievements, and digital transformation projects that have secured businesses across industries.",
    primaryCta: "View Case Studies",
    secondaryCta: "Download Portfolio"
  }
  
};

export const homeData = {
  about: {
    tag: "About Us",
    titleLine1: "We Simplify Cybersecurity",
    shortDesc: "A trusted partner for cybersecurity, IT audits, and regulatory compliance — empowering SMEs and regulated industries to thrive securely in a digital-first world.",
  }

}

export const aboutData = {
  tag: "Our Mission",
  title: "Protecting Your Digital World",
  description: "We are dedicated to providing comprehensive cybersecurity solutions that protect businesses and individuals from evolving digital threats.",
  features: [
    {
      title: "Advanced Threat Detection",
      description: "Our AI-powered systems continuously monitor and detect potential security threats before they can cause damage to your infrastructure."
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock surveillance ensures your systems are protected at all times with immediate response to any security incidents."
    },
    {
      title: "Expert Security Team",
      description: "Our certified cybersecurity professionals bring years of experience in protecting organizations from sophisticated cyber attacks."
    }
  ],
  image: '/src/assets/protect.jpg'
  
};

export const statsData = [
  {
    value: '100',
    unit: '+',
    label: 'Engagements Delivered',
    description: 'Successfully completed projects across various industries'
  },
  {
    value: '20',
    unit: '+',
    label: 'Skilled Professionals',
    description: 'Expert team with specialized certifications'
  },
  {
    value: '3',
    unit: '+',
    label: 'Years of Domain Experience',
    description: 'Established track record in cybersecurity'
  },
  {
    value: '30',
    unit: '+',
    label: 'BFSI Clients Supported',
    description: 'Specialized experience in financial sector'
  },
  {
    value: '40',
    unit: '%',
    label: 'Avg. Audit Time Reduction',
    description: 'Improving efficiency for our clients'
  }
];

export const servicesData = [
  {
    icon: 'ShieldIcon',
    title: 'Governance, Risk & Compliance (GRC)',
    description: 'Navigate internal controls, security policies, business continuity, and compliance with ISO 27001, NCA, and PDPL.',
    gradient: 'bg-gradient-to-br from-orange-400 via-pink-400 to-purple-600',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    fallbackImage: 'https://placehold.co/500x300/0E2A5B/ffffff?text=GRC+Services'
  },
  {
    icon: 'DocumentIcon',
    title: 'Compliance & Audit Services',
    description: 'Ensure regulatory adherence with our compliance, internal, fraud detection, and data privacy audits.',
    gradient: 'bg-gradient-to-br from-pink-300 via-orange-300 to-red-400',
    image: "/compliance.jpg",
    fallbackImage: 'https://placehold.co/500x300/0E2A5B/ffffff?text=Compliance+Services'
  },
  {
    icon: 'CybersecurityIcon',
    title: 'Cybersecurity & IT Risk Management',
    description: 'Protect your digital assets with ITGC, cybersecurity, cloud, application, and industrial control system security, plus VAPT.',
    gradient: 'bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    fallbackImage: 'https://placehold.co/500x300/0E2A5B/ffffff?text=Cybersecurity+Services'
  }
];

export const featuresData = [
  {
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Proven Expertise",
    description: "3+ years of excellence with 100+ successful projects."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Comprehensive Protection",
    description: "Protecting digital assets and ensuring compliance."
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    title: "Dedicated Professionals",
    description: "Team of 20+ cybersecurity experts."
  }
];

export const whyChooseUsData = {
  reasons: [
    {
      icon: "🎯",
      title: "Focused on SMEs",
      description: "Tailored solutions for growing enterprises with budget-sensitive, scalable models.",
      iconColor: "text-blue-600"
    },
    {
      icon: "📋",
      title: "Audit-Ready DNA",
      description: "Hands-on guidance for RBI, SEBI, IRDAI, DPDP, and global frameworks.",
      iconColor: "text-purple-600"
    },
    {
      icon: "🔌",
      title: "Plug-and-Play Tech",
      description: "Ready-to-deploy SOC & RegTech solutions — zero friction.",
      iconColor: "text-blue-600"
    },
    {
      icon: "📊",
      title: "Proven Results",
      description: "Client success stories and measurable improvements in audit readiness & resilience.",
      iconColor: "text-purple-600"
    }
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp",
      company: "TechCorp Solutions",
      quote: "SentraSec transformed our security posture completely. Their proactive approach saved us from multiple potential breaches.",
      rating: 5
    },
    {
      name: "Ahmed Al-Rashid",
      position: "Security Director",
      company: "Financial Services Ltd",
      quote: "The compliance audit support was exceptional. They helped us achieve ISO 27001 certification seamlessly.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      position: "IT Manager",
      company: "Healthcare Plus",
      quote: "24/7 monitoring gives us peace of mind. The team is incredibly responsive and knowledgeable.",
      rating: 5
    }
  ]
};

export const industries = [
  {
      title: "Banking, NBFCs & Financial Institutions",
      description: "Specialized solutions for the highly regulated financial sector",
      image: bankingImg,
      gradient: "from-blue-500 to-blue-700",
      borderColor: "border-blue-200"
  },
  {
      title: "FinTech & Stock Broking",
      description: "Security for innovative financial technology companies",
      image: fintechImg,
      gradient: "from-green-500 to-green-700",
      borderColor: "border-green-200"
  },
  {
      title: "Healthcare & Insurance",
      description: "Protecting sensitive patient and policyholder data",
      image: healthcareImg,
      gradient: "from-red-500 to-red-700",
      borderColor: "border-red-200"
  },
  {
      title: "Automobile",
      description: "Securing manufacturing and dealership operations",
      image: automobileImg,
      gradient: "from-purple-500 to-purple-700",
      borderColor: "border-purple-200"
  },
  {
      title: "Software Development & IT Services",
      description: "Ensuring secure development and service delivery",
      image: itServiceImg,
      gradient: "from-indigo-500 to-indigo-700",
      borderColor: "border-indigo-200"
  },
  {
      title: "Startups & Private Enterprises",
      description: "Building security foundations for growing businesses",
      image: startupImg,
      gradient: "from-orange-500 to-orange-700",
      borderColor: "border-orange-200"
  }
];


export const services = [
  {
      id: 1,
      title: "IT Governance, Risk & Compliance (GRC)",
      icon: "🛡️",
      description: "We offer a full spectrum of services across 7 key domains:",
      details: [
          "Implementation and compliance for ISO 27001, SEBI Cybersecurity Resilience Framework, PCI DSS",
          "Internal control design, policy development, and business continuity planning"
      ]
  },
  {
      id: 2,
      title: "Cybersecurity and IT Risk Management",
      icon: "🔒",
      description: "Covering ITGC audits, cloud/application security, ICS security, and VAPT assessments",
      details: []
  },
  {
      id: 3,
      title: "Cybersecurity Strategy & Advisory",
      icon: "🎯",
      description: "Guidance on security architecture, cloud security, IAM, application security, and security posture assessments",
      details: []
  },
  {
      id: 4,
      title: "Security Transformation",
      icon: "🔄",
      description: "Comprehensive security enhancement services",
      details: [
          "Third-party risk management",
          "Security automation",
          "Incident response, business continuity, and disaster recovery planning"
      ]
  },
  {
      id: 5,
      title: "Virtual CISO (vCISO) Services",
      icon: "👤",
      description: "For SMEs and mid-sized companies without a dedicated CISO, we act as your security officer by managing:",
      details: [
          "Data classification & encryption",
          "Access control & authentication",
          "Data masking, auditing, retention & DLP",
          "Secure data sharing, backup, monitoring, and threat detection"
      ]
  },
  {
      id: 6,
      title: "Data Life Cycle & Compliance Management",
      icon: "📊",
      description: "Comprehensive data governance and compliance solutions",
      details: [
          "Supporting certifications like SOC 2, HIPAA, ISO 27001",
          "End-to-end data governance & privacy compliance"
      ]
  },
  {
      id: 7,
      title: "Specialized Financial Sector Solutions",
      icon: "🏦",
      description: "Tailored solutions for financial institutions",
      details: [
          "Audit Trail Verification (RBI/CERT-In mandates)",
          "NPA Automation Reviews for banking",
          "Offshore Data Processing Controls",
          "Internal Financial Control (IFC) frameworks under Companies Act"
      ]
  }
];