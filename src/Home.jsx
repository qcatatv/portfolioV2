import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Cards from './components/Cards'
import Skills from './components/Skills';
import Contact from './components/Contact';




function Home() {

  return (
    <>
    <section className='flex flex-col'>
    <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" id='about_section'></div>
      <div id='home_section' className='flex flex-col w-full p-6 items-center gap-8 mt-20'>
        <h1 className='text-white text-center xl:w-4/12 md:w-96'> I’m a Creative Director and UI/UX Designer from Bucharest, Romania, with expertise in web development, print media, and mobile app design. I turn complex problems into simple, elegant, and intuitive solutions, ensuring websites and mobile apps are both functional and visually captivating. I've had the privilege of working with renowned brands, delivering products that are memorable, user-friendly, and creatively aligned with their identity.</h1>
        <div className=' flex items-center xl:gap-80 gap-12'>
          <a href="./assets/CV/CV.pdf" target='_blank' download="" className='text-white bg-blue-700 hover:bg-blue-800 transition ease-in-out duration-300 p-2 rounded-xl cursor-pointer'>Download My CV <FontAwesomeIcon icon={faDownload}/> </a>
          <div className='flex justify-end text-3xl gap-8'>
            <a href='https://www.linkedin.com/in/rosiorucatalin' target='_blank' className='text-white cursor-pointer text-white hover:text-blue-600 transition ease-in-out duration-300'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='https://github.com/qcatatv' target='_blank' className='text-white cursor-pointer text-white hover:text-blue-600 transition ease-in-out duration-300'><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <h1 className='text-4xl font-medium' id='work_section'>My Work</h1>
        <p className=''>A collection of projects I' ve worked on.</p>
          <div className="flex justify-center items-center xl:grid-cols-1 mt-10">
            <Cards />
          </div>
      </div>
      <div className='text-center' id='technologies_section'>
        <h1 className='text-4xl font-medium mt-10' >My Technologies</h1>
        <div className=''>
          <Skills />
        </div>
      </div>
      <div className='' id='contact_section'>
        <Contact />
      </div>
      
    </section>
    </>
  )
}

export default Home