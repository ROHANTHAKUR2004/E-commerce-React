import { useEffect, useState } from "react"

export default function Auth({onSubmit, resetform}){


    const[formDetails , setformDetails] = useState({email:'', password:'', username:'', isloading:false});


    function  updateEmail (updatedEmail){

        setformDetails({...formDetails, email: updatedEmail})

    }
    function  updatepassword (updatedpassword){

        setformDetails({...formDetails, password: updatedpassword})

    }
    function  updateusername (updatedusername){

        setformDetails({...formDetails, username: updatedusername})

    }
       function onFormSubmit(){
        setformDetails({...formDetails, isloading:true})
        onSubmit(formDetails);

       }


       useEffect(() =>{
           setformDetails({email:'', password:'', username:'', isloading:false});
       },[resetform])

    return (
        <>
        <div className="input-group">
                    <input onChange={(e) => updateusername(e.target.value)} value={formDetails.username} type="text" className="form-control" placeholder="Username" id="loginUsername"/>
                </div>
                <div className="input-group">
                    <input  onChange={(e) => updateEmail(e.target.value)} value={formDetails.email} type="email" className="form-control" placeholder="Email." id="loginEmail"/>
                </div>
                <div className="input-group">
                    <input  onChange={(e) => updatepassword(e.target.value)} value={formDetails.password} type="password" className="form-control" placeholder="Password" id="loginPassword"/>
                </div>

                <div className="input-group">
                    {/* <button onClick={onFormSubmit} className="form-control btn btn-primary">Submit</button> */}
                    <button  onClick={onFormSubmit} className=" form-control btn btn-primary" type="button" disabled={formDetails.isloading}>
                        {(formDetails.isloading) && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>}
                          {(formDetails.isloading) ? 'Loading...'  : 'Submit'}
                          </button>
                </div>

    </>
                
    )
}