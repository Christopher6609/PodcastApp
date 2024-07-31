import { useState } from "react";
import Button from "../../components/atoms/Button/Button";
import FormInput from "../../components/atoms/FormInput/FormInput";
import Footer from '../../components/molecules/footer/Footer';
import { signInWithGooglePopup, signUserInWithEmailAndPassword } from "../../utils/firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";


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
             <div className="flex flex-col justify-center items-center my-[5rem]">
                    <h2>I have an account</h2>
                    <h1 className='text-[2rem]'>Login with your Email and Password</h1>
            <div className="w-[50rem] flex flex-col gap-[2rem]">
                <form onSubmit={handleSubmit} className="">
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
                    <div className="mt-[2rem] flex gap-[2rem]">
                        <span><Button>Log in</Button></span>
                        <span onClick={googleSignIn}><Button ><FontAwesomeIcon icon={faGoogle} className="pr-[0.875rem]"/>Log in with Google</Button></span>
                    </div>
                    
                </form>
               
            </div>
            </div>
            <Footer />
        </>
    )
}

export default SignIn;