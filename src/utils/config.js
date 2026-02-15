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
    "CTO & Tech Leader",
    "Full Stack Engineer",
    "Microservices Architect",
    "Java & Spring Boot",
    "Cloud Native (AWS)",
    "React & Next.js",
    "FinTech Systems",
    "EdTech (B2B & B2C)",
];

export const myName = "Sayed Amin";
export const shortDescription = "CTO at Digital Benchers | Full-Stack Engineer | Building Scalable Products";

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
        url: 'sayedamin01@gmail.com',
    }
];

export const skills = [
    {
        name: "Languages",
        items: ["Java", "C++", "Python", "Javascript", "Typescript", "HTML/CSS"],
    },
    {
        name: "Backend",
        items: ["SpringBoot", "MicroServices", "RestAPI", "GraphQL", "Node", "ExpressJs", "JunitTesting"],
    },
    {
        name: "Frontend",
        items: ["React", "NextJs", "Angular", "ReactNative", "TailwindCSS", "Bootstrap", "MUI", "Redux"],
    },
    {
        name: "Cloud & DevOps",
        items: ["AWS", "Docker", "CI/CD-Pipelines", "Jenkins"],
    },
    {
        name: "Database",
        items: ["PostgreSQL", "Redis", "MongoDB", "MySQL"],
    },
    {
        name: "Tools & Testing",
        items: ["Git", "IntellijIdea", "Postman", "JunitTesting"],
    },
];

export const experiences = [
    {
        title: "Chief Technology Officer (CTO)",
        company_name: "Digital Benchers (EdTech - B2B & B2C)",
        bottomColor: "#6C63FF",
        icon: "/company/favicon.ico",
        date: "Oct 2025 - Present",
        location: "Mumbai",
        points: [
            "Led full-stack technical strategy (frontend, backend, DevOps) as founding CTO, growing company valuation from 750L to $12.5Cr (25x growth).",
            "Architected scalable platform serving both B2B enterprise clients and B2C learners, making data-driven product decisions to drive user acquisition and retention.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Financial Software & Systems (FSS)",
        bottomColor: "#bc1010",
        icon: "/company/FSS.png",
        date: "Apr 2024 - Oct 2025",
        location: "Mumbai",
        points: [
            "Engineered Java/Spring Boot microservices processing 2M+ daily financial transactions across banking networks (SBI, IDFC, KVB), applying quantitative analysis for real-time anomaly detection and performance optimization.",
            "Designed Common CAF framework adopted by 4+ banks enabling 10M+ customer onboarding — reduced integration timelines by 50% and manual effort by 80%.",
            "Built 2FA authentication system (TOTP + Redis) reducing financial fraud by 85%, demonstrating data-driven security in PCI-DSS compliant infrastructure.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "AlgoUniversity (Y Combinator W21)",
        bottomColor: "#FFFFFF",
        icon: "/company/algo.png",
        date: "Aug 2023 - Apr 2024",
        location: "Remote",
        points: [
            "Architected distributed code execution engine handling 1K+ concurrent submissions/day with Docker sandboxing, Redis job queues on AWS EC2 — achieved 99.9% execution accuracy.",
            "Improved system performance by 60%: implemented load balancing that reduced execution latency from 8s to 3.2s.",
        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Philips Healthcare",
        bottomColor: "#0071C5",
        icon: "/company/philips.png",
        date: "Sep 2022 - Jul 2023",
        location: "Bengaluru",
        points: [
            "Processed 27GB+ medical datasets (MRI/CT): converted XML to JSON schemas using Python, improving data accessibility by 40%.",
            "Implemented RBAC system (Java/Spring Boot + HashiCorp Vault) achieving 100% HIPAA compliance for sensitive patient health data.",
        ],
    }
];

export const projectsData = [
    {
        title: 'Online Judge',
        desciption: 'Distributed code execution engine that remotely compiles and judges user-submitted code with Docker-sandboxed isolation, Redis job queues, and 99.9% accuracy.',
        tech: ['Node.js', 'React', 'Docker', 'Redis', 'MongoDB', 'Express', 'AWS EC2', 'Vite'],
        github: 'https://github.com/sayed-amin/OnlineJudgeBackend',
        external: 'http://onlinejudge.sayedamin.in/',
        image: '/projects/onlinejudge.png'
    },
    {
        title: 'AI-Driven Agricultural IoT System',
        desciption: 'Achieved 95% plant health accuracy using CNN models on 27GB image dataset (Python/TensorFlow). Reduced sensor data latency by 50% with Node.js/Express microservices on AWS EC2.',
        tech: ['Python', 'TensorFlow', 'Node.js', 'Express', 'AWS EC2', 'IoT', 'CNN'],
        external: 'https://www.researchgate.net/publication/375442746_AI-Driven_Precision_Aeroponics_Deep_Learning_for_Plant_Identification_and_Health_Monitoring_in_an_IoT-Enabled_System',
        image: '/projects/hydroponics.png'
    },
    {
        title: 'Portfolio',
        desciption: 'Professional portfolio built with React featuring animated transitions, responsive design, and a serverless contact system powered by EmailJS.',
        tech: ['React', 'Vite', 'MUI', 'EmailJS', 'CSS Modules'],
        github: 'https://github.com/sayed-amin/portfolio',
        external: 'https://www.sayedamin.in',
        image: '/projects/portfolio.png'
    },
];

export const contactData = {
    imagesrc: '/stars/StarBackground.png',
    imagealt: 'Star Background Image',
};
