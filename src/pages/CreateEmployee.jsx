import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import Button from "../components/Button";
import { useState } from "react";
import "../styles/style.css";
import Upload from "../components/Upload";
import Sidebar from "../components/Sidebar";
import Heading from '../components/Heading'
import { useCreateEmployeeMutation } from "../services/baseApi";
import { useNavigate } from "react-router-dom";

const CreateEmployee=()=>{
    const navigate =useNavigate();
    const [state, setState] = useState({
        name: "",
        username:"",
        password:"",
        departmentId:"",
        address:"",
       // id:"",
        date: "",
        role:"",
        status:"",
        experience:"",
        line1:"",
        line2:"",
        city:"",
        state:"",
        country:"",
        pincode:""

    });
    const [CreateEmployee, result] = useCreateEmployeeMutation()
    if(result.isSuccess){
        navigate('/list');
    }
    //console.log(result)
    const onChangeValue = (key, value) =>{
        setState({
            ...state,
            [key]: value,
        })
    }
    return(
        <div>
        <Sidebar/>
        <main>
        <section >
        <Heading name="Create Employee"/>
        </section>
        <section> 
        <div className="form" >
            <div className="input">
                <InputField  type="text" id="name" name="Employee Name" placeholder="Employee Name" label="Employee Name "onChange={(value) => onChangeValue("name", value)}/><br/>
            </div><br/>
           
            <div className="input">
                <InputField  type="text" id="date" name="Joining Date" placeholder="Joining Date" label="Joining Date " onChange={(value) => onChangeValue("date", value)}/><br/>
            </div><br/>
            <div className="input">
            <InputSelect
                    label="Role " id="role" onChange={(value) => onChangeValue("role", value)}
                    options ={[
                        {key:'Role', label:''},
                        {key:'DEV', label:'Developer'},
                        {key:'QA', label:'QA'},
                        {key:'DEVOPS', label:'Dev Ops'}
                    ]}
                    />  
            </div><br/>
            <div className="input" >
            <InputSelect
                    label="Status " elemName={state.value} id="status" onChange={(value) => onChangeValue("status", value)}
                    options ={[
                        {key:'status', label:'', className:"Active"},
                        {key:'Probation', label:'Probation'},
                        {key:'Active', label:'Active' , statusId:"Active"},
                        {key:'Inactive', label:'Inactive'}
                    ]}
                    />  
            </div><br/>
            <div className="input">
                <InputField  type="number" id="experience" name="Experience" placeholder="Experience" label="Experience " onChange={(value) => onChangeValue("experience", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="text" id="line1" name="line1" placeholder="line1" label="Address Line 1" onChange={(value) => onChangeValue("line1", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="text" id="line2" name="line2" placeholder="Line 2" label="Address Line 2 " onChange={(value) => onChangeValue("line2", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="text" id="city" name="city" placeholder="city" label="City" onChange={(value) => onChangeValue("city", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="text" id="state" name="state" placeholder="state" label="State" onChange={(value) => onChangeValue("state", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="text" id="country" name="country" placeholder="country" label="Country" onChange={(value) => onChangeValue("country", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="number" id="pincode" name="pincode" placeholder="pincode" label="Pincode" onChange={(value) => onChangeValue("pincode", value)}/><br/>
            </div><br/>
            <div className="input" >
            <Upload mainLabel="Upload Id Proof" placeholder="Choose a file" btnLabel="Browse" />
            </div><br/>


            <div className="button">
            <Button
        className="button"
        label="Create"
        id="btn_create"
        handleClick={() => CreateEmployee({
            name: state.name,
            // id:"b99f4618-bc2d-4931-8ce5-4e614292b987",
            username:"dummy",
            password:"dummy",
            departmentId:"2cb6495b-ac64-4793-b6ee-ae5cb99c5589",
            role:state.role,
            dateOfJoining:state.date,
            status:state.status,
            experience:Number(state.experience),
            address:{
            line1:state.line1,
            line2:state.line2,
            city:state.city,
            state:state.state,
            country:state.country,
            pincode:Number(state.pincode)
            }
        })}
        />
        <Button
        className="button"
        label="Cancel"
        id="btn_cancel"
        handleClick={()=>navigate("/list")}
        />
        </div>
        </div>
        </section>
        </main>
        </div>
        
        );
    
    }

    export default CreateEmployee;


      