import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import { useLoginEmployeeMutation } from "./LoginApi";
import { useEffect, useState } from "react";
import  {setStorage}  from "../../services/util";
import "./Login.css";
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
        //const response = LoginFunction(body).unwrap();
        //setStorage("idToken",response?.data?.idToken);
        LoginFunction(body)
    }
    useEffect(()=>{
        if(result.isSuccess){
            console.log(result.data.data.idToken)
            setStorage("idToken",result.data.data.idToken)
           
            navigate('/list');
        }
    })
    console.log(result);
        
    return(
        <div className="loginmain" >

          <div className="loginsection"  style={{backgroundColor: "#e3f7fe"}}>
         <img className="imglogin" src={require("../../images/bg.png" )}alt=""/> 
         </div>

          <div className="logininput"  style={{backgroundColor: "#00400"}}>

          <img src={require("../../images/kv logo.png")} alt="This is KeyValue logo"/>
          <div className="user">
                <InputField  type="text" id="username" name="username" placeholder="Username " label="Username "onChange={(value) => onChangeValue("username", value)}/><br/>
            </div><br/>
            <div className="pass">
                <InputField  type="password" id="password" name="password" placeholder="Password" label="Password" onChange={(value) => onChangeValue("password", value)}/><br/>
            </div><br/>
        
        <Button id="loginbtn"
        label="Login" 
        handleClick={()=>onClickLogin()}
        />
      
        </div>

        </div>
       
   
    );
}

export default Login;