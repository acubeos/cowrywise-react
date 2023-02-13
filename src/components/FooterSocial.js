import React from 'react'
import './FooterSocial.css'

function FooterSocial() {
  return (
       <div className="col-12">
        <hr/>
        <ul>
            <li className="list">
                <a className="socials" href=""><i className="fa-brands fa-twitter"></i></a>
                <a className="socials" href=""><i className="fa-brands fa-facebook-f"></i></a>
                <a className="socials" href=""><i className="fa-brands fa-square-whatsapp"></i></a>
                <a className="socials" href=""><i className="fa-brands fa-telegram"></i></a>
                <a className="socials" href=""><i className="fa-brands fa-instagram"></i></a>
                <a className="socials" href=""><i className="fa-brands fa-youtube"></i></a>
            </li>
        </ul>
    </div>
   
  )
}

export default FooterSocial
