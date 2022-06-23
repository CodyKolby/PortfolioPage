import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service',
        'template',
        form.current,
        'publicKey'
      )
      .then((result) => {
        alert('Message successfully sent!')
        window.location.reload(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact me</h1>
          <p>
            I am open to any suggestion, I feel good in the front and back end,
            in a small team as well as in a large one. However, if you have
            other request or question, don't hesitate to contact me using below
            form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Wadowice, 34-123
          <br />
          Poland,
          <br />
          Kolberdominik@gmail.com
          <br />
        </div>
        <div className="map-wrap">
          <MapContainer center={[49.88335, 19.49292]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[49.88335, 19.49292]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
