import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn } from '../utils/motion'
import { send, sendHover } from '../assets'

const Toast = ({ message, type, onDismiss }) => (
    <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4
            rounded-xl shadow-2xl font-poppins text-[14px] font-medium max-w-[320px]
            ${
                type === 'success'
                    ? 'bg-jet border border-[rgba(153,153,161,0.25)] text-timberWolf'
                    : 'bg-eerieBlack border border-[rgba(180,50,50,0.35)] text-[#f87171]'
            }`}
    >
        <span
            className={`text-[18px] leading-none ${type === 'success' ? 'text-[#86efac]' : 'text-[#f87171]'}`}
        >
            {type === 'success' ? '✓' : '✕'}
        </span>
        <span className="flex-1">{message}</span>
        <button
            onClick={onDismiss}
            className="text-taupe hover:text-timberWolf transition-colors ml-1 text-[18px] leading-none"
            aria-label="Dismiss"
        >
            ×
        </button>
    </motion.div>
)

const Contact = () => {
    const formRef = useRef()
    const sendBtnRef = useRef()
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState(null)

    const showToast = (message, type) => {
        setToast({ message, type })
        setTimeout(() => setToast(null), 4500)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Habiba',
                    from_email: form.email,
                    to_email: 'habiepalmer@gmail.com',
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false)
                    showToast("Message sent! I'll get back to you soon :)", 'success')
                    setForm({ name: '', email: '', message: '' })
                },
                (error) => {
                    setLoading(false)
                    console.error(error)
                    showToast('Something went wrong. Please try again.', 'error')
                }
            )
    }

    return (
        <>
            <AnimatePresence>
                {toast && (
                    <Toast
                        key="toast"
                        message={toast.message}
                        type={toast.type}
                        onDismiss={() => setToast(null)}
                    />
                )}
            </AnimatePresence>

            <div className="-mt-[8rem]">
                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 0.8)}
                    className="max-w-2xl mx-auto"
                >
                    <div className="mb-8">
                        <p className={styles.sectionSubText}>Get in touch</p>
                        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
                        <p className="mt-3 text-taupe text-[15px] font-poppins leading-[26px] max-w-lg">
                            Have a project in mind, a question, or just want to connect? Drop me a
                            message and I&apos;ll get back to you.
                        </p>
                    </div>

                    <div className="bg-jet rounded-2xl p-8 sm:p-10">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 font-poppins"
                        >
                            <div className="flex flex-col sm:flex-row gap-5">
                                <label className="flex flex-col flex-1">
                                    <span className="text-taupe text-[11px] uppercase tracking-widest font-semibold mb-2">
                                        Name
                                    </span>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className="bg-eerieBlack py-3 px-5
                                        placeholder:text-[#4a4a4a]
                                        text-timberWolf rounded-lg outline-none
                                        border border-transparent
                                        focus:border-[rgba(153,153,161,0.4)]
                                        transition-colors duration-200 text-[15px]"
                                    />
                                </label>
                                <label className="flex flex-col flex-1">
                                    <span className="text-taupe text-[11px] uppercase tracking-widest font-semibold mb-2">
                                        Email
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                        className="bg-eerieBlack py-3 px-5
                                        placeholder:text-[#4a4a4a]
                                        text-timberWolf rounded-lg outline-none
                                        border border-transparent
                                        focus:border-[rgba(153,153,161,0.4)]
                                        transition-colors duration-200 text-[15px]"
                                    />
                                </label>
                            </div>

                            <label className="flex flex-col">
                                <span className="text-taupe text-[11px] uppercase tracking-widest font-semibold mb-2">
                                    Message
                                </span>
                                <textarea
                                    rows="6"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="What's on your mind?"
                                    required
                                    className="bg-eerieBlack py-3 px-5
                                    placeholder:text-[#4a4a4a]
                                    text-timberWolf rounded-lg outline-none
                                    border border-transparent
                                    focus:border-[rgba(153,153,161,0.4)]
                                    transition-colors duration-200 resize-none text-[15px]"
                                />
                            </label>

                            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mt-1">
                                <p className="text-taupe text-[12px] font-poppins">
                                    Typically responds within 24–48 hours.
                                </p>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="live-demo flex items-center justify-center gap-3
                                    text-[15px] text-timberWolf font-bold font-beckman
                                    py-3 px-7 rounded-[10px] bg-night
                                    hover:bg-battleGray hover:text-eerieBlack
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                    transition duration-200 ease-in-out whitespace-nowrap self-end sm:self-auto"
                                    onMouseOver={() =>
                                        sendBtnRef.current?.setAttribute('src', sendHover)
                                    }
                                    onMouseOut={() => sendBtnRef.current?.setAttribute('src', send)}
                                >
                                    {loading ? 'Sending...' : 'Send'}
                                    <img
                                        ref={sendBtnRef}
                                        src={send}
                                        alt="send"
                                        className="w-[20px] h-[20px] object-contain"
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default SectionWrapper(Contact, 'contact')
