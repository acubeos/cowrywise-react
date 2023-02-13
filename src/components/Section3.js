import React from 'react'
import './Section3.css'

function Section3() {

  return (
    <div className="container-fluid section-three third-section">

    {/* phone picture */}
    <div className="row pt-5">
        <div className="col-lg-6 phone-card">
            <div className="phone-img"><img src={"../assets/app-screenshot-investment-platform-nigeria.png"} loading="lazy" className="mw-100" alt="phone" height="650px" width="80%"/>
            </div>
        </div>

        {/* text part */}
        <div className="col-lg-6 col-md-8 col-sm-10 col-12 gx-lg-5">
            <h1 className="sec3-par">Start building wealth in 5 minutes</h1>
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-2 numbers">
                    <span className="numero"> 01</span>
                    
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-10 words">
                    <span className="sec3-span">Create an account</span>
                    <p className="sec3-par2">Sign up for an account with your name, email and phone number.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-2 numbers">
                    <span className="numero"> 02</span>
                    
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-10 words">
                    <span className="sec3-span">Add a payment method</span>
                    <p className="sec3-par2">Using your debit card, bank account, USSD, QR Code, setup your first plan.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-2 numbers">
                    <span className="numero"> 03</span>

                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-10 words">
                    <span className="sec3-span">
                        Watch your money grow</span>
                    <p className="sec3-par2">Sit back, relax & let your money work for you all day, everyday.</p>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-8">
                <a href="https://bobbyhadz.com" target="_blank" rel="noopener noreferrer"><button className="btn btn-lg btn-primary mt-3 login-a ">Sign up now</button></a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Section3
