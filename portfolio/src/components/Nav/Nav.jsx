import SocialConstMode from '../SocialConstMode/SocialConstMode';
import '../Nav/Nav.css'

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>CV</li>
        <li className='mood-item'>
          <SocialConstMode />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;