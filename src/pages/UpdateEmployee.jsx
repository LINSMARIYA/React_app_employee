import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import "../styles/style.css";
import Upload from "../components/Upload";
import Sidebar from "../components/Sidebar";
import Heading from '../components/Heading'
import {useGetEmployeeByIdQuery, useUpdateEmployeeByIdMutation } from "../services/baseApi";
import { useNavigate, useParams } from "react-router-dom";


const UpdateEmployee=()=>{

    const navigate=useNavigate();
    let {id}=useParams();
    const { data, error, isLoading } = useGetEmployeeByIdQuery(id)
    
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

    useEffect(() => {
        if(data?.data) {
            setState({
                    name: data.data.name,
                    departmentId:data.data.departmentId,
                    id:data.data.id,
                    date: data.data.dateOfJoining,
                    role:data.data.role,
                    status:data.data.status,
                    experience:data.data.experience,
                    line1:data.data.address.line1,
                    line2:data.data.address.line2,
                    city:data.data.address.city,
                    state:data.data.address.state,
                    country:data.data.address.country,
                    pincode:data.data.address.pincode
            })
        }
    }, [data]);
    
    //console.log(result)
    
    const [UpdateEmployeeById, result] = useUpdateEmployeeByIdMutation()

    if(result.isSuccess){
        navigate("/list");
    }
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
        <section>
        <Heading name="Update Employee"/>
        </section>
        <section> 
        <div className="form" >
            <div className="input">
                <InputField  type="text" id="name" name="Employee Name" placeholder="Employee Name" label="Employee Name " value={state.name} onChange={(value) => onChangeValue("name", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="text" id="id" name="Employee ID" placeholder="Employee ID" label="Employee ID " value={state.id} onChange={(value) => onChangeValue("id", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="text" id="date" name="Joining Date" placeholder="Joining Date" label="Joining Date " value={state.date}  onChange={(value) => onChangeValue("date", value)}/><br/>
            </div><br/>
            <div className="input">
            <InputSelect
                    label="Role " name="role" id="role" value={state.role} onChange={(value) => onChangeValue("role", value)}
                    options ={[
                        {key:'Role', label:''},
                        {key:'Developer', label:'Developer'},
                        {key:'QA', label:'QA'},
                        {key:'DEVOPS', label:'Dev Ops'},
                        {key:'admin', label:'admin'},
                        {key:'hr', label:'hr'}
                    ]}
                    />  
            </div><br/>
            <div className="input" >
            <InputSelect
                    label="Status " name="status" id="status" value={state.status} onChange={(value) => onChangeValue("status", value)}
                    options ={[
                        {key:'status', label:'' },
                        {key:'Probation', label:'Probation'},
                        {key:'Active', label:'Active'},
                        {key:'Inactive', label:'Inactive'}
                    ]}
                    />  
            </div><br/>
            <div className="input">
                <InputField  type="number" id="experience" name="Experience" placeholder="Experience" label="Experience " value={state.experience}onChange={(value) => onChangeValue("experience", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="text" id="line1" name="line1" placeholder="line1" label="Address Line 1" value={state.line1} onChange={(value) => onChangeValue("line1", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="text" id="line2" name="line2" placeholder="Line 2" label="Address Line 2 " value={state.line2} onChange={(value) => onChangeValue("line2", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="text" id="city" name="city" placeholder="city" label="City" value={state.city} onChange={(value) => onChangeValue("city", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="text" id="state" name="state" placeholder="state" label="State"value={state.state} onChange={(value) => onChangeValue("state", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="text" id="country" name="country" placeholder="country" label="Country" value={state.country} onChange={(value) => onChangeValue("country", value)}/><br/>
            </div><br/>
            <div className="input">
                <InputField  type="number" id="pincode" name="pincode" placeholder="pincode" label="Pincode" value={state.pincode} onChange={(value) => onChangeValue("pincode", value)}/><br/>
            </div><br/>
            <div className="input" >
            <Upload mainLabel="Upload Id Proof" placeholder="Choose a file" btnLabel="Browse" />
            </div><br/>


            <div className="button">
            <Button
        className="button"
        label="Update"
        id="btn_create"
        handleClick={() => UpdateEmployeeById({
            name: state.name,
            id:state.id,
            username:"dummy",
            password:"dummy",
            departmentId:"46d51222-4169-4e00-8add-dc77f58a4ac7",
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

    export default UpdateEmployee;


      