import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
} from 'react-icons/fa'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About me</h1>
          <p>I am 18 years old, just finishing 3rd grade in high school and 5th grade in music school, and in my life I have never worked on anything I am really interested in and want to get better at.</p>
          <p>
            I have always put my development first. I believe that the
            possibilities we have as human beings are infinite. Since I remember
            for as long as I could, I have done my best - whether it was
            attending two schools at the same time, or learning to program every
            day after school. What is important to me is development
            opportunities, I want something to do, I am not interested in
            sitting and doing nothing. Conscientiously I approach my tasks and
            always try to bring motivation and a relaxed atmosphere to the team.
          </p>
          <p>
          I always expect more from life - new challenges, leaving the comfort zone and hard work. When I look at the workplace, the most important things for me are a large number of tasks and a good atmosphere. I assume that work is more pleasant and effective when the atmosphere is good and people talk to each other and share their knowledge.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FaNodeJs color="#44883e" />
            </div>
            <div className="face2">
              <FaHtml5 color="#F06529" />
            </div>
            <div className="face3">
              <FaCss3Alt color="#28A4D9" />
            </div>
            <div className="face4">
              <FaJsSquare color="#EFD81D" />
            </div>
            <div className="face5">
              <FaReact color="#5ED4F4" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
