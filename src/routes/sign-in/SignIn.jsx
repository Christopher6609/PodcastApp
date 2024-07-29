import { useState } from "react";
import Button from "../../components/atoms/Button/Button";
import FormInput from "../../components/atoms/FormInput/FormInput";
import { signInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {

    const DefaultFormFields = {
        email:'',
        password:''
    }

    const [formFields, setFormFields] = useState(DefaultFormFields);
    const {email, password } = formFields;

    const handleChange = (event) => {
        const {name, value } = event.target;
        setFormFields({...formFields, [name]:value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const googleSignIn = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return(
        <>
             <div className="flex flex-col justify-center items-center">
                    <h2>I have an account</h2>
                    <h1 className='text-[2rem]'>Login with your Email and Password</h1>
            <div className="w-[50rem]">
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                    <FormInput 
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                    <Button>Submit</Button>
                   
                </form>
                <span onClick={googleSignIn}><Button >Sign in with Google</Button></span>

            </div>
            </div>
        </>
    )
}

export default SignIn;