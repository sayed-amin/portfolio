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
            "Designed, developed, and integrated secure NPCI APIs into the DCMS project, deploying a RESTful API for external providers with encryption and authentication mechanisms, ensuring seamless payment processing, data integrity, and regulatory compliance.",
            "Developed a common CAF framework for all card-related operations, enabling smooth integration of multiple banks into the DCMS application and reducing onboarding time. ",
            "Successfully integrated SBI, CGGB, KVB, and IDFC Bank into the DCMS application by aligning their specific requirements with our Integrator and CAF framework, ensuring compatibility and scalability.",
            "Led the bank integration process by analyzing diverse banking requirements and standardizing them within our DCMS architecture, improving operational efficiency.",
            "Designed and implemented Java 17, Spring Boot 3, and microservices-based scalable APIs, optimizing system performance to onboard 5 lakh customers per hour with end-to-end success.",
            "Contributed to one of the largest banking applications, handling 30–40 lakh transactions per day, reinforcing system stability and performance for major financial institutions."
        ],
    },
    {
        title: "Software Development Contractor",
        company_name: "AlgoUniversity (backed by Y-Combinator) ",
        bottomColor: "#FFFFFF",
        icon: "/company/algo.png",
        date: "August 2023 - April 2024",
        points: [
            "Designed and developed a secure online code execution platform that remotely compiles and judges user-submitted code for programming problems, ensuring correctness and efficiency.",
            "Enhanced user engagement by implementing code submission history and leaderboard tracking, allowing users to monitor progress and improve performance.",
            "Strengthened platform security by integrating Docker and sandboxing techniques, preventing malicious code execution and ensuring a safe environment for users.",
            "Optimized performance and scalability by implementing a Redis-based job queue with polling, enabling efficient concurrent request handling and reducing execution time.",
            "Deployed the platform on AWS EC2 for production, with a scalable architecture designed for future horizontal scaling using Nginx.",
            "Built the platform using MERN stack, incorporating Vite for fast front-end builds and MUI for a modern UI, ensuring a smooth and responsive user experience."
        ],
    },
    {
        title: "Software Development Intern",
        company_name: "Philips",
        bottomColor: "#0071C5",
        icon: "/company/philips.png",
        date: "Sept 2022 - July 2023",
        points: [
            "Developed a Python-based XML to JSON data conversion script, optimizing legacy device data processing for MRI, CT scan, and other medical devices, improving data accessibility and integration.",
            "Implemented role-based authentication (RBAC) in HashiCorp Vault using Java Spring Boot, ensuring secure and controlled access to sensitive medical data.",
            "Engineered a multi-threaded database migration solution, reducing execution time significantly by enabling data migration even under system load and allowing automatic recovery from failure states.",
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
