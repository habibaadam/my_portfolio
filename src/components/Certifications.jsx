/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { certifications } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const CertCard = ({ name, level, issuer, date, image, credentialUrl, index }) => (
    <motion.div
        variants={fadeIn('up', 'spring', 0.15 * index, 0.75)}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        className="bg-eerieBlack rounded-2xl overflow-hidden flex flex-col"
        style={{ boxShadow: 'rgba(0,0,0,0.25) 0px 8px 24px' }}
    >
        {/* Badge area */}
        <div className="bg-jet flex items-center justify-center p-8 min-h-[180px]">
            {image ? (
                <img
                    src={image}
                    alt={name}
                    className="max-w-[140px] max-h-[140px] object-contain"
                />
            ) : (
                <div className="card-gradient p-[2px] rounded-full">
                    <div className="w-[120px] h-[120px] rounded-full bg-jetLight flex flex-col items-center justify-center gap-1">
                        <span className="text-timberWolf font-beckman font-extrabold text-[24px] leading-none">
                            AWS
                        </span>
                        {level && (
                            <span className="text-taupe text-[8px] font-poppins uppercase tracking-widest text-center px-2">
                                {level}
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>

        {/* Details */}
        <div className="p-5 flex flex-col flex-1 gap-1">
            <div className="flex items-start justify-between gap-2">
                <h3 className="text-timberWolf text-[17px] font-bold font-beckman leading-snug">
                    {name}
                </h3>
                {level && (
                    <span className="shrink-0 mt-[2px] text-[9px] font-poppins font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-jetLight text-taupe">
                        {level}
                    </span>
                )}
            </div>
            <p className="text-taupe text-[13px] font-poppins">{issuer}</p>
            <p className="text-dim text-[12px] font-poppins mt-1">{date}</p>

            {credentialUrl && (
                <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto pt-4 text-[11px] text-taupe font-poppins uppercase
                    tracking-widest hover:text-timberWolf transition-colors duration-200
                    flex items-center gap-1 w-fit"
                >
                    Verify ↗
                </a>
            )}
        </div>
    </motion.div>
)

const Certifications = () => {
    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubTextLight}>Credentials &amp; Recognition</p>
                <h2 className={styles.sectionHeadTextLight}>Certifications.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-taupe text-[15px] max-w-2xl leading-[28px] font-poppins"
            >
                Verified credentials across cloud engineering and software development, from AWS
                architecture and security to over a year of intensive backend engineering training.
                A reflection of consistent learning and doing.
            </motion.p>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <CertCard key={cert.name} index={index} {...cert} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(Certifications, 'certifications')
