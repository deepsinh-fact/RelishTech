import bankingImg from "./assets/Service/banking.jpg";
import fintechImg from "./assets/Service/fintech.jpg";
import healthcareImg from "./assets/Service/healthcare.jpg";
import automobileImg from "./assets/Service/automobile.jpg";
import itServiceImg from "./assets/Service/IT service.jpg";
import startupImg from "./assets/Service/startup.jpg";
import img2 from "./assets/serviceDelivered/img2.jpg";
import img3 from "./assets/serviceDelivered/img3.jpg";
import img4 from "./assets/serviceDelivered/img4.jpg";
import img5 from "./assets/serviceDelivered/img5.jpg";
import img6 from "./assets/serviceDelivered/img6.jpg";
import img7 from "./assets/serviceDelivered/img7.jpg";
import img8 from "./assets/serviceDelivered/img8.jpg";
import img9 from "./assets/serviceDelivered/img9.jpg";
import img10 from "./assets/serviceDelivered/img10.jpg";

// ----------------------------------

import grc from './assets/grc.jpg'
import risk from './assets/risk.jpg'
import expertise from './assets/expertise.jpg'
import protection from './assets/protection.jpg'
import teamOfExpert from './assets/teamOfExpert.jpg'



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
  },
  services: {
    tag: "Our Services",
    titleLine1: "Comprehensive Cybersecurity",
    titleLine2: "Solutions & Services",
    description: "From governance and compliance to advanced threat protection, we deliver end-to-end cybersecurity services tailored to your business needs and regulatory requirements.",
    primaryCta: "Get Started",
    secondaryCta: "Contact Us"
  },
  team: {
    tag: "Our Team",
    titleLine1: "Meet the Experts Behind",
    titleLine2: "Our Cybersecurity Success",
    description: "Our team of certified cybersecurity professionals brings together years of experience, industry expertise, and a passion for protecting your digital assets with innovative solutions.",
    primaryCta: "Join Our Team",
    secondaryCta: "Contact Us"
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

export const additionalServices = [
  {
    title: "Risk Management & Vulnerability Testing",
    items: [
      "Penetration Testing (VAPT)",
      "Security Audits & Vulnerability Scanning",
      "Continuous Threat Monitoring"
    ],
    borderColor: "border-l-blue-500"
  },
  {
    title: "Compliance & Regulatory Consulting",
    items: [
      "ITGC Audits, Internal & Forensic Audits",
      "Regulatory Audit Support: RBI, SEBI, IRDAI, GDPR, DPDP",
      "ISO 27001, SOC 2, HIPAA, PDPL Readiness",
      "IFC & SOX Implementation"
    ],
    borderColor: "border-l-blue-500"
  },
  {
    title: "Data Lifecycle Management (DLM)",
    items: [
      "Data Classification, Encryption, and Masking",
      "Access Control & Identity Management",
      "Data Retention, Integrity & Auditing",
      "DLP, Backup, and Recovery",
      "Secure Collaboration & Monitoring"
    ],
    borderColor: "border-l-blue-500"
  },
  {
    title: "Security Operations Center (SOC) for SMEs",
    description: "A plug-and-play SOC ecosystem providing enterprise-grade security and visibility tailored for SMEs:",
    features: [
      "24×5/7 Monitoring & Alerting",
      "Continuous Threat Detection",
      "Builds Trust with Clients & Regulators",
      "Supports SOC 2, HIPAA, ISO 27001, DPDP Compliance"
    ],
    borderColor: "border-l-blue-500"
  },
  {
    title: "Regulatory Technology (RegTech) Platforms",
    items: ["GRC Tools Expertise: Vanta, JupiterOne, Emraba, StrikeGraph"],
    borderColor: "border-l-blue-500"
  }
];

export const teamData = {
  leadership: [
    {
      name: "DHAVAL M. LIMBANI",
      position: "Founder & Principal Consultant",
      experience: "10+ Years",
      credentials: "CA, CPA (Australia), DISA, FAFD, ISO 42001 LI, GDPR LI",
      specializations: "SOC 2, DPDP/GDPR Compliance, ITGC & IS Audits, Forensic Audits, Strategic Risk",

    },
    {
      name: "HEMANG DOSHI",
      position: "Lead Advisor, Risk, Audit & Compliance",
      experience: "15+ Years",
      credentials: "CA, CISA, DISA, ISO 27001/22301 LA, CEH, GDPR",
      specializations: "System Audits, Operational Risk, Internal Controls, IBC Consulting, Author",

    },
    {
      name: "KUNAL BHAVSAR",
      position: "Senior InfoSec Consultant",
      experience: "9+ Years",
      credentials: "M.Tech (Cybersecurity), CISM, CEH, ISO 27001 LA",
      specializations: "GRC Implementation (SOC 2, HIPAA, PCI-DSS), Security Governance, VAPT, GRC Tools",

    },
    {
      name: "ROSHAN KAPPALA",
      position: "Cybersecurity Engineer & VAPT Expert",
      experience: "5+ Years",
      credentials: "B.Tech (Cybersecurity), CEH, Cyber Criminologist",
      specializations: "Red Teaming, VAPT, Cloud Security, IoT Security, Incident Response, Threat Hunting, Cybersecurity Awareness",

    }
  ]
};


export const servicesDelivered = [
  {
    id: 1,
    title: "IT General Controls (ITGC) Audit",
    description: "Robust IT governance and risk management solutions.",
    image: img2
  },
  {
    id: 2,
    title: "Cybersecurity Audit",
    description: "Advanced protection from evolving cyber threats.",
    image: img2
  },
  {
    id: 3,
    title: "Audit Trail Compliance",
    description: "Ensuring transparent, compliant record-keeping practices.",
    image: img3
  },
  {
    id: 4,
    title: "NPA Automation",
    description: "Streamlining non-performing asset management processes.",
    image: img4
  },
  {
    id: 5,
    title: "Offshore Data Processing Audit",
    description: "Ensuring secure, compliant offshore data operations.",
    image: img5
  },
  {
    id: 6,
    title: "Application Security Testing",
    description: "Comprehensive vulnerability identification and remediation services.",
    image: img6
  },
  {
    id: 7,
    title: "Internal Financial Controls (IFC) Implementation",
    description: "Strengthening financial reporting accuracy and reliability.",
    image: img7
  },
  {
    id: 8,
    title: "ERP Implementation Support",
    description: "Providing smooth ERP deployment for enhanced efficiency.",
    image: img8
  },
  {
    id: 9,
    title: "SOX End-to-End Implementation",
    description: "Delivering seamless SOX compliance frameworks.",
    image: img9
  },
  {
    id: 10,
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    description: "Offering proactive security weakness detection and remediation.",
    image: img10 
  }
];



// ----------------------------------------------------------------

export const servicesData = [
  {
    icon: 'ShieldIcon',
    title: 'Governance, Risk & Compliance (GRC)',
    description: 'Navigate internal controls, security policies, business continuity, and compliance with ISO 27001, NCA, and PDPL.',
    gradient: 'bg-gradient-to-br from-orange-400 via-pink-400 to-purple-600',
    image: grc
  },
  {
    icon: 'DocumentIcon',
    title: 'Compliance & Audit Services',
    description: 'Ensure regulatory adherence with our compliance, internal, fraud detection, and data privacy audits.',
    gradient: 'bg-gradient-to-br from-pink-300 via-orange-300 to-red-400',
    image: "/compliance.jpg",
  },
  {
    icon: 'CybersecurityIcon',
    title: 'Cybersecurity & IT Risk Management',
    description: 'Protect your digital assets with ITGC, cybersecurity, cloud, application, and industrial control system security, plus VAPT.',
    gradient: 'bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400',
    image: risk
   }
];

export const featuresData = [
  {
    imageSrc: expertise, 
    title: "Proven Expertise",
    description: "3+ years of excellence with 100+ successful projects."
  },
  {
    imageSrc: protection,
    title: "Comprehensive Protection",
    description: "Protecting digital assets and ensuring compliance."
  },
  {
    imageSrc: teamOfExpert,
    title: "Dedicated Professionals",
    description: "Team of 20+ cybersecurity experts."
  }
];

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





