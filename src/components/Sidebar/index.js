import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import letterK from '../../assets/images/letter-k.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { FaGithub, FaFacebook, FaFilePdf } from 'react-icons/fa'
import myPDF from '../../assets/pdf/cv22.pdf'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to={'/'}>
        <img src={letterK} alt="logo" img />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            className="test"
            href={myPDF}
            download="Dominik Kolber CV and Letter of Motivation"
          >
            <FaFilePdf color="#aaa6a4" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/CodyKolby"
          >
            <FaGithub color="#aaa6a4" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/dominik.kolber.3/"
          >
            <FaFacebook color="#aaa6a4" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
