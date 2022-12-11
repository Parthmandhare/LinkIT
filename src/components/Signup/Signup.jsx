import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputControl from '../inputControl/InputControl';
import styles from "./Signup.module.css"
import { useState } from 'react';
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../../firebase";
import { async } from '@firebase/util';

const Signup = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name : "",
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
    
        if(!name||!email||!password ){
            // alert("Fill all fields");
            setErrorMsg("Fill all fields");
            return;
        }
        else{
            setErrorMsg("")

            createUserWithEmailAndPassword(auth,email,password).then(async(res)=>{
                setsubmitButtonDisabled(true);

                // const people = res.people;
    
                // await updateProfile(people, {
                //     displayName: name
                    
                // })
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
            <h1 className={styles.heading}>signup</h1>
            <InputControl label="Name" name="name" type = "text" placeholder ="Enter Your Name" value={user.name} onChange={getData} />

            <InputControl label="Email" name="email" type ="email"  placeholder ="Enter Your Email" value={user.email} onChange={getData} />

            <InputControl label="Password" type = "password" name="password" placeholder ="Enter Your Password" value={user.password} onChange={getData} />

            <div className={styles.footer}>

                <b classNameS={styles.error}>{errorMsg}</b>

                <button type='submit' onClick={postData} disabled={submitButtonDisabled}>signup</button>

                <p>Dont have account?</p> <span><Link to="/login">Login</Link></span>
            </div>

        </div>
    </div>

  )
}

export default Signup