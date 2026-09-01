/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { github, pineapple, pineappleHover } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant, staggerContainer } from '../utils/motion'
import useMediaQuery from '../hooks/useMediaQuery'

// Max cards per accordion row on desktop. Rows are balanced rather than
// greedy, so 5 projects render as 3 + 2 instead of a ragged 4 + 1.
const ROW_MAX = 4

const chunkIntoRows = (items, max = ROW_MAX) => {
    if (!items.length) return []
    const rowCount = Math.ceil(items.length / max)
    const perRow = Math.ceil(items.length / rowCount)
    const rows = []
    for (let i = 0; i < items.length; i += perRow) {
        rows.push(items.slice(i, i + perRow))
    }
    return rows
}

const RepoLink = ({ repo, name }) => (
    <a
        href={repo}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        aria-label={`View the source code for ${name} on GitHub`}
        className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full shrink-0
        flex justify-center items-center cursor-pointer opacity-[0.85]
        hover:opacity-100 transition-opacity duration-200 live-demo"
    >
        <img src={github} alt="" aria-hidden="true" className="w-4/5 h-4/5 object-contain" />
    </a>
)

const DemoLink = ({ demo, name }) => {
    const pineappleBtnRef = useRef(null)

    return (
        <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Open the live demo of ${name} in a new tab`}
            className="live-demo flex justify-center
            sm:text-[16px] text-[14px] text-timberWolf
            font-bold font-beckman items-center py-3 pl-2 pr-3
            whitespace-nowrap gap-1 sm:w-[138px] w-[125px]
            sm:h-[50px] h-[46px] rounded-[10px] glassmorphism
            hover:bg-battleGray hover:text-eerieBlack
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => pineappleBtnRef.current?.setAttribute('src', pineappleHover)}
            onMouseOut={() => pineappleBtnRef.current?.setAttribute('src', pineapple)}
        >
            <img
                src={pineapple}
                alt=""
                aria-hidden="true"
                className="btn-icon sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] object-contain"
                ref={pineappleBtnRef}
            />
            LIVE DEMO
        </a>
    )
}

/**
 * Desktop card. Collapsed cards show a vertical title; the active card in each
 * row expands to reveal the description and actions. `overflow-hidden` plus
 * `min-w-0` on the root guarantee nothing can render outside the card, however
 * narrow it gets.
 */
const AccordionCard = ({ name, description, image, repo, demo, indexInRow, isActive, onSelect }) => (
    <motion.div
        layout
        variants={fadeIn('right', 'spring', indexInRow * 0.15, 0.75)}
        role="button"
        tabIndex={0}
        aria-expanded={isActive}
        aria-label={isActive ? name : `Show details for ${name}`}
        onClick={onSelect}
        onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onSelect()
            }
        }}
        className={`group relative ${isActive ? 'flex-[3.5]' : 'flex-[0.6]'}
        min-w-0 lg:min-w-[110px] overflow-hidden h-[420px]
        flex items-center justify-center cursor-pointer
        card-shadow rounded-[24px] focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-timberWolf focus-visible:ring-offset-2
        focus-visible:ring-offset-night`}
    >
        <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
        />

        {isActive ? (
            <>
                <div
                    className="absolute inset-0 bg-gradient-to-t
                    from-[rgba(10,10,10,0.92)] via-[rgba(10,10,10,0.35)] to-transparent"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col z-20">
                    <div className="flex items-start justify-between gap-3">
                        <h3
                            className="font-bold sm:text-[30px] text-[24px] text-timberWolf
                            uppercase font-beckman leading-tight min-w-0 break-words"
                        >
                            {name}
                        </h3>
                        {repo && <RepoLink repo={repo} name={name} />}
                    </div>
                    <p
                        className="text-silver sm:text-[14px] text-[12px] mt-2
                        max-w-3xl sm:leading-[24px] leading-[18px]
                        font-poppins tracking-[1px] line-clamp-3"
                    >
                        {description}
                    </p>
                    {demo && (
                        <div className="mt-5">
                            <DemoLink demo={demo} name={name} />
                        </div>
                    )}
                </div>
            </>
        ) : (
            <>
                <div
                    className="absolute inset-0 bg-[rgba(20,20,20,0.6)]
                    group-hover:bg-[rgba(20,20,20,0.4)] transition-colors duration-300"
                />
                <h3
                    className="vertical-title z-20 px-2 max-h-[calc(100%-3rem)]
                    font-extrabold font-beckman uppercase text-timberWolf
                    tracking-[1px] text-[22px] leading-none"
                >
                    {name}
                </h3>
            </>
        )}
    </motion.div>
)

/**
 * Mobile card. No accordion: the image sits above the content and every project
 * shows its full description, so height is driven by content and nothing gets
 * squeezed as the project list grows.
 */
const StackedCard = ({ name, description, image, repo, demo, index }) => (
    <motion.article
        variants={fadeIn('up', 'spring', Math.min(index, 3) * 0.12, 0.7)}
        className="bg-eerieBlack rounded-[24px] overflow-hidden card-shadow flex flex-col"
    >
        <div className="relative w-full aspect-[16/10] bg-jet overflow-hidden">
            <img
                src={image}
                alt={`Screenshot of ${name}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>

        <div className="p-6 flex flex-col gap-3">
            <h3
                className="font-bold text-[24px] text-timberWolf uppercase
                font-beckman leading-tight break-words"
            >
                {name}
            </h3>
            <p className="text-silver text-[13px] leading-[22px] font-poppins tracking-[0.5px]">
                {description}
            </p>
            <div className="flex items-center gap-3 mt-2">
                {demo && <DemoLink demo={demo} name={name} />}
                {repo && <RepoLink repo={repo} name={name} />}
            </div>
        </div>
    </motion.article>
)

const Projects = () => {
    const isDesktop = useMediaQuery('(min-width: 1025px)')
    const rows = useMemo(() => chunkIntoRows(projects), [])

    // Active card is tracked per row, by position within that row. Indices
    // rather than ids means a duplicate id in the data can never expand two
    // cards at once, and every row always keeps exactly one card expanded.
    const [activeByRow, setActiveByRow] = useState({})
    const activeInRow = (rowIndex) => activeByRow[rowIndex] ?? 0

    return (
        <div>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Case Studies</p>
                <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
                >
                    These projects serve as a tangible demonstration of my technical expertise,
                    showcasing my ability to tackle complex challenges and adapt to various
                    technologies. They reflect my efficient project management skills, as evidenced
                    by the complete and documented projects. Each project includes brief
                    descriptions for context, along with code repositories and live demos for
                    further exploration.
                </motion.p>
            </div>

            <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 'some' }}
                className={`${styles.innerWidth} mx-auto mt-[50px] flex flex-col gap-5`}
            >
                {isDesktop
                    ? rows.map((row, rowIndex) => (
                          <div key={`row-${rowIndex}`} className="flex flex-row gap-5">
                              {row.map((project, indexInRow) => (
                                  <AccordionCard
                                      key={project.id}
                                      {...project}
                                      indexInRow={indexInRow}
                                      isActive={activeInRow(rowIndex) === indexInRow}
                                      onSelect={() =>
                                          setActiveByRow((prev) => ({
                                              ...prev,
                                              [rowIndex]: indexInRow,
                                          }))
                                      }
                                  />
                              ))}
                          </div>
                      ))
                    : projects.map((project, index) => (
                          <StackedCard key={project.id} index={index} {...project} />
                      ))}
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Projects, 'projects')
