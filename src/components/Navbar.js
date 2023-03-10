import logo from '../images/logo.svg'
import PageLink from "./PageLink";
import { pageLinks, socialLinks } from '../data'
import SocialLink from './SocialLink';


const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <ul className="nav-links" id="nav-links">
        {pageLinks.map((link) => {
          return ( 
            <PageLink {...link} className='nav-link' key={link.id} />
          );
        })}
      </ul>

      <ul className="nav-icons">
        {socialLinks.map((link) => {
            return <SocialLink {...link} className='nav-icon' key={link.id}/>
          })}
      </ul>
    </div>
  </nav>
  )
}

export default Navbar