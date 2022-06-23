import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import meISCC from '../../assets/images/meascii2.png';
import me from '../../assets/images/jaobrys.png';
import myPDF from '../../assets/pdf/cv22.pdf'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [
    'D',
    'o',
    'm',
    'i',
    'n',
    'i',
    'k',
    ' ',
    'K',
    'o',
    'l',
    'b',
    'e',
    'r',
    '.',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="home-page">
        <div className="photos">
        <img className='phocia' src={meISCC} alt="norMe"></img>
        <img className="phocia2" src={me} alt="me"/>
        </div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer</h2>
          <ul className="list">
            <li className="currList">
            <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
            </li>
            <li className="currList">
            <a
            className="flat-button"
            href={myPDF}
            download="Dominik Kolber CV and Letter of Motivation"
          >
            CV and Letter of Motivation
            </a>
            </li>
            <li className="currList">
            <a
            className="flat-button"
            href={"https://github.com/CodyKolby?tab=repositories"}
            target="_blank"
            rel="noreferrer"
          >
            Git Repositories
            </a>
            </li>
          </ul>
          
          
        </div>
      </div>
    </>
  )
}

export default Home
