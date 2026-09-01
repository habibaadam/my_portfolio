import { motion } from 'framer-motion'
import { styles } from '../styles'
import { bwmap, worldmap } from '../assets'

const Hero = () => {
    return (
        <>
            <div className="absolute top-0 left-0 z-0 h-[100svh] w-full overflow-hidden">
                <img
                    src={bwmap}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                    className="w-full h-full sm:block hidden object-cover"
                />
                <img
                    src={worldmap}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                    className="w-full h-full sm:hidden block object-cover"
                />
            </div>
            <section
                className="relative flex sm:flex-row flex-col w-full h-[100svh] mx-auto
        sm:bg-hero bg-hero-mobile overflow-hidden"
            >
                <div
                    className={`absolute inset-x-0 top-0 h-[82%] items-center pt-[72px]
          sm:h-auto sm:inset-0 sm:top-[250px] sm:items-start sm:pt-0
          lg:top-[150px] xl:top-[250px] ${styles.paddingX}
          max-w-7xl mx-auto flex flex-row gap-3`}
                >
                    <div className="flex flex-col justify-center items-center mt-5 ml-3">
                        <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
                        <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
                    </div>

                    {/* Ceiling keeps the copy clear of the dark half at every width.
                        Without it the <p> was unbounded and ran into the dark. */}
                    <div className="min-w-0 sm:max-w-[50%]">
                        <h1
                            className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
                        >
                            Hi, I'm{' '}
                            <span
                                className="sm:text-dim sm:text-[90px]
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase"
                            >
                                Habiba
                            </span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-eerieBlack text-balance`}>
                            Full-Stack Engineer · Backend Specialist
                            <br />
                            AWS Certified Solutions Architect &amp; Security Specialty
                            <br />
                            AWS Community Builder
                        </p>
                    </div>
                </div>

                <div
                    className="absolute bottom-10 w-full
          flex justify-center items-center"
                >
                    <a href="#about" aria-label="Scroll to the about section">
                        <div
                            className="w-[35px] h-[64px] rounded-3xl border-4
            border-french border-dim flex
            justify-center items-start p-2"
                        >
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                }}
                                className="w-3 h-3 rounded-full bg-taupe mb-1"
                            />
                        </div>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Hero
