import React from 'react'
import './FooterEnd.css'
function FooterEnd() {
  return (
    <div>
        <div className="row justify-content-between my-4">
        <div className="col-lg-6 col-md-6">
            <p className="address">🇳🇬 5C Reverend Ogunbiyi Street, Ikeja GRA, Lagos Nigeria.</p>
            <p className="address">🇺🇸2261 Market Street #4817 San Francisco, CA 94114</p>
        </div>
        <div className="col-lg-3 col-md-3 sec-part ">
            <img className="sec-img" src="../assets/sec.png" alt=""/>
            <div className="sec-text">
                <span className="sec">Licensed by the SEC</span>
                <br/>
                <span className="story">Fund Manager</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FooterEnd
