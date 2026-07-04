import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

const TechCard = ({ name, icon, index }) => (
    <motion.div
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        className="card-gradient p-[1px] rounded-full shadow-card cursor-default"
    >
        <div
            className="bg-jetLight rounded-full w-28 h-28 flex flex-col items-center justify-center gap-1 tech-icon"
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <img src={icon} alt={name} className="w-12 h-12 object-contain" />
            <span className="text-timberWolf text-[9px] font-poppins text-center px-2 leading-tight">
                {name}
            </span>
        </div>
    </motion.div>
)

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubTextLight}>My skills</p>
                <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 mt-14">
                {technologies.map((technology, index) => (
                    <TechCard key={technology.name} index={index} {...technology} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Tech, '')
