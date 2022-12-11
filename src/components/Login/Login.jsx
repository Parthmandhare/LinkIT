import React from 'react';
import { Link ,  useNavigate} from 'react-router-dom';
import InputControl from '../inputControl/InputControl';
import styles from "./Login.module.css"
import { useState } from 'react';
import { signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../../firebase";

const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email : "",
        password: "",
      })
    
      let name, value;
      const getData = (e)=>{
        name = e.target.name;
        value = e.target.value;
    
        setUser({...user, [name]: value});
      }
    
      const[errorMsg, setErrorMsg] = useState("");
    
      const[submitButtonDisabled,setsubmitButtonDisabled ] = useState(false);
    
      const postData= async(e)=>{
        e.preventDefault();
    
        const{name,email,password}=user;
    
        if(!email||!password ){
            // alert("Fill all fields");
            setErrorMsg("Fill all fields");
            return;
        }
        else{
            setErrorMsg("")
            signInWithEmailAndPassword(auth,email,password).then(async(res)=>{
                setsubmitButtonDisabled(true);
                
                navigate('/');
    
               
    
            })
    
            .catch((e)=>{
                setsubmitButtonDisabled(false);
                setErrorMsg(e.message)
                // console.log(e);
            });
        }
    }    
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>
            <InputControl label="Email" type ="email"  name="email"  value={user.email} onChange={getData}  placeholder ="Enter Your Email" />
            <InputControl label="Password" type = "password" name="password"  value={user.password} onChange={getData} placeholder ="Enter Your Password" />

            <div className={styles.footer}>
                <b className={styles.errror}>{errorMsg}</b>
                <button disabled={submitButtonDisabled} onClick={postData}>Login</button>
                <p>Dont have account?</p> <span><Link to="/signup">Sign up</Link></span>
            </div>

        </div>
    </div>

  )
}

export default Login