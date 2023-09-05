import { BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'
import '../ContentIcons/ContentIcons.css'

const ContentIcons = () => {
  return (
    <div className='icons-social'>
      <a><BsLinkedin size={25} /></a>
      <a><BsGithub size={25}/></a>
      <a><BsInstagram  size={25}/></a>

      
    </div>
  )
}

export default ContentIcons