import React,{useState} from 'react'
import './SignUp.css'

function SignUp() {
    const [formData, setFormData] = useState("")

    function handleChange(event){
        setFormData(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

  return (
    <div className="row email-card justify-content-center align-items-center">
        <div className="col-lg-5 col-md-5 col-12 mb-3">
            <h3 className="sec5-header">
                Sign up for free. 
                <br/>Start investing today.
            </h3>
        </div>

        <div className="col-lg-5 col-md-5 col-12">
            <form onSubmit={handleSubmit}>
                <div className="form-form col-auto">
                    <input onChange={handleChange} type="email" className="form-control input-form" id="inputPassword2" placeholder="Your email..."/>
                    <button className="btn btn-lg btn-light mb-3 form-button">Sign up for free
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp
