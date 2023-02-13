import React from 'react'
import './Section5Card.css'

function Section5Card(props) {

  const logoStyle = {
    width: "30%",
  }

  const ratingStyle = {
    width: "30%"
  }

  return (
    <div className="col-lg-6 col-md-6 pe-3">
        <div className="card sec5-card">
            <div className="card-body">
              <h6 className="card-subtitle  text-muted">
                    <span className="sec5-rate-no"> {props.item.ratings} </span>/5
                    <span className="rating"> <img src={`../assets/${props.item.stars}`} style={ratingStyle} /> </span>
                    <a href={props.item.link} className="sec5-a"> <img src={`../assets/${props.item.storeLogo}`} alt='' style={logoStyle} /> </a>
                </h6>
                <h5 className="card-title sec5-available pt-5"> {props.item.available} </h5>
                <p className="card-text sec5-user-review pb-4"> {props.item.paragraghText} </p>

                <a href="#" className="slide card-link sec5-download"> {props.item.downloadLink} <span><i className="fa-solid fa-angle-right slide-out ps-2"></i></span></a>
            </div>
        </div>
      </div>
  )
}

export default Section5Card
