import React, {useState} from 'react'
import './Testimonial.css'

function Testimonial() {
    const [formData, setFormData] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    function handleChange(event){
        setFormData(event.target.value)
    }

  return (
    <section className="first-section">
    <div className="container-fluid section-one">
    <div className="row gx-0">
        <div className="col-lg-6 col-md-6 col-sm-10 col-12 test-card">
            <div className="testimonial-img"><img src="../assets/wande.jpg" className="mw-100" alt="wande" width="90%"/>
            </div>
            <div className="testimonial-backdrop">
            </div>
            <div className="testimonial">
                <div className="testimonial-body">
                    <p className="testimonial-text sec1-test">I love how Cowrywise has made me think of saving part of any income I get. I immediately think of investing any money I get now.
                    </p>
                    <p className="sec1-name">Olaitan O. <a href="#" className="name">@thevideopilot</a> </p>
                </div>
            </div>
    
    {/* 
            <div class="img-cntl">
    <img style="max-width: 50px;" src="mancowry.jpg" alt="">
    <img style="max-width: 50px;" src="mancowry.jpg" alt="">
    <img style="max-width: 50px;" src="mancowry.jpg" alt="">
    </div> */}
    
        </div>
    
        {/* <!-- text part --> */}
        <div className="sec1-text col-lg-6 col-md-6 col-sm-12 col-12 order-first order-md-2">
            <h1 className="sec1-header">Put your money to work.</h1>
            <p className="sec1-par">Build discipline, access financial tools that steadily grow your finances.</p>
            
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-auto">
                    <label htmlFor="inputemail2" className="visually-hidden">Email</label>
                    <input type="email" 
                    onChange={handleChange}
                    className="form-control" 
                    id="inputemail2" 
                    placeholder="Your email..."/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3 login-a">Start Investing</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Testimonial
