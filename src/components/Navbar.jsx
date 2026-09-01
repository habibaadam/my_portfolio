import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { close, menu } from '../assets'

const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)

    // Keep the highlighted link in sync with what's actually on screen —
    // previously `active` only changed on click, so it went stale on scroll.
    useEffect(() => {
        // The id lives on a tiny anchor span, so observe its enclosing section —
        // otherwise the observer band only catches the span in passing.
        const sections = navLinks
            .map((nav) => {
                const anchor = document.getElementById(nav.id)
                const section = anchor?.closest('section') ?? anchor
                if (section) section.dataset.navId = nav.id
                return section
            })
            .filter(Boolean)

        if (!sections.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

                if (visible) setActive(visible.target.dataset.navId)
            },
            { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    // The overlay covers the viewport, so stop the page scrolling behind it.
    useEffect(() => {
        if (!toggle) return

        const previous = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        const onKeyDown = (e) => {
            if (e.key === 'Escape') setToggle(false)
        }
        window.addEventListener('keydown', onKeyDown)

        return () => {
            document.body.style.overflow = previous
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [toggle])

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-2 fixed
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] min-h-[68px]`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('')
                        window.scrollTo(0, 0)
                    }}
                >
                    <span className="font-mova font-extrabold text-eerieBlack uppercase tracking-[3px] text-[22px]">
                        Habiba
                    </span>
                </Link>
                <ul className="list-none hidden sm:flex flex-row lg:gap-14 gap-8 mt-2">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.id ? 'text-french' : 'text-eerieBlack'
                            } hover:text-taupe lg:text-[21px] text-[18px] font-medium font-mova
                uppercase tracking-[3px] cursor-pointer nav-links`}
                            onClick={() => setActive(nav.id)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                {/* mobile */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    {!toggle && (
                        <button
                            type="button"
                            aria-label="Open navigation menu"
                            aria-expanded={false}
                            aria-controls="mobile-menu"
                            onClick={() => setToggle(true)}
                            className="live-demo"
                        >
                            <img
                                src={menu}
                                alt=""
                                aria-hidden="true"
                                className="w-[34px] h-[34px] object-contain cursor-pointer"
                            />
                        </button>
                    )}

                    {/* Kept mounted so it can transition both ways; `menu-close`
                        sets visibility:hidden, keeping it out of the tab order. */}
                    <div
                        id="mobile-menu"
                        aria-hidden={!toggle}
                        className={`p-6 bg-flashWhite absolute top-0 left-0 w-full
                h-[100dvh] z-10 menu ${toggle ? 'menu-open' : 'menu-close'}`}
                    >
                        <div className="flex justify-end">
                            <button
                                type="button"
                                aria-label="Close navigation menu"
                                onClick={() => setToggle(false)}
                                className="live-demo"
                            >
                                <img
                                    src={close}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-[22px] h-[22px] object-contain cursor-pointer"
                                />
                            </button>
                        </div>
                        <ul
                            className="list-none flex flex-col gap-2
                items-start justify-end mt-[8rem]"
                        >
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`${
                                        active === nav.id ? 'text-french' : 'text-eerieBlack'
                                    } font-bold font-arenq uppercase tracking-[1px]
                      cursor-pointer leading-none break-words max-w-full
                      text-[clamp(48px,16vw,88px)]`}
                                    onClick={() => {
                                        setToggle(false)
                                        setActive(nav.id)
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
