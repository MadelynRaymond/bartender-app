import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";

import React from 'react'

export default function LandingPage() {
  return (
    <>
    <div className="nav">
        <p className="title">Neon <FontAwesomeIcon icon={faMartiniGlass} /></p>
        <div className="navRight">
            <p>Menu</p>
            <p>Cart</p>
            <p>Staff Portal</p>
        </div>
    </div>
        <div className="landing">
            <div className="landingImage" style={{backgroundImage: 'url("./landing.webp")'}}>
                <section className='landingImageContent'>
                    <div>
                        <h1 className="neon">NEON</h1>
                        <p className="tagline">luxury bar & lounge</p>
                    </div>
                    <button>Order Now</button>
                </section>
            </div>
        </div>
    </>
  )
}
