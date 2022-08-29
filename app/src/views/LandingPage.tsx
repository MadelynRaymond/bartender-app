import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <>
        <div className="landing">
            <div className="landingImage" style={{backgroundImage: 'url("./landing.webp")'}}>
                <section className='landingImageContent'>
                    <div>
                        <h1 className="neon">NEON</h1>
                        <p className="tagline">luxury bar & lounge</p>
                    </div>
                    <Link to="/Menu"><button>Order Now</button></Link>
                </section>
            </div>
        </div>
    </>
  )
}
