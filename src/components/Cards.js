import React from 'react'
import './Cards.css'

function Cards(props) {  

        function myMargin(){
            let top = ""

            if ( props.item.id === 1 ){
                top = "0px"
            }

            else if ( props.item.id === 2 ){
                top = "-300px"
            }
    
            else if ( props.item.id === 3 ){
                top = "100px"
            }
    
            else if ( props.item.id === 4 ){
                top = "-300px"
            }
    
            else if ( props.item.id === 5 ){
                top = "100px"
            }
    
            else if ( props.item.id === 6 ){
                top = "-300px"
            }
            
            return top
        
    }

    const stylesMargin = {
        marginTop: myMargin()
    }
    
    const stylesColor = {
        backgroundColor: props.item.color
    }
    
    let stylerP1
    let stylerP2
    let stylerA
    let stylerH
   
    if (props.item.id === 6){
        stylerP1 = {color: "white"}
        stylerP2 = {color: "whitesmoke"}
        stylerA = {color: "rgb(3, 3, 85)"}
        stylerH = {color: "rgb(3, 3, 85)"}
    }


  return (
        <div className="col-lg-6 col-md-6 col-sm-6 cm px-md-5" style={stylesMargin}>
            <div className="card sec2-card sec2-card1" style={stylesColor} >
                <div className="card-body">
                    <p className="card-text sec2-card-par1" style={stylerP1}> {props.item.paragraphText} </p>
                    <h5 className="card-title sec2-card-header" style={stylerH}> {props.item.headerText} </h5>
                    <p className="card-text sec2-card-par2" style={stylerP2}>{props.item.text}</p>
                    <a href="#" className="slide sec2-card-a" style={stylerA}>{props.item.linkText}<span><i className="fa-solid fa-angle-right slide-out ps-2"></i></span></a>
                </div>
                <div className="sec2-container-img"><img className="sec2-card-img" loading="lazy" src={`../assets/${props.item.bigImage}` }alt=""/>
                    <div className="sec2-overlay-img">
                        <div className="sec2-img2"><img className="sec2-card-img2" src={`../assets/${props.item.smallImage}`} alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
        
  )
}

export default Cards

