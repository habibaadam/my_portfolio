import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { technologyGroups } from '../constants'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

const TechCard = ({ name, icon, index }) => (
    <motion.div
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        className="card-gradient p-[1px] rounded-full shadow-card cursor-default"
    >
        <div
            className="bg-jetLight rounded-full w-28 h-28 flex flex-col items-center justify-center gap-1 tech-icon"
            style={{ animationDelay: `${index * 0.1}s` }}
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

            <div className="mt-14 flex flex-col gap-10">
                {technologyGroups.map((group, groupIndex) => (
                    <div key={group.label}>
                        <p className="text-taupe uppercase tracking-widest text-[11px] font-semibold font-poppins mb-5 pb-2 border-b border-[rgba(153,153,161,0.25)]">
                            {group.label}
                        </p>
                        <div className="flex flex-wrap gap-6">
                            {group.items.map((technology, index) => (
                                <TechCard
                                    key={technology.name}
                                    index={groupIndex * 8 + index}
                                    {...technology}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Tech, '')
