import React from 'react'
import './Footer.css'

function Footer(props) {

  return (
    <div className="col-lg-3 col-md-5 col-5">
        <h4 className="footer-menu-header ms-4 ps-2 mb-4">{props.item.title}</h4>
        <ul>
        <li className="list"><a href="#">{props.item.subtitle.sub1}</a></li>
        <li className="list"><a href="#">{props.item.subtitle.sub2}</a></li>
        <li className="list"><a href="#">{props.item.subtitle.sub3}</a></li>
        <li className="list"><a href="#">{props.item.subtitle.sub4}</a></li>
        <li className="list"><a href="#">{props.item.subtitle.sub5}</a></li>
        <li className="list"><a href="#">{props.item.subtitle.sub6}</a></li>
        <li className="list"><a href="#">{props.item.subtitle.sub7}</a></li>
        <li className="list"><a href="#">{props.item.subtitle.sub8}</a></li>
        <li className="list"><a href="#">{props.item.subtitle.sub9}</a></li>
        </ul>
    </div>
  )
}

export default Footer
