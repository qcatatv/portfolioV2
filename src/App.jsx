import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHtml5, faReact, faCss3, faBootstrap, faAngular, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faHand } from '@fortawesome/free-solid-svg-icons';
import Cards from './components/Cards'
import Skills from './components/Skills';




function App() {

  return (
    <>
    <div class="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <div className='flex flex-col w-full p-6 items-center gap-8'>
      <h1 className='text-center w-4/12'> I’m a Creative Director and UI/UX Designer from Bucharest, Romania, with expertise in web development, print media, and mobile app design. I turn complex problems into simple, elegant, and intuitive solutions, ensuring websites and mobile apps are both functional and visually captivating. I've had the privilege of working with renowned brands, delivering products that are memorable, user-friendly, and creatively aligned with their identity.</h1>
      <div className=' flex items-center gap-80'>
        <a className='text-white bg-blue-700 hover:bg-blue-800 transition ease-in-out duration-300 p-2 rounded-xl cursor-pointer'>Download My CV</a>
        <div className='flex justify-end text-3xl gap-8'>
          <a className='text-white cursor-pointer'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className='text-white cursor-pointer'><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </div>
    <div className='text-center'>
      <h1 className='text-4xl font-medium'>My Work</h1>
      <p className=''>A collection of projects I've worked on.</p>
        <div className="flex justify-center items-center grid-cols-1 mt-10">
          <Cards />
        </div>
    </div>
    <div className='text-center'>
      <h1 className='text-4xl font-medium mt-10'>Skills</h1>
      <div className=''>
        <Skills />
      </div>
    </div>
    </>
  )
}

export default App