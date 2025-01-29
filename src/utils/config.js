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
    "Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "High-Performance Computing",
    "Cloud & AI Enthusiast",
    "FinTech & Low Latency Systems",
    "System Design & Architecture",
    "Tech Enthusiast",
    "Gamer"
];

export const myName = "Sayed Amin";
export const shortDescription = "Software Engineer | Full Stack Developer";

export const socialMediaDetails = [
    {
        name: 'GitHub',
        url: 'https://github.com/sayed-amin',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/mohammed-amin-sayed/',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/aminsayed01/',
    },
    {
        name: 'Email',
        url: '100xdevsreports@gmail.com',
    }
];

export const skills = [
    {
        name: "Languages",
        items: ["C", "C++", "Java", "HTML/CSS", "Javascript", "Typescript"],
    }, 
    {
        name: "Backend",
        items: ["SpringBoot","Node","ExpressJs", "RestAPI","MicroServices","JunitTesting","SocketIO","GraphQL"],
    },
    {
        name: "Frontend",
        items: ["React", "NextJs", "Angular","ReactNative","TailwindCSS","Bootstrap" , "MUI","Redux"],
    },
    {
        name: "Cloud & DevOps",
        items: ["AWS", "Docker","CI/CD-Pipelines", "Jenkins"],
    },
    {
        name: "Database",
        items: ["MySQL", "MongoDB","PostgreSQL", "Redis"],
    },
    {
        name: "Tools/Software/Others",
        items: ["Git", "Github", "VSCode", "IntellijIdea", "Postman"],
    },
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Financial Software & Systems ",
        bottomColor: "#bc1010",
        icon: "/company/FSS.png",
        date: "April 2024 - present",
        points: [
            "Developed and deployed a secure NPCI API, processing over 2 million daily transactions, enabling real-time external payments while ensuring 100% regulatory compliance, and improving transaction processing speed by 80%.",
            "Designed and integrated a Two-Factor Authentication (2FA) API, reducing unauthorized access attempts by 99.9%, fraud incidents by 85%, and maintaining 99.99% authentication uptime.",
            "Built a common CAF framework for all card operations, eliminating manual code changes for bank integrations, reducing effort by 80%, and improving processing speed by 85% with multi-threading and schedulers.",
            "Spearheaded integration of SBI, CGGB, KVB, and IDFC Bank into the DCMS application by collaborating with a team of 3 developers to align requirements with the Integrator & CAF framework, achieving 100% compatibility, 50% faster integration, and seamless onboarding for 10 million customers.",
            "Designed and implemented Java 17, Spring Boot 3, and microservices-based scalable APIs, optimizing system performance to onboard 500,000 customers per hour with end-to-end success.",
            "Engineered one of the largest PCI S3-certified banking applications, handling 3–4 million transactions per day, reinforcing system stability and performance for major financial institutions."
        ],
    },
    {
        title: "Software Development Contractor",
        company_name: "AlgoUniversity (backed by Y-Combinator) ",
        bottomColor: "#FFFFFF",
        icon: "/company/algo.png",
        date: "August 2023 - April 2024",
        points: [
            "Architected a secure online code execution platform, remotely compiling and judging user-submitted code for programming problems, handling 1,000+ submissions per day with 99.9% accuracy in execution.",
            "Increased user engagement by 40% by implementing code submission history and leaderboard tracking, enabling users to monitor progress and enhance coding efficiency.",
            "Strengthened security by integrating Docker and sandboxing techniques, preventing 100% of unauthorized code execution attacks, ensuring a safe and isolated execution environment.",
            "Optimized performance and scalability by implementing a Redis-based job queue with polling, reducing execution time by 60%, enabling efficient concurrent request handling for high-traffic loads.",
            "Orchestrated the deployment of the platform on AWS EC2 with a scalable, fault-tolerant architecture, leveraging Nginx for load balancing, ensuring 99.99% uptime under high traffic.",
            "Developed a full-stack solution using the MERN stack, leveraging Vite for 2x faster front-end builds and MUI for a modern, responsive UI, improving user experience and interface responsiveness."
        ],
    },
    {
        title: "Software Development Intern",
        company_name: "Philips",
        bottomColor: "#0071C5",
        icon: "/company/philips.png",
        date: "Sept 2022 - July 2023",
        points: [
            "Crafted a Python-based XML to JSON data conversion script, optimizing legacy device data processing for MRI, CT scan, and other medical devices, improving data accessibility by 40% and reducing integration time 30%.",
            "Implemented role-based authentication (RBAC) in HashiCorp Vault using Java Spring Boot, ensuring 100% compliance with healthcare regulations and providing secure, controlled access to sensitive medical data.",
            "Pioneered a multi-threaded database migration solution, Accelerated execution time by 60% dramatically by enabling data migration under system load and allowing automatic recovery from failure states.",
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
    }
];

export const contactData = {
    imagesrc: '/stars/StarBackground.png',
    imagealt: 'Star Background Image',
};
