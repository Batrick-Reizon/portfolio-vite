import React, { useState } from "react"
import { FaLinkedin, FaGreaterThan } from "react-icons/fa6"
import { FaInstagram, FaGithub, FaRegFileAlt, FaFileDownload, FaMapMarkerAlt } from "react-icons/fa"
import { IoPersonOutline, IoHomeOutline, IoClose } from "react-icons/io5"
import { GrGallery } from "react-icons/gr"
import { MdOutlineContactPhone } from "react-icons/md"
import { LuMenu } from "react-icons/lu"
import Navbarimage from "./asset/NavbarImage.jpg"
import Profilepicture from "./asset/ProfilePicture.jpg"
import { Typewriter } from "react-simple-typewriter"
import Aboutimage from "./asset/AboutImage.jpg"
import Resume from "./Resume/brresume.pdf"
import { BiSolidPhoneCall } from "react-icons/bi"
import { MdEmail } from "react-icons/md"
import Airbnb from "./asset/Airbnb.png"
import Tripadvisor from "./asset/Tripadvisor.png"
import Udemy from "./asset/Udemy.png"
import Greenden from "./asset/Greenden.png"
import Nostra from "./asset/Nostra.png"
import Random from "./asset/Random.png"
import Weather from "./asset/Weather.png"
import Actodo from "./asset/Actodo.png"
import Movies from "./asset/Movies.png"
import Todo from "./asset/Todo.png"
import Bulkmail from "./asset/Bulkmail.png"
import Blog from "./asset/Blog.png"

function App() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [Message, setMessage] = useState()
  const [click, setClick] = useState(false)

  const handleHello = () => {
    alert("Hello! Welcome to my Portfolio")
  }
  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleSubject = (event) => {
    setSubject(event.target.value)
  }
  const handleMessage = (event) => {
    setMessage(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    alert("Message Send Successfully. Thank You:)")
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  return (<div className="flex">
    <div className="bg-linear-to-t from-yellow-950 via-yellow-600 to-yellow-300 md:w-[25%] lg:w-1/5 h-screen fixed top-0 md:py-5 flex-col md:justify-between lg:justify-center hidden md:flex">

      {/* Profile */}
      <div className="flex justify-center py-5">
        <img src={Navbarimage} alt="Profile-Image" className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-8 border-gray-700 hover:border-blue-500 transition-all ease-in-out duration-1000 cursor-pointer object-cover" />
      </div>
      <h3 className="text-white md:text-xl lg:text-2xl font-black text-center">Batrick Reizon</h3>

      {/* Social Media */}
      <div className="text-white flex justify-center gap-3 text-xl py-5">
        <a href="https://www.linkedin.com/in/batrick-reizon/" target="blank" className="bg-black border-8 border-gray-700 rounded-full hover:border-blue-500 transition-all duration-300"><FaLinkedin></FaLinkedin></a>
        <a href="https://github.com/Batrick-Reizon" target="blank" className="bg-black border-8 border-gray-700 rounded-full hover:border-blue-500 transition-all duration-300"><FaGithub></FaGithub></a>
        <a href="https://www.instagram.com/itz.reizon_03/" target="blank" className="bg-black border-8 border-gray-700 rounded-full hover:border-blue-500 transition-all duration-300"><FaInstagram></FaInstagram></a>
      </div>

      {/* Navigation Menu */}
      <nav className="text-white py-3 px-5 lg:px-10">
        <a href="#home" className="group flex items-center gap-2 text-gray-300 text-lg lg:text-xl cursor-pointer w-fit hover:text-white"><IoHomeOutline className="group-hover:text-blue-400"></IoHomeOutline>Home</a>
        <a href="#about" className="group flex items-center gap-2 text-gray-300 text-lg lg:text-xl cursor-pointer w-fit hover:text-white my-3"><IoPersonOutline className="group-hover:text-blue-400"></IoPersonOutline>About</a>
        <a href="#resume" className="group flex items-center gap-2 text-gray-300 text-lg lg:text-xl cursor-pointer w-fit hover:text-white my-3"><FaRegFileAlt className="group-hover:text-blue-400"></FaRegFileAlt>Resume</a>
        <a href="#portfolio" className="group flex items-center gap-2 text-gray-300 text-lg lg:text-xl cursor-pointer w-fit hover:text-white my-3"><GrGallery className="group-hover:text-blue-400"></GrGallery>Portfolio</a>
        <a href="#contact" className="group flex items-center gap-2 text-gray-300 text-lg lg:text-xl cursor-pointer w-fit hover:text-white"><MdOutlineContactPhone className="group-hover:text-blue-400"></MdOutlineContactPhone>Contact</a>
      </nav>

      <div className="my-3 flex justify-center">
        <button onClick={handleHello} className="bg-blue-400 font-bold px-3 py-1 rounded-2xl hover:bg-blue-600 hover:text-white  transition-all duration-300 cursor-pointer">Say Hello</button>
      </div>
    </div>

    {click ? <IoClose onClick={() => setClick(false)} className="text-3xl text-white bg-blue-400 rounded-full p-1 fixed top-5 right-5 z-10 flex md:hidden"></IoClose> : <LuMenu onClick={() => setClick(true)} className="text-3xl text-white bg-blue-400 rounded-full p-1 fixed top-5 right-5 z-10 flex md:hidden"></LuMenu>}

    {/* Sidebar Section */}
    <div className="fixed w-1/2 h-screen z-10 flex flex-col justify-center bg-linear-to-t from-yellow-950 via-yellow-600 to-yellow-300 md:hidden transition-all ease-in-out duration-1000" style={{left : click ? "0%" : "100%"}}>
      
      {/* Profile */}
      <div className="flex justify-center py-5">
        <img src={Navbarimage} alt="Profile-Image" className="w-32 h-32 rounded-full border-8 border-gray-700 hover:border-blue-500 transition-all ease-in-out duration-1000 cursor-pointer object-cover" />
      </div>
      <h3 className="text-white text-xl font-black text-center">Batrick Reizon</h3>

      {/* Social Media */}
      <div className="text-white flex justify-center gap-3 text-xl py-5">
        <a href="https://www.linkedin.com/in/batrick-reizon/" target="blank" className="bg-black border-8 border-gray-700 rounded-full hover:border-blue-500 transition-all duration-300"><FaLinkedin></FaLinkedin></a>
        <a href="https://github.com/Batrick-Reizon" target="blank" className="bg-black border-8 border-gray-700 rounded-full hover:border-blue-500 transition-all duration-300"><FaGithub></FaGithub></a>
        <a href="https://www.instagram.com/itz.reizon_03/" target="blank" className="bg-black border-8 border-gray-700 rounded-full hover:border-blue-500 transition-all duration-300"><FaInstagram></FaInstagram></a>
      </div>

      {/* Navigation Menu */}
      <nav className="text-white py-3 px-5">
        <a href="#home" onClick={() => setClick(false)} className="group flex items-center gap-2 text-gray-300 text-xl cursor-pointer w-fit hover:text-white"><IoHomeOutline className="group-hover:text-blue-400"></IoHomeOutline>Home</a>
        <a href="#about" onClick={() => setClick(false)} className="group flex items-center gap-2 text-gray-300 text-xl cursor-pointer w-fit hover:text-white my-3"><IoPersonOutline className="group-hover:text-blue-400"></IoPersonOutline>About</a>
        <a href="#resume" onClick={() => setClick(false)} className="group flex items-center gap-2 text-gray-300 text-xl cursor-pointer w-fit hover:text-white my-3"><FaRegFileAlt className="group-hover:text-blue-400"></FaRegFileAlt>Resume</a>
        <a href="#portfolio" onClick={() => setClick(false)} className="group flex items-center gap-2 text-gray-300 text-xl cursor-pointer w-fit hover:text-white my-3"><GrGallery className="group-hover:text-blue-400"></GrGallery>Portfolio</a>
        <a href="#contact" onClick={() => setClick(false)} className="group flex items-center gap-2 text-gray-300 text-xl cursor-pointer w-fit hover:text-white"><MdOutlineContactPhone className="group-hover:text-blue-400"></MdOutlineContactPhone>Contact</a>
      </nav>

      <div className="my-3 flex justify-center">
        <button onClick={handleHello} className="bg-blue-400 font-bold px-3 py-1 rounded-2xl hover:bg-blue-600 hover:text-white  transition-all duration-300 cursor-pointer">Say Hello</button>
      </div>

    </div>

    <div className="w-full md:ml-[25%] lg:ml-[20%]">

      {/* Home Page */}
      <section id="home" className="relative text-white">
        <img src={Profilepicture} alt="Profile-Image" className="w-full h-screen object-cover object-center" />
        <div className="absolute top-2/5 left-3">
          <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl font-black">Batrick Reizon</h1>
          <h4 className="py-2 md:py-5 text-sm sm:text-base md:text-lg lg:text-xl">
            I'm <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold underline underline-offset-8"><Typewriter words={["Frontend Developer", "React Developer", "UI Designer"]} loop={0} typeSpeed={100} deleteSpeed={50} delaySpeed={1000}></Typewriter></span>
          </h4>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">Living in <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">Kanyakumari</span></p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 px-3 py-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-black underline underline-offset-8 decoration-4 decoration-blue-400">About</h1>
        <p className="py-5 font-extralight text-sm md:text-base">Hello I'm Batrick Reizon, Frontend Developer. I am dediciated and Skilled in frontend development with hands-on experience in HTML, CSS, Tailwind CSS, and JavaScript to build responsive and visually appealing user interfaces. Proficient in React.js for creating dynamic single-page applications, with working knowledge of integrating basic APIs.</p>
        <div className="lg:py-10 flex flex-wrap lg:flex-nowrap gap-5 justify-center">
          <img src={Aboutimage} alt="About-Image" className="w-full md:h-80 lg:w-80 lg:h-96 lg:object-cover md:object-cover md:object-top rounded-xs" />
          <div className="px-5">
            <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-black">Frontend Developer</h1>
            <p className="font-extralight py-3 md:py-5 text-sm md:text-base">I'm a passionate Frontend Developer who loves turning ideas into clean, responsive, and user-friendly interfaces. I focus on writing efficient code, creating smooth user experiences, and building websites that look great on every device.</p>
            <div className="flex flex-wrap sm:gap-5 gap-3">
              <div className="pb-2 md:pb-5 text-lg">
                <p className="flex items-center gap-2 font-black text-sm sm:text-base"><FaGreaterThan className="text-blue-300"></FaGreaterThan>Birthday : <span className="font-medium">17 June 2003</span></p>
                <p className="py-5 flex items-center gap-2 font-black text-sm sm:text-base"><FaGreaterThan className="text-blue-300"></FaGreaterThan>Phone : <span className="font-medium">8300644208</span></p>
                <p className="flex items-center gap-2 font-black text-sm sm:text-base"><FaGreaterThan className="text-blue-300"></FaGreaterThan>City : <span className="font-medium">Nagercoil, Kanyakumari</span></p>
              </div>
              <div className="pb-2 md:pb-5 text-lg">
                <p className="flex items-center gap-2 font-black text-sm sm:text-base"><FaGreaterThan className="text-blue-300"></FaGreaterThan>Age : <span className="font-medium">22</span></p>
                <p className="py-5 flex items-center gap-2 font-black text-sm sm:text-base"><FaGreaterThan className="text-blue-300"></FaGreaterThan>Degree : <span className="font-medium">Master</span></p>
                <p className="flex items-center gap-2 font-black text-sm sm:text-base"><FaGreaterThan className="text-blue-300"></FaGreaterThan>Email : <span className="font-medium">batrickreizon@gmail.com</span></p>
              </div>
            </div>
            <p className="text-sm md:text-base">Proficient in React.js for creating dynamic single-page applications, with working knowledge of integrating basic APIs. Comfortable using Git and GitHub for version control and collaborative development.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-blue-100 py-10 px-3">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-black underline underline-offset-8 decoration-4 decoration-blue-400">Education</h1>
        <div className="flex flex-wrap lg:gap-5 xl:gap-10 2xl:gap-40">
          <div className="py-3">
            <h1 className="text-base sm:text-lg md:text-xl font-black">Master in Computer Application (Sept 2023 - May 2025)</h1>
            <h3 className="text-sm sm:text-base md:text-lg font-extralight mt-1">Rohini College of Engineering and Technology - CGPA (7.5)</h3>
          </div>
          <div className="pb-3 xl:pt-3">
            <h1 className="text-base sm:text-lg md:text-xl font-black">Bachelor in Computer Science (July 2020 - May 2023)</h1>
            <h3 className="text-sm sm:text-base md:text-lg font-extralight mt-1">St. Alphonsa College of Arts and Science - CGPA (7.9)</h3>
          </div>
        </div>
      </section>

      {/* Skill Section */}
      <section className="bg-gray-50 py-10 px-3">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-black underline underline-offset-8 decoration-4 decoration-blue-400">Skills</h1>
        <p className="font-extralight py-5 text-sm sm:text-base">I have Skilled in HTML, CSS, TailwindCSS, JavaScript, and React, I transform ideas into interactive and visually appealing web experiences. I create fast, responsive, and dynamic frontend solutions with clean code and modern design practices.</p>
        <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-10">
          <div className="w-full">
            <div className="flex justify-between font-extralight text-sm md:text-base">
              <p>HTML</p>
              <p>95%</p>
            </div>
            <div className="bg-gray-300">
              <p className="bg-blue-400 text-blue-400 w-[95%] h-3"></p>
            </div>
            <div className="flex justify-between font-extralight pt-3 text-sm md:text-base">
              <p>CSS</p>
              <p>85%</p>
            </div>
            <div className="bg-gray-300">
              <p className="bg-blue-400 text-blue-400 w-[85%] h-3"></p>
            </div>
            <div className="flex justify-between font-extralight pt-3 text-sm md:text-base">
              <p>TailwindCSS</p>
              <p>90%</p>
            </div>
            <div className="bg-gray-300">
              <p className="bg-blue-400 text-blue-400 w-[90%] h-3"></p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between font-extralight text-sm md:text-base">
              <p>Javascript</p>
              <p>75%</p>
            </div>
            <div className="bg-gray-300">
              <p className="bg-blue-400 text-blue-400 w-[75%] h-3"></p>
            </div>
            <div className="flex justify-between font-extralight pt-3 text-sm md:text-base">
              <p>React</p>
              <p>80%</p>
            </div>
            <div className="bg-gray-300">
              <p className="bg-blue-400 text-blue-400 w-[80%] h-3"></p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-blue-100 py-10 px-3">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-black underline underline-offset-8 decoration-4 decoration-blue-400">Resume</h1>
        <p className="my-3 font-extralight text-sm sm:text-base">You can find my resume attached below. Kindly click the link to view my complete profile.</p>
        <a href={Resume} target="blank" className="cursor-pointer flex gap-1 items-center bg-blue-400 text-white px-3 py-1 animate-pulse hover:bg-blue-600 rounded-xs w-fit font-black">Resume<FaFileDownload></FaFileDownload></a>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-10 px-3 bg-gray-50">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-black underline underline-offset-8 decoration-4 decoration-blue-400">Portfolio</h1>
        <p className="my-3 font-extralight text-sm sm:text-base">I have worked on several projects as a Frontend Developer, focusing on building responsive, user-friendly, and modern web interfaces.</p>

        {/* Portfolio Project Section */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-between items-center mt-5 md:my-10">
          <div className="relative border border-black w-fit rounded-sm overflow-hidden group">
            <a href="https://batrick-reizon.github.io/airbnb-website/" target="blank">
              <img src={Airbnb} alt="Airbnb" className="w-96 h-60 opacity-60 blur-xs group-hover:blur-none transition-transform duration-1000 ease-in-out hover:scale-110" />
              <p className="absolute top-[45%] left-5/12 text-lg font-black">Airbnb</p>
            </a>
          </div>

          <div className="relative border border-black w-fit rounded-sm overflow-hidden group">
            <a href="https://batrick-reizon.github.io/tripadvisor-website/" target="blank">
              <img src={Tripadvisor} alt="Tripadvisor" className="w-96 h-60 opacity-60 blur-xs group-hover:blur-none transition-transform duration-1000 ease-in-out hover:scale-110" />
              <p className="absolute top-[45%] left-5/12 text-lg font-black">Tripadvisor</p>
            </a>
          </div>

          <div className="relative border border-black w-fit rounded-sm overflow-hidden group">
            <a href="https://batrick-reizon.github.io/udemy-website/" target="blank">
              <img src={Udemy} alt="Udemy" className="w-96 h-60 opacity-60 blur-xs group-hover:blur-none transition-transform duration-1000 ease-in-out hover:scale-110" />
              <p className="absolute top-[45%] left-5/12 text-lg font-black">Udemy</p>
            </a>
          </div>

          <div className="relative border border-black w-fit rounded-sm overflow-hidden group">
            <a href="https://batrick-reizon.github.io/greenden-tailwind/" target="blank">
              <img src={Greenden} alt="Greenden" className="w-96 h-60 opacity-60 blur-xs group-hover:blur-none transition-transform duration-1000 ease-in-out hover:scale-110" />
              <p className="absolute top-[45%] left-5/12 text-lg font-black">Greenden</p>
            </a>
          </div>

          <div className="relative border border-black w-fit rounded-sm overflow-hidden group">
            <a href="https://batrick-reizon.github.io/nostra-e-commerce-website/" target="blank">
              <img src={Nostra} alt="Nostra" className="w-96 h-60 opacity-60 blur-xs group-hover:blur-none transition-transform duration-1000 ease-in-out hover:scale-110" />
              <p className="absolute top-[45%] left-5/12 text-lg font-black">Nostra</p>
            </a>
          </div>

          <div className="relative border border-black w-fit rounded-sm overflow-hidden group">
            <a href="https://randomnumber-react-sigma.vercel.app/" target="blank">
              <img src={Random} alt="Random" className="w-96 h-60 opacity-60 blur-xs group-hover:blur-none transition-transform duration-1000 ease-in-out hover:scale-110" />
              <p className="absolute top-[45%] left-5/12 text-lg font-black">Random</p>
            </a>
          </div>

          <div className="relative border border-black w-fit rounded-sm overflow-hidden group">
            <a href="https://weather-app-iota-eight-76.vercel.app/" target="blank">
              <img src={Weather} alt="Weather" className="w-96 h-60 opacity-60 blur-xs group-hover:blur-none transition-transform duration-1000 ease-in-out hover:scale-110" />
              <p className="absolute top-[45%] left-5/12 text-lg font-black">Weather</p>
            </a>
          </div>

          <div className="relative border border-black w-fit rounded-sm overflow-hidden group">
            <a href="https://actodo-react-sandy.vercel.app/" target="blank">
              <img src={Actodo} alt="Actodo" className="w-96 h-60 opacity-60 blur-xs group-hover:blur-none transition-transform duration-1000 ease-in-out hover:scale-110" />
              <p className="absolute top-[45%] left-5/12 text-lg font-black">Actodo</p>
            </a>
          </div>

          <div className="relative border border-black w-fit rounded-sm overflow-hidden group">
            <a href="https://movie-project-swart.vercel.app/" target="blank">
              <img src={Movies} alt="Movies" className="w-96 h-60 opacity-60 blur-xs group-hover:blur-none transition-transform duration-1000 ease-in-out hover:scale-110" />
              <p className="absolute top-[45%] left-5/12 text-lg font-black">Movies</p>
            </a>
          </div>

          <div className="relative border border-black w-fit rounded-sm overflow-hidden group">
            <a href="https://todo-fe-be-db.vercel.app/" target="blank">
              <img src={Todo} alt="Todo" className="w-96 h-60 opacity-60 blur-xs group-hover:blur-none transition-transform duration-1000 ease-in-out hover:scale-110" />
              <p className="absolute top-[45%] left-5/12 text-lg font-black">Todo</p>
            </a>
          </div>

          <div className="relative border border-black w-fit rounded-sm overflow-hidden group">
            <a href="https://bulkmail-website.vercel.app/" target="blank">
              <img src={Bulkmail} alt="Bulkmail" className="w-96 h-60 opacity-60 blur-xs group-hover:blur-none transition-transform duration-1000 ease-in-out hover:scale-110" />
              <p className="absolute top-[45%] left-5/12 text-lg font-black">Bulkmail</p>
            </a>
          </div>

          <div className="relative border border-black w-fit rounded-sm overflow-hidden group">
            <a href="https://blog-firebase-project.vercel.app/" target="blank">
              <img src={Blog} alt="Blog" className="w-96 h-60 opacity-60 blur-xs group-hover:blur-none transition-transform duration-1000 ease-in-out hover:scale-110" />
              <p className="absolute top-[45%] left-5/12 text-lg font-black">Blog</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col bg-blue-100 py-10 px-3">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-black underline underline-offset-8 decoration-4 decoration-blue-400">Contact Me</h1>
        <p className="my-3 font-extralight text-sm sm:text-base">Let's get in touch and Feel free to reach out anytime!</p>

        <div className="flex flex-wrap lg:flex-nowrap sm:justify-center lg:justify-between items-stretch gap-5">
          <div className="bg-white p-5 w-full sm:w-3/4 lg:w-1/2 shadow-lg rounded-sm flex flex-col justify-center">
            {/* Name Input */}
            <div className="flex items-center bg-white rounded-lg overflow-hidden w-full my-5">
              <div className="bg-blue-600 p-3">
                <IoPersonOutline className="text-white"></IoPersonOutline>
              </div>
              <p className="p-2 font-extralight">Batrick Reizon</p>
            </div>

            {/* Email Input */}
            <div className="my-5 flex items-center bg-white rounded-lg overflow-hidden w-full">
              <div className="bg-blue-600 p-3">
                <MdEmail className="text-white"></MdEmail>
              </div>
              <p className="p-2 font-extralight">batrickreizon@gmail.com</p>
            </div>

            {/* Phone Number Section */}
            <div className="my-5 flex items-center bg-white rounded-lg overflow-hidden w-full">
              <div className="bg-blue-600 p-3">
                <BiSolidPhoneCall className="text-white"></BiSolidPhoneCall>
              </div>
              <p className="p-2 font-extralight">+91 8300644208</p>
            </div>

            {/* Address Section */}
            <div className="my-5 flex items-center bg-white rounded-lg overflow-hidden w-full">
              <div className="bg-blue-600 p-3">
                <FaMapMarkerAlt className="text-white"></FaMapMarkerAlt>
              </div>
              <p className="p-2 font-extralight">Keezhkulam, Kanyakumari</p>
            </div>
          </div>

          <div className="w-full sm:w-3/4 lg:w-1/2 bg-white p-5 shadow-lg rounded-sm">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap gap-3 justify-between">
                <div className="w-full">
                  <h1 className="font-extralight">Your Name</h1>
                  <input type="text" value={name} onChange={handleName} className="my-3 border border-gray-300 outline-blue-300 p-2 w-full" required />
                </div>
                <div className="w-full">
                  <h1 className="font-extralight">Your Email</h1>
                  <input type="email" value={email} onChange={handleEmail} className="my-3 border border-gray-300 outline-blue-300 p-2 w-full" required />
                </div>
              </div>
              <div>
                <h1 className="font-extralight">Subject</h1>
                <input type="text" value={subject} onChange={handleSubject} className="my-3 w-full border border-gray-300 outline-blue-300 p-2" required />
              </div>
              <div>
                <label className="font-extralight">Message</label> <br />
                <textarea value={Message} onChange={handleMessage} className="w-full my-3 h-20 border border-gray-300 outline-blue-300 p-2" required ></textarea>
              </div>
              <div className="flex justify-center items-center">
                <button type="submit" className="bg-blue-400 hover:bg-blue-600 font-black py-2 px-5 rounded-4xl hover:text-white cursor-pointer">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <p className="py-5 px-3 text-center text-sm md:text-base lg:text-lg font-black">Thank you for visiting my portfolio. If you have any feedback, feel free to reach out anytime.</p>

    </div>
  </div>)
}

export default App