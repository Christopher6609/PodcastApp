import { useState } from "react";
import Button from "../../components/atoms/Button/Button";
import FormInput from "../../components/atoms/FormInput/FormInput";
import { signInWithGooglePopup, signUserInWithEmailAndPassword } from "../../utils/firebase/firebase";

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
    
    const resetFormFields = () => setFormFields(DefaultFormFields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await signUserInWithEmailAndPassword(email,password);
            resetFormFields();
        }catch(error){
            switch(error.code){
                case 'auth/invalid-credential' :
                    alert('Invalid Login Credentials');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                default:
                    console.log(error);
            }
            console.log(error);
        }
    }

    const googleSignIn = async () => {
      await signInWithGooglePopup();
    };

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
                    <span><Button>Submit</Button></span>
                   
                </form>
                <span onClick={googleSignIn}><Button >Sign in with Google</Button></span>

            </div>
            </div>
        </>
    )
}

export default SignIn;