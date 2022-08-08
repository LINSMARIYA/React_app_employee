import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useLoginEmployeeMutation } from "../services/baseApi";
import { useEffect, useState } from "react";
import  setStorage  from "../services/util";

const Login=()=>{
    const navigate= useNavigate();
    const goToNextPage =()=>{
        navigate('/list');
    }
    const [LoginFunction, result] = useLoginEmployeeMutation();
    const [state, setState] = useState({ 
        username:"",
        password:"",
    });
    const onChangeValue = (key, value) =>{
        setState({
            ...state,
            [key]: value,
        })
    }
     const onClickLogin=()=>{
        const body={
            username:state.username,
            password:state.password
        }
           // const response = await loginfunction(payload).unwrap();
        // setStorage("idToken",response?.data?.idToken);
        LoginFunction(body)
    }
    useEffect(()=>{
        if(result.isSuccess){
            setStorage("idToken",result?.data?.data?.idToken)
            navigate('/list');
        }
    })
    console.log(result);
        
    return(
        <div className="login-main" >
          <div className="login-section"  style={{backgroundColor: "#e3f7fe"}}>
         <img className="img-login"  alt=""/> 
         </div>
          <div className="login-section"  style={{backgroundColor: "#00400"}}>
          <div className="input">
                <InputField  type="text" id="username" name="username" placeholder="Username " label="Username "onChange={(value) => onChangeValue("username", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="password" id="password" name="password" placeholder="Password" label="Password" onChange={(value) => onChangeValue("password", value)}/><br/>
            </div><br/>

           
       
        <Button
        label="Login"
        handleClick={()=>onClickLogin(goToNextPage())}
        />
        </div>

        </div>
       
   
    );
}

export default Login;