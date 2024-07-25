import { useState } from "react";
import Button from "../../components/atoms/Button/Button";
import FormInput from "../../components/atoms/FormInput/FormInput";



const SignUp = () => {

    const DefaultFormFields = {
        name:'',
        email:'',
        password:'',
        confirmpassword:''
    }

const [formFields, setFormFields] = useState(DefaultFormFields);
const {name, email, password, confirmpassword} = formFields;

const handleChange = (event) => {
    const {name, value} = event.target;
  
      setFormFields({...formFields, [name]:value})
}

const handleSubmit = (event) => {
    event.preventDefault()
}
    return(
        <>
            <div className="flex flex-col justify-center items-center">
            <h2>I do not have an account</h2>
            <h1 className='text-[2rem]'>Sign Up with your Email and Password</h1>
            <div className="w-[50rem]">
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        label="Display Nane:"
                        type='text'
                        placeholder="Enter your username"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                        
                    />
                    <FormInput 
                        label="Email:"
                        type='email'
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                        
                    />
                     <FormInput 
                        label="Password:"
                        type='password'
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                     <FormInput 
                        label="Confirm Password:"
                        type='password'
                        placeholder="Re-enter your password"
                        name="confirmpassword"
                        value={confirmpassword}
                        onChange={handleChange}
                        required
                        
                    />
                    <Button>Sign Up</Button>
                
                </form>
            </div>
            </div>
        </>
    )
}

export default SignUp;