import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Button from "../../components/atoms/Button/Button";
import FormInput from "../../components/atoms/FormInput/FormInput";
import Footer from "../../components/molecules/footer/Footer";
import { createUserDocumentWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup  } from '../../utils/firebase/firebase';




const SignUp = () => {

    const DefaultFormFields = {
        displayName:'',
        email:'',
        password:'',
        confirmpassword:''
    }

const [formFields, setFormFields] = useState(DefaultFormFields);
const {displayName, email, password, confirmpassword} = formFields;

const handleChange = (event) => {
    const {name, value} = event.target;
  
      setFormFields({...formFields, [name]:value})
}

const resetFormFields = () => setFormFields(DefaultFormFields);

const handleSubmit = async (event) => {
    event.preventDefault()
    if(password != confirmpassword){
    alert("Password do not match");
    }

    try{
        const {user} = await createUserDocumentWithEmailAndPassword(email, password);
        await createUserDocumentFromAuth(user, {displayName});
        resetFormFields();
    }catch(error){
        switch(error.code){
            case 'auth/email-already-in-use':
                alert('Email address already in use');
                break;
                default:
                    return console.log(error);
        }
   
    }
}

const googleSignIn = async () => {
    await signInWithGooglePopup();
   
  };
    return(
        <>
            <div className="flex flex-col justify-center items-center my-[5rem]">
            <h2>I do not have an account</h2>
            <h1 className='text-[2rem]'>Sign Up with your Email and Password</h1>
            <div className="w-[50rem]">
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        label="Display Nane:"
                        type='text'
                        placeholder="Enter your username"
                        name="displayName"
                        value={displayName}
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
                    <div className="mt-[2rem] flex gap-[2rem]">
                        <span><Button>Sign up</Button></span>
                        <span onClick={googleSignIn}><Button><FontAwesomeIcon icon={faGoogle} className="pr-[0.875rem]"/>Sign up with Google</Button></span>
                    </div>
                
                </form>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUp;