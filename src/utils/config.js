export const hashRoutes = [
    ["Home", "/#home"],
    ["About", "/#about"],
    ["Experience", "/#experience"],
    ["Projects", "/#projects"],
    ["Contact", "/#contact"],
    ["Resume", "/resume.pdf"]
];

export const sections = hashRoutes.map(route => route[0].toLowerCase());

export const introAnimatedText = [
    "IT Audit Specialist",
    "Software Engineer",
    "GRC & Compliance Enthusiast",
    "FinTech Security Expert",
    "PCI DSS & RBI Compliance",
    "ISO 27001 Lead Auditor",
    "Microservices & Kubernetes",
    "Cloud Security (AWS)",
    "Controls Automation"
];

export const myName = "Amin Sayed";
export const shortDescription = "IT Audit Specialist & Software Engineer";

export const socialMediaDetails = [
    {
        name: 'GitHub',
        url: 'https://github.com/sayed-amin',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mohammed-amin-sayed/',
    },
    {
        name: 'Email',
        url: 'mailto:sayedamin01@gmail.com',
    }
];

export const skills = [
    {
        name: "Audit & GRC",
        items: ["PCI DSS", "SOX-ITGC", "RBI Compliance", "ISO 27001", "CAF Framework", "GRC", "Risk Assessment"]
    },
    {
        name: "Security & Tools",
        items: ["Nessus", "Burp Suite", "Splunk", "Vault RBAC", "OAuth 2FA", "ISO 8583"]
    },
    {
        name: "Backend",
        items: ["Java 17", "SpringBoot", "MicroServices", "RestAPI", "Redis"]
    },
    {
       name: "Cloud & DevOps",
        items: ["AWS", "Docker","CI/CD-Pipelines", "Jenkins"],
    },
    {
          name: "Database",
        items: ["MySQL", "MongoDB","PostgreSQL"],
    },
    {
        name: "Frontend",
        items: ["React", "NextJs", "Angular","ReactNative","TailwindCSS","Bootstrap" , "MUI","Redux"],
    },
];

export const experiences = [
    {
        title: "Software Engineer & IT Audit Specialist",
        company_name: "Financial Software & Systems (FSS)",
        bottomColor: "#bc1010",
        icon: "/company/FSS.png",
        date: "Apr 2024 - Present",
        points: [
            "Led PCI DSS & RBI compliance audits for DCMS, remediating 15+ critical findings and achieving zero non-conformities.",
            "Architected CAF microservice in Spring Boot to standardize control checks, reducing custom code by 80% and accelerating bank onboarding by 50%.",
            "Built audit-automation pipelines (Python/Postman/Splunk) cutting manual review time by 70% and delivering real-time GRC dashboards.",
            "Engineered ISO 8583-compliant, high-throughput microservices handling 3–4M transactions/day with 99.9% uptime."
        ],
    },
    {
        title: "Software Engineer (Contract)",
        company_name: "AlgoUniversity (Y Combinator)",
        bottomColor: "#FFFFFF",
        icon: "/company/algo.png",
        date: "Aug 2023 - Apr 2024",
        points: [
            "Integrated SOC 2–style audit controls into a Docker-sandboxed code execution engine, preventing 100% of injection attempts.",
            "Streamlined log ingestion into Splunk for continuous control monitoring, reducing forensic investigation time by 65%.",
            "Scaled MERN-stack solution on AWS EC2 with Redis queues, supporting 50K+ secure code submissions daily."
        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Philips Healthcare",
        bottomColor: "#0071C5",
        icon: "/company/philips.png",
        date: "Sep 2022 - Jul 2023",
        points: [
            "Achieved 100% HIPAA audit compliance by implementing Vault RBAC policies and documenting PHI controls in Spring Boot.",
            "Modernized 27GB+ MRI/CT XML-to-JSON pipeline with audit trails, improving data accessibility by 40%.",
            "Developed multi-threaded ETL scripts, accelerating secure data migrations by 60% under live load."
        ],
    }
];

export const projectsData = [
     {
        title: 'Online Judge',
        desciption: 'Build a platform that remotely runs and compiles user submitted code for a programming problem securely and judges if the code is correct/wrong',
        tech: ['Nodejs', 'React', 'Docker', 'Redis', 'MongoDB', 'Expressjs', 'JWT', 'Vite'],
        github: 'https://github.com/sayed-amin/OnlineJudgeBackend',
        external: 'http://onlinejudge.sayedamin.in/',
        image: '/projects/onlinejudge.png'
    },
    {
        title: 'Portfolio',
        desciption: 'Crafted an engaging portfolio site with ReactJS and Three.js, enhancing user interaction through a serverless feedback system powered by a custom API',
        tech: ['Nodejs', 'React', 'Threejs', 'Nodemailer', 'MUI', 'Bootstrap', 'drei'],
        github: 'https://github.com/sayed-amin/portfolio',
        external: 'https://www.sayedamin.in',
        image: '/projects/portfolio.png'
    },
    {
        title: 'Smart Hydroponics System (AI-Driven Precision Aeroponics)',
        desciption: 'Built an AI-powered aeroponics system integrating deep learning and IoT sensors to monitor and control plant growth, ensuring precise environmental adjustments.',
        tech: [' Arduino uno', 'IOT', 'AWS Cloud', 'Deep learning', 'Image processing', 'Machine Learning'],
        external:'https://www.researchgate.net/publication/375442746_AI-Driven_Precision_Aeroponics_Deep_Learning_for_Plant_Identification_and_Health_Monitoring_in_an_IoT-Enabled_System',
        image: '/projects/hydroponics.png'
    },
    {
        title: 'Automated Compliance Monitoring Platform',
        desciption: 'Docker & AWS–based suite automating PCI DSS and RBI control checks, cutting audit prep time by 75% across 12 financial institutions.',
        tech: ['Docker', 'AWS', 'Python', 'Postman', 'Splunk'],
        external: '',
        image: '/projects/it1.png'
    },
    {
        title: 'TOTP + Redis Fraud Detection System',
        desciption: 'Built secure 2FA flow using TOTP and Redis, preventing $2M+ in annual fraud with 99.9% unauthorized-access prevention.',
        tech: ['Java', 'Spring Boot', 'Redis', 'TOTP'],
        external: '',
        image: '/projects/it2.png'
    }
];

export const contactData = {
    imagesrc: '/stars/StarBackground.png',
    imagealt: 'Star Background Image',
};
