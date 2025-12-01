import {
    frontend,
    backend,
    javascript,
    html,
    css,
    python,
    flask,
    sql,
    clang,
    nginx,
    boot,
    reactjs,
    nodejs,
    git,
    celestial,
    weather,
    hbnb,
    mongo,
    optima,
    hacsa,
    typescript,
    fastapi,
    nestjs,
    postgresql,
    phishfortress,
    faithfulmatch,
    phishlogo,
    simmyfranks,
    guardduty,
    awsvpc,
    awss3,
    awslambda,
    awsec2,
    awscloudwatch,
    awsiam,
} from '../assets'

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
]

const services = [
    {
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'Frontend Developer',
        icon: frontend,
    },
]

const technologies = [
    {
        name: 'Python',
        icon: python,
    },

    {
        name: 'MongoDb',
        icon: mongo,
    },
    {
        name: 'AWS VPC',
        icon: awsvpc,
    },

    {
        name: 'NodeJs',
        icon: nodejs,
    },
    {
        name: 'C',
        icon: clang,
    },

    {
        name: 'MYSQL',
        icon: sql,
    },
    {
        name: 'PostgreSQL',
        icon: postgresql,
    },
    {
        name: 'AWS S3',
        icon: awss3,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'NestJS',
        icon: nestjs,
    },
    {
        name: 'Flask',
        icon: flask,
    },
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'Bootstrap',
        icon: boot,
    },
    {
        name: 'CSS 3',
        icon: css,
    },

    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'nginx',
        icon: nginx,
    },
    {
        name: 'AWS EC2',
        icon: awsec2,
    },
    {
        name: 'AWS Lambda',
        icon: awslambda,
    },
    {
        name: 'FastAPI',
        icon: fastapi,
    },
    {
        name: 'AWS CloudWatch',
        icon: awscloudwatch,
    },
    {
        name: 'AWS IAM',
        icon: awsiam,
    },
]

const experiences = [
    {
        title: 'Full Stack Developer',
        company_name: 'SimmyFranks West Africa Ltd',
        icon: simmyfranks,
        iconBg: '#333333',
        date: 'July 2025 - Present',
    },
    {
        title: 'Freelance Full Stack Developer',
        company_name: 'PhishFortress',
        icon: phishlogo,
        iconBg: '#333333',
        date: 'March 2025 - June 2025',
    },
    {
        title: 'Backend Developer',
        company_name: 'Faithful Match',
        icon: faithfulmatch,
        iconBg: '#333333',
        date: 'February 2025 - Present',
    },
    {
        title: 'Lead Backend Instructor',
        company_name: 'HACSA',
        icon: hacsa,
        iconBg: '#333333',
        date: 'August 2024 - Present',
    },
    {
        title: 'Full Stack Developer Intern',
        company_name: 'Optima Data Services',
        icon: optima,
        iconBg: '#333333',
        date: 'June 2024 - July 2024',
    },
]

const projects = [
    {
        id: 'project-1',
        name: 'PhishFortress',
        description:
            'A phishing detection tool/website that uses a real phishing simulation to detect phishing emails',
        tags: [
            {
                name: 'python',
                color: 'blue-text-gradient',
            },
            {
                name: 'fastapi',
                color: 'pink-text-gradient',
            },
            {
                name: 'react-js',
                color: 'green-text-gradient',
            },
            {
                name: 'postgresql',
                color: 'pink-text-gradient',
            },
        ],
        image: phishfortress,
        repo: 'https://github.com/Milly801/PhishingFostres',
        demo: 'https://phishfortress.me',
    },
    {
        id: 'project-2',
        name: 'ThreatDetection',
        description:
            'This project demonstrates security vulnerabilities in web applications and how AWS GuardDuty can detect them. I deployed a purposely vulnerable web application (OWASP Juice Shop) and simulated various attacks while monitoring GuardDutys detection capabilities.',
        image: guardduty,
        repo: 'https://github.com/habibaadam/Threat-Detection-GuardDuty',
        demo: 'https://github.com/habibaadam/Threat-Detection-GuardDuty',
    },
    {
        id: 'project-3',
        name: 'Celestial Palate',
        description:
            'A website for a high-end restaurant with locations in South Africa, Japan, and Italy.',
        tags: [
            {
                name: 'python',
                color: 'blue-text-gradient',
            },
            {
                name: 'flask',
                color: 'pink-text-gradient',
            },
            {
                name: 'sql',
                color: 'green-text-gradient',
            },
            {
                name: 'javascript',
                color: 'blue-text-gradient',
            },
            {
                name: 'boot',
                color: 'pink-text-gradient',
            },
        ],
        image: celestial,
        repo: 'https://github.com/habibaadam/Celestial-Palate-Portfolio',
        demo: 'https://celestial-palate-portfolio.vercel.app/',
    },
    {
        id: 'project-4',
        name: 'Weather App',
        description:
            'A weather app that displays weather temperatures and forecast based on city searches.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'html',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: weather,
        repo: 'https://github.com/habibaadam/react-weather-app',
        demo: 'https://bibi-react-weather.netlify.app/',
    },
    {
        id: 'project-5',
        name: 'Airbnb Clone',
        description: 'A small copy or clone of the popular Airbnb website.',
        tags: [
            {
                name: 'python',
                color: 'blue-text-gradient',
            },
            {
                name: 'sql',
                color: 'green-text-gradient',
            },
            {
                name: 'flask',
                color: 'pink-text-gradient',
            },
            {
                name: 'javascript',
                color: 'pink-text-gradient',
            },
        ],
        image: hbnb,
        repo: 'https://github.com/mukoe2020/AirBnB_clone_v4',
        demo: 'http://54.205.99.166:5003/2-hbnb',
    },
]

export { services, technologies, experiences, projects }
