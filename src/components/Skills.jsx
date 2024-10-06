import { faGithub, faLinkedin, faHtml5, faReact, faCss3, faBootstrap, faAngular, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faHand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills() {
  return (
    <div className='xl:flex grid grid-cols-4 text-center xl:flex-row items-center justify-center content-center gap-5 mt-10'>
      <img className='object-contain h-20 w-auto' width="144" height="144" src="https://img.icons8.com/color/144/react-native.png" alt="react-native"/>
      <img className='object-contain h-20 w-auto' width="144" height="144" src="https://img.icons8.com/color/144/html-5--v1.png" alt="html-5--v1"/>
      <img className='object-contain h-20 w-auto' width="144" height="144" src="https://img.icons8.com/color/144/css3.png" alt="css3"/>
      <img className='object-contain h-20 w-auto' width="144" height="144" src="https://img.icons8.com/fluency/144/tailwind_css.png" alt="tailwind_css"/>
      <img className='object-contain h-20 w-auto' width="144" height="144" src="https://img.icons8.com/fluency/144/bootstrap.png" alt="bootstrap"/>
      <img className='object-contain h-20 w-auto' width="144" height="144" src="https://img.icons8.com/color/144/figma--v1.png" alt="figma--v1"/>
    </div>
  )
}

export default Skills
