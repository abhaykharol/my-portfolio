import myphoto from "./myPhoto.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import weatherImg from "./assets/weather.png";
import calculatorImg from "./assets/calculator.png";
import blinkitImg from "./assets/blinkit.png";
// import { FaBars } from "react-icons/fa";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative bg-[#070b14] text-white min-h-screen overflow-x-hidden font-sans">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Glow Effect */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[150px] rounded-full"></div>

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-black tracking-tight">
            Abhay<span className="text-cyan-400">.</span>
          </h1>

          <ul className="hidden md:flex items-center gap-10 text-gray-300">
            <li>
              <a
                href="#home"
                className="relative hover:text-cyan-400 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cyan-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="relative hover:text-cyan-400 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cyan-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="relative hover:text-cyan-400 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cyan-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#home"
                className="relative hover:text-cyan-400 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cyan-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer flex flex-col gap-1.5"
          >

            <span className="w-8 h-[2px] bg-white rounded-full"></span>

            <span className="w-5 h-[2px] bg-cyan-400 rounded-full"></span>

          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="md:hidden px-6 pb-6 origin-top"
            >
              <div className="bg-[#070b14]/90 border border-white/10 rounded-3xl p-6 flex flex-col gap-5 text-gray-300 backdrop-blur-2xl shadow-[0_20px_80px_rgba(34,211,238,0.12)]">
                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  About
                </a>

                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>


      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-32">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10">
              ✦ Frontend Developer & React Learner
            </div>

            <h1 className="text-7xl md:text-[120px] font-black leading-none tracking-tight">
              Abhay
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Chouhan
              </span>
            </h1>

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "Creative UI Designer",
                2000,
                "JavaScript Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block mt-8 text-2xl text-cyan-300 font-semibold"
            />

            <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
              I create modern, animated and high-performance web experiences
              with React, Tailwind CSS and modern frontend technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <button className="group bg-cyan-400 text-black px-8 py-4 rounded-full font-bold hover:scale-110 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition duration-300 flex items-center gap-3">
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </button>

              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition duration-300 font-semibold">
                Download CV
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-12 text-2xl text-gray-400">
              <FaGithub className="hover:text-cyan-400 hover:scale-125 cursor-pointer transition duration-300" />

              <FaLinkedin className="hover:text-cyan-400 hover:scale-125 cursor-pointer transition duration-300" />

              <FaInstagram className="hover:text-cyan-400 hover:scale-125 cursor-pointer transition duration-300" />
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute top-20 -left-16 bg-white/5 border border-white/10 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-xl z-10">
                <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>

              <div className="absolute bottom-10 -right-10 bg-white/5 border border-white/10 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-xl z-10">
                <h3 className="text-3xl font-bold text-cyan-400">1+</h3>
                <p className="text-gray-400 text-sm">Years Learning</p>
              </div>

              <div className="absolute inset-0 bg-cyan-500 blur-[140px] opacity-20 rounded-full"></div>

              <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20"></div>

                <img
                  src={myphoto}
                  alt="Abhay Chouhan"
                  className="relative z-10 w-full h-full object-cover object-top scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/40 to-transparent z-20"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-black mb-8"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <p className="text-gray-400 text-lg leading-9 max-w-4xl">
          I am passionate about creating premium user interfaces and modern
          web experiences. I enjoy building responsive websites with clean
          design, smooth animations and interactive UI using React,
          JavaScript and Tailwind CSS.
        </p>

      </section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-5xl font-black text-center mb-16">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "GitHub",
            "Responsive Design",
          ].map((skill) => (

            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl hover:border-cyan-400/50 transition duration-300"
            >
              <h3 className="text-2xl font-bold">{skill}</h3>
            </motion.div>

          ))}
        </div>
      </section >

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24"
      >t
        <h2 className="text-5xl font-black text-center mb-16">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Weather App",
              desc: "Modern responsive weather application with API integration.",
              image: weatherImg,
              github: "https://github.com/",
              live: "https://your-demo-link.com",
            },
            {
              title: "Portfolio Website",
              desc: "Premium animated developer portfolio built using React.",
              image: calculatorImg,
              github: "https://github.com/",
              live: "https://your-demo-link.com",
            },
            {
              title: "Blinkit Clone",
              desc: "Frontend UI clone with responsive modern design.",
              image: blinkitImg,
              github: "https://github.com/",
              live: "https://your-demo-link.com",
            },
          ].map((project) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={project.title}
              className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden backdrop-blur-xl hover:border-cyan-400/40 transition duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-8">{project.desc}</p>

                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-full bg-cyan-400 text-black hover:scale-105 transition duration-300"
                  >
                    Live Demo
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section >

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-32 max-w-7xl mx-auto px-6 pb-24"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-xl">

          <div>
            <h2 className="text-5xl font-black mb-6">
              Let's Build <span className="text-cyan-400">Together</span>
            </h2>

            <p className="text-gray-400 text-lg leading-8 mb-8">
              Have a project idea, collaboration request, or opportunity?
              Send me a message and let's connect.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>Email: abhaykharol9116@gmail.com</p>
              <p>Location: Jaipur, Rajasthan, India</p>
            </div>
          </div>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition resize-none"
            ></textarea>

            <button
              type="button"
              className="w-full bg-cyan-400 text-black py-4 rounded-2xl font-bold hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-white/10 py-10 mt-20">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <h1 className="text-2xl font-black">
            Abhay<span className="text-cyan-400">.</span>
          </h1>

          <p className="text-gray-500 text-center">
            © 2026 Abhay Chouhan. Crafted with React & Tailwind CSS.
          </p>

          <div className="flex gap-5 text-xl text-gray-400">

            <FaGithub className="hover:text-cyan-400 hover:scale-125 transition duration-300 cursor-pointer" />

            <FaLinkedin className="hover:text-cyan-400 hover:scale-125 transition duration-300 cursor-pointer" />

            <FaInstagram className="hover:text-cyan-400 hover:scale-125 transition duration-300 cursor-pointer" />

          </div>

        </div>

      </footer>
    </div >
  );
}
