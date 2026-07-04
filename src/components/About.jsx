import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                <h3 className="text-taupe text-[18px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
    )
}

const About = () => {
    return (
        <div className="-mt-[6rem]">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.div
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] flex flex-col gap-5"
            >
                <p>
                    Habiba here :) I'm a full-stack engineer with a clear focus on backend
                    development and building scalable, reliable systems. My roots in data science
                    sharpened my analytical thinking and data-driven approach, both of which heavily
                    influence how I design, plan, and build software.
                </p>
                <p>
                    I work comfortably across JavaScript, TypeScript, Python, and C, which lets me
                    adapt quickly and choose the right tools for whatever backend challenge I'm
                    solving. While I can operate across the stack, backend engineering is where I do
                    my best work.
                </p>
                <p>
                    Beyond building systems, I'm passionate about growing the next wave of talent in
                    tech. I've mentored and taught 100+ girls in backend development, and I actively
                    advocate for increased representation of women in engineering. Making tech more
                    accessible and inclusive is a huge part of why I do what I do.
                </p>
                <p>
                    I hold two AWS certifications — Solutions Architect and Security Specialty — and
                    I'm an AWS Community Builder, actively expanding my expertise in cloud
                    architecture and exploring how cloud services integrate into modern backend
                    systems to improve scalability, performance, and developer experience.
                </p>
                <p>
                    Always learning, always building, and always pushing myself (and others) forward
                    — one step at a time.
                </p>
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, 'about')
