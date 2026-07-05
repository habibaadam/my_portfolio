import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { download, downloadHover, resume, cv } from '../assets'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => {
    const isCurrent = experience.date.toLowerCase().includes('present')

    return (
        <VerticalTimelineElement
            contentStyle={{
                background: '#eaeaec',
                color: '#292929',
                boxShadow: 'rgba(0, 0, 0, 0.08) 0px 8px 24px, rgba(0, 0, 0, 0.04) 0px 2px 4px',
            }}
            contentArrowStyle={{
                borderRight: '7px solid #eaeaec',
            }}
            date={
                <p className="text-dim text-[13px] font-poppins font-medium uppercase tracking-widest">
                    {experience.date}
                </p>
            }
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-jetLight text-[21px] font-bold font-beckman tracking-[1px] leading-snug">
                        {experience.title}
                    </h3>
                    {isCurrent && (
                        <span className="shrink-0 mt-[3px] text-[9px] font-poppins font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-night text-timberWolf">
                            Now
                        </span>
                    )}
                </div>
                <p className="text-onyx text-[15px] font-semibold font-poppins mt-[6px]">
                    {experience.company_name}
                </p>
            </div>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    const downloadBtnRef = useRef(null)
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = cv // Assuming cv is the path to your resume file in the assets folder
        link.download = 'habiba_cv.pdf' // Set the filename for the downloaded file
        link.click()
    }
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
                    What I've done so far
                </p>
                <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>Work Experience.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline className="vertical-timeline-custom-line">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                    <VerticalTimelineElement
                        contentStyle={{
                            background: '#eaeaec',
                            color: '#292929',
                            boxShadow:
                                'rgba(0, 0, 0, 0.08) 0px 8px 24px, rgba(0, 0, 0, 0.04) 0px 2px 4px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid #eaeaec',
                        }}
                        iconStyle={{ background: '#333333' }}
                        icon={
                            <div className="flex justify-center items-center w-full h-full">
                                <img
                                    src={resume}
                                    alt="resume"
                                    className="w-[45%] h-[45%] object-contain"
                                />
                            </div>
                        }
                    >
                        <p className="text-dim text-[12px] font-poppins font-medium uppercase tracking-widest">
                            Full CV available
                        </p>
                        <button
                            className="live-demo flex items-center justify-center gap-2
                            text-[14px] text-timberWolf font-bold font-beckman
                            py-3 px-5 rounded-[10px] bg-jetLight
                            hover:bg-battleGray hover:text-eerieBlack
                            transition duration-200 ease-in-out whitespace-nowrap"
                            onClick={handleDownload}
                            onMouseOver={() => {
                                downloadBtnRef.current?.setAttribute('src', downloadHover)
                            }}
                            onMouseOut={() => {
                                downloadBtnRef.current?.setAttribute('src', download)
                            }}
                        >
                            MY RESUME
                            <img
                                src={download}
                                alt="download"
                                ref={downloadBtnRef}
                                className="w-[20px] h-[20px] object-contain"
                            />
                        </button>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, 'work')
