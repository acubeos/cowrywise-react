import React from 'react'
import './Section4Texts.css'

function Section4Texts(props) {
  return (
        <div className="py-4 pr me-1 col-lg-4 col-md-5 col-sm-10 col-10">
            <span className="icon sec4-span-main"><i className="pe-3 me-3 mb-3 fa-solid fa-square "></i>{props.item.title}</span>
            <p className="ps-5 sec4-par-main">{props.item.titleText}</p>
        </div> 
  )
}

export default Section4Texts
