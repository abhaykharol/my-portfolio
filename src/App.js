import myphoto from "./myPhoto.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import weatherImg from "./assets/weather.png";
import PortfolioImg from "./assets/Portfolio.png";
import blinkitImg from "./assets/blinkit.png";
// import { FaBars } from "react-icons/fa";


export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <>

      <div
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-0 blur-[120px] opacity-20 bg-cyan-400 transition duration-100"
        style={{
          transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
        }}
      ></div>


      <div className="relative bg-[#070b14] text-white min-h-[100vh] overflow-x-hidden font-sans">


        {/* Grid Background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[150px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[150px] rounded-full"></div>

        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>
        </div>

        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5">
          <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full border border-white/10 bg-black/20 backdrop-blur-2xl backdrop-saturate-150 px-6 py-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <h1 className="text-2xl font-black tracking-tight">
              Abhay<span className="text-cyan-400">.</span>
            </h1>

            <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold hover:scale-105 transition"
            >
              Hire Me <FaArrowRight />
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section
          id="home"
          className="relative min-h-screen px-6 pt-32 overflow-hidden flex items-center"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

            <h1 className="text-[180px] md:text-[320px] font-black text-white/[0.02] tracking-[-0.1em] leading-none select-none">
              ABHAY
            </h1>

          </div>
          <div className="absolute inset-0 bg-[#05070d]"></div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.12),transparent_35%)]"></div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px] opacity-40"></div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 mb-8">
                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]"></span>
                <span className="text-sm text-gray-300">Available for frontend work</span>
              </div>

              <h1 className="text-[58px] md:text-[92px] xl:text-[118px] font-black leading-[0.88] tracking-[-0.08em]">
                Building
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-400">
                  Digital
                </span>
                <br />
                Interfaces
              </h1>

              <div className="mt-8 h-10 text-xl md:text-2xl text-cyan-300 font-semibold">
                <TypeAnimation
                  sequence={[
                    "React Developer",
                    1600,
                    "Frontend Developer",
                    1600,
                    "UI Experience Builder",
                    1600,
                    "Responsive Web Creator",
                    1600,
                  ]}
                  speed={45}
                  repeat={Infinity}
                />
              </div>

              <p className="mt-8 max-w-2xl text-gray-400 text-lg leading-8">
                I design and build modern web interfaces with clean layout, smooth
                animation, responsive structure and strong visual identity.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://my-portfolio-pcau.vercel.app"
                  className="group bg-cyan-400 text-black px-7 py-4 rounded-full font-black flex items-center gap-3 hover:scale-105 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)] transition"
                >
                  View Projects
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </a>

                <a
                  href="#contact"
                  className="border border-white/10 bg-white/5 px-7 py-4 rounded-full font-bold hover:bg-white hover:text-black transition"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-14 grid grid-cols-3 max-w-xl border border-white/10 rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-xl">
                {[
                  ["10+", "Projects"],
                  ["React", "Focus"],
                  ["100%", "Responsive"],
                ].map(([num, label]) => (
                  <div key={label} className="p-5 border-r border-white/10 last:border-r-0">
                    <h3 className="text-2xl font-black">{num}</h3>
                    <p className="text-sm text-gray-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[60px] bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-transparent blur-3xl"></div>

              <div className="relative rounded-[44px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
                <div className="rounded-[34px] overflow-hidden">
                  <img
                    src={myphoto}
                    alt="Abhay Chouhan"
                    className="w-full h-[560px] object-cover object-top grayscale contrast-125 brightness-90 hover:grayscale-0 hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="absolute -left-6 top-16 rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl p-5 shadow-2xl">
                  <p className="text-gray-400 text-sm">Specialized in</p>
                  <h3 className="text-xl font-black text-white">React UI</h3>
                </div>

                <div className="absolute -right-6 bottom-20 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl p-5 shadow-2xl">
                  <p className="text-gray-300 text-sm">Design Style</p>
                  <h3 className="text-xl font-black text-cyan-300">Premium</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </section>



        {/* ABOUT */}
        <section
          id="about"
          className="relative max-w-7xl mx-auto px-6 py-32"
        >

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs mb-5">
                About Me
              </p>

              <h2 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-[-0.05em]">
                Creating
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                  Modern
                </span>

                <br />
                Digital
                <br />
                Experiences
              </h2>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <p className="text-gray-400 text-lg leading-9">
                I’m a frontend developer passionate about building modern,
                interactive and visually premium web experiences using
                React, Tailwind CSS and smooth UI animation systems.

                I enjoy transforming ideas into responsive interfaces
                with clean structure, modern typography and immersive
                user interaction.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-12">

                <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
                  <h3 className="text-4xl font-black text-cyan-300">
                    10+
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Frontend Projects Built
                  </p>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
                  <h3 className="text-4xl font-black text-cyan-300">
                    React
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Main Development Stack
                  </p>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
                  <h3 className="text-4xl font-black text-cyan-300">
                    UI
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Premium Interface Focus
                  </p>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl">
                  <h3 className="text-4xl font-black text-cyan-300">
                    100%
                  </h3>

                  <p className="text-gray-400 mt-3">
                    Responsive Layouts
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </section>

        {/* SKILLS */}
        <section className="relative max-w-7xl mx-auto px-6 py-32">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >

            <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs mb-5">
              Expertise
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em]">
              Skills &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                {" "}Tools
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8 text-lg">
              Technologies and modern frontend tools I use to create
              smooth, responsive and premium web experiences.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

            {[
              {
                title: "Frontend",
                skills: ["HTML", "CSS", "JavaScript", "React"],
              },

              {
                title: "Styling",
                skills: ["Tailwind CSS", "Responsive UI", "Animations"],
              },

              {
                title: "Tools",
                skills: ["GitHub", "VS Code", "Figma"],
              },

              {
                title: "Learning",
                skills: ["Next.js", "UI/UX", "Advanced React"],
              },

            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 to-purple-500/10"></div>

                {/* Blur Orb */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full"></div>

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 mb-8"></div>

                  <h3 className="text-3xl font-black mb-8">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {item.skills.map((skill) => (

                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full border border-white/10 bg-black/20 text-gray-300 hover:text-white hover:border-cyan-400/40 transition"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="relative max-w-7xl mx-auto px-6 py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs mb-5">
              Selected Work
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em] leading-none">
              Featured
              <br />
              Projects
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-7">

            {/* BIG CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative lg:col-span-7 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative h-[650px] overflow-hidden">

                <img
                  src={blinkitImg}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <div className="absolute top-6 left-6 flex gap-3">

                  <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-sm">
                    React
                  </span>

                  <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-sm">
                    Tailwind
                  </span>

                </div>

                <div className="absolute bottom-8 left-8 right-8">

                  <p className="text-cyan-300 text-sm mb-3 uppercase tracking-[0.3em]">
                    Ecommerce UI
                  </p>

                  <h3 className="text-5xl font-black leading-none">
                    Blinkit
                    <br />
                    Clone
                  </h3>

                  <p className="text-gray-300 mt-5 max-w-xl leading-8">
                    Premium frontend ecommerce experience with responsive
                    product layouts, modern interactions and clean UI system.
                  </p>

                  <div className="flex gap-4 mt-8">

                    <a
                      href="https://my-portfolio-pcau.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"
                    >
                      Live Preview
                    </a>

                    <a
                      href="https://github.com/abhaykharol"
                      target="_blank"
                      rel="noreferrer"
                      className="border border-white/10 bg-white/5 px-6 py-3 rounded-full hover:border-cyan-400/40 transition"
                    >
                      GitHub
                    </a>

                  </div>

                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-5 flex flex-col gap-7">

              {/* CARD 1 */}
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04]"
              >
                <div className="h-[310px] overflow-hidden relative">

                  <img
                    src={weatherImg}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6">

                    <h3 className="text-3xl font-black">
                      Weather App
                    </h3>

                    <p className="text-gray-300 mt-3">
                      Real-time API based weather platform with responsive UI.
                    </p>

                  </div>

                </div>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04]"
              >
                <div className="h-[310px] overflow-hidden relative">

                  <img
                    src={PortfolioImg}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6">

                    <h3 className="text-3xl font-black">
                      Portfolio Website
                    </h3>

                    <p className="text-gray-300 mt-3">
                      Modern, animated and responsive portfolio website designed to showcase skills, projects and frontend development work.
                    </p>

                  </div>

                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative max-w-7xl mx-auto px-6 py-32"
        >

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >

            <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs mb-5">
              Contact
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-[-0.05em]">
              Let’s Work
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                {" "}Together
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8 text-lg">
              Have a project idea or frontend opportunity?
              Let’s connect and build something modern together.
            </p>

          </motion.div>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">

            {/* LEFT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl relative overflow-hidden"
            >

              <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-400/10 blur-3xl rounded-full"></div>

              <div className="relative z-10">

                <h3 className="text-4xl font-black leading-tight">
                  Ready To Build
                  <br />
                  Something Great?
                </h3>

                <p className="text-gray-400 leading-8 mt-6">
                  I’m available for frontend projects,
                  UI design work and modern web experiences.
                </p>

                <div className="space-y-5 mt-12">

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-gray-500 text-sm mb-1">
                      Email
                    </p>

                    <h4 className="text-lg font-semibold">
                      abhaykharol9116@gmail.com
                    </h4>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-gray-500 text-sm mb-1">
                      Location
                    </p>

                    <h4 className="text-lg font-semibold">
                      Jaipur , Rajasthan ( 302018 )
                    </h4>
                  </div>

                </div>

              </div>

            </motion.div>

            {/* FORM */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl"
            >

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-16 rounded-2xl border border-white/10 bg-black/20 px-6 outline-none focus:border-cyan-400 transition"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-16 rounded-2xl border border-white/10 bg-black/20 px-6 outline-none focus:border-cyan-400 transition"
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full h-16 rounded-2xl border border-white/10 bg-black/20 px-6 outline-none focus:border-cyan-400 transition mt-5"
              />

              <textarea
                rows="7"
                placeholder="Write your message..."
                className="w-full rounded-2xl border border-white/10 bg-black/20 p-6 outline-none focus:border-cyan-400 transition mt-5 resize-none"
              ></textarea>

              <button
                type="submit"
                className="mt-6 w-full h-16 rounded-2xl bg-cyan-400 text-black font-black text-lg hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition duration-300"
              >
                Send Message
              </button>

            </motion.form>

          </div>

        </section>

        {/* FLOATING SOCIALS */}
        <div className="fixed left-6 bottom-6 z-50 hidden md:flex flex-col gap-4">

          <a
            href="https://github.com/abhaykharol"
            target="_blank"
            rel="noreferrer"

            className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-xl hover:scale-110 hover:text-cyan-300 hover:border-cyan-400/40 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/abhay-kharol-541970327/"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-xl hover:scale-110 hover:text-cyan-300 hover:border-cyan-400/40 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/chouhan_abhay_/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-xl hover:scale-110 hover:text-cyan-300 hover:border-cyan-400/40 transition duration-300"
          >
            <FaInstagram />
          </a>

        </div>


        {/* FOOTER */}
        <footer className="relative border-t border-white/10">

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">

            <div>

              <h2 className="text-4xl font-black tracking-tight">
                Abhay<span className="text-cyan-400">.</span>
              </h2>

              <p className="text-gray-500 mt-4 max-w-md leading-7">
                Frontend developer focused on crafting modern,
                responsive and premium digital experiences.
              </p>

            </div>

            <div className="flex gap-5">

              <a
                href="#home"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </a>

              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </a>

            </div>

            <p className="text-gray-500 text-sm">
              © 2026 Abhay Chouhan
            </p>

          </div>

        </footer>
      </div>

    </>
  );
}
