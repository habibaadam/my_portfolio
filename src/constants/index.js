import { logo } from '../assets'
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
    simmy,
    nextjs,
    phishlogo,
    simmyfranks,
    guardduty,
    awsvpc,
    awss3,
    awslambda,
    awsec2,
    awscloudwatch,
    awsiam,
    aws_security_specialty,
    aws_solutions_architect,
    alx_logo,
    aws_community,
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
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'C',
        icon: clang,
    },

    {
        name: 'MongoDb',
        icon: mongo,
    },
    {
        name: 'PostgreSQL',
        icon: postgresql,
    },

    {
        name: 'MYSQL',
        icon: sql,
    },

    {
        name: 'AWS S3',
        icon: awss3,
    },

    {
        name: 'NodeJs',
        icon: nodejs,
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
        name: 'NextJS',
        icon: nextjs,
    },
    {
        name: 'Flask',
        icon: flask,
    },
    {
        name: 'FastAPI',
        icon: fastapi,
    },
    {
        name: 'React JS',
        icon: reactjs,
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
        name: 'git',
        icon: git,
    },
    {
        name: 'nginx',
        icon: nginx,
    },
    {
        name: 'AWS VPC',
        icon: awsvpc,
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
        name: 'AWS CloudWatch',
        icon: awscloudwatch,
    },
    {
        name: 'AWS IAM',
        icon: awsiam,
    },
]

const technologyGroups = [
    {
        label: 'Languages',
        items: [
            { name: 'Python', icon: python },
            { name: 'JavaScript', icon: javascript },
            { name: 'TypeScript', icon: typescript },
            { name: 'C', icon: clang },
        ],
    },
    {
        label: 'Frameworks & Libraries',
        items: [
            { name: 'Node.js', icon: nodejs },
            { name: 'NestJS', icon: nestjs },
            { name: 'FastAPI', icon: fastapi },
            { name: 'Flask', icon: flask },
            { name: 'Next.js', icon: nextjs },
            { name: 'React JS', icon: reactjs },
        ],
    },
    {
        label: 'Databases',
        items: [
            { name: 'MongoDB', icon: mongo },
            { name: 'MySQL', icon: sql },
            { name: 'PostgreSQL', icon: postgresql },
        ],
    },
    {
        label: 'Cloud (AWS)',
        items: [
            { name: 'AWS VPC', icon: awsvpc },
            { name: 'AWS S3', icon: awss3 },
            { name: 'AWS EC2', icon: awsec2 },
            { name: 'AWS Lambda', icon: awslambda },
            { name: 'CloudWatch', icon: awscloudwatch },
            { name: 'AWS IAM', icon: awsiam },
        ],
    },
    {
        label: 'Web & Tools',
        items: [
            { name: 'HTML 5', icon: html },
            { name: 'CSS 3', icon: css },
            { name: 'Bootstrap', icon: boot },
            { name: 'git', icon: git },
            { name: 'nginx', icon: nginx },
        ],
    },
]

const experiences = [
    {
        title: 'Full Stack Developer - Backend Specialized',
        company_name: 'SimmyFranks West Africa Ltd',
        icon: simmyfranks,
        iconBg: '#333333',
        date: 'July 2025 - Present',
    },
    {
        title: 'Lead Backend Instructor',
        company_name: 'HACSA',
        icon: hacsa,
        iconBg: '#333333',
        date: 'August 2024 - Present',
    },
    {
        title: 'Freelance Full Stack Developer',
        company_name: 'PhishFortress',
        icon: phishlogo,
        iconBg: '#333333',
        date: 'March 2025 - June 2025',
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
        name: 'SimmyFranks',
        description:
            'Built a Next.js-based corporate website for SimmyFranks, an e-commerce business focused on supplying premium laboratory equipment, chemicals, reagents and complete lab solutions in Nigeria. Implemented security and auth features including reCAPTCHA v3 for spam/bot protection and Google OAuth for user authentication, and resolved production deployment challenges to ensure a smooth launch.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongo',
                color: 'green-text-gradient',
            },
        ],
        image: simmy,
        repo: 'https://github.com/franklinobiukwu/simmyfranks-webapp',
        demo: 'https://simmyfranks.com',
    },
    {
        id: 'project-2',
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
        demo: 'https://github.com/Milly801/PhishingFostres',
    },
    {
        id: 'project-3',
        name: 'ThreatDetection',
        description:
            'This project demonstrates security vulnerabilities in web applications and how AWS GuardDuty can detect them. I deployed a purposely vulnerable web application (OWASP Juice Shop) and simulated various attacks while monitoring GuardDutys detection capabilities.',
        image: guardduty,
        repo: 'https://github.com/habibaadam/Threat-Detection-GuardDuty',
        demo: 'https://github.com/habibaadam/Threat-Detection-GuardDuty',
    },
    {
        id: 'project-4',
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
        id: 'project-5',
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
]

const certifications = [
    {
        name: 'AWS Certified Security',
        level: 'Specialty',
        issuer: 'Amazon Web Services',
        date: '2026',
        image: aws_security_specialty,
        credentialUrl:
            'https://www.credly.com/badges/aa40ae1d-6a24-481d-8acf-47f72bbe3545/public_url',
    },
    {
        name: 'AWS Certified Solutions Architect',
        level: 'Associate',
        issuer: 'Amazon Web Services',
        date: '2025',
        image: aws_solutions_architect,
        credentialUrl:
            'https://www.credly.com/badges/d9edda6f-cfd1-42c9-8865-0229deb23278/public_url',
    },
    {
        name: 'AWS Community Builder',
        level: 'Recognition',
        issuer: 'Amazon Web Services',
        date: '2025',
        image: aws_community,
        credentialUrl: 'https://aws.amazon.com/developer/community/community-builders/',
    },
    {
        name: 'ALX Software Engineering - Backend Speciality',
        level: 'Certificate',
        issuer: 'ALX/Holberton',
        date: '2024',
        image: alx_logo,
        credentialUrl: 'https://intranet.alxswe.com/certificates/9ENHYXT3Bh',
    },
]

export { services, technologies, technologyGroups, experiences, projects, certifications }
