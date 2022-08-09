import Sidebar from "../../components/Sidebar/Sidebar";
import Heading from "../../components/Heading/Heading";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
// import { useGetEmployeeByIdQuery } from "../../services/baseApi";
import { useGetEmployeeByIdQuery } from "./EmployeeDetailsApi";
import {DetailElement,AddressDetailElement} from "../../components/Details/Details";
import {useState,useEffect} from "react";
import "./EmployeeDetails.css"

function EmployeeDetails(){
    let {id}=useParams();
    const { data, error, isLoading } = useGetEmployeeByIdQuery(id)
    const navigate= useNavigate();
    
    const goToNextPage =(url)=>{
        navigate(url ? url : `/update/${id}`);
    }
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
    
return(
    <div>
    <Sidebar/>
    <main>

        <section className='createEmp'>
        <Heading name="Employee Details"/>

        <div className='parent'>
        <img className='image2' src={require("../../images/circle.png")}/>
        <img className='image3' src={require("../../images/pen.png")}/>
        <div  className="emp">
        
        <Button label="Edit" handleClick={() => goToNextPage()}></Button></div>
        </div>
  
    </section>
    <div className="mainDetails">
        <div className="Details-up" >
            <DetailElement  label="Employee Name" value={state.name}/>
            <DetailElement  label="Employee ID" value={state.id}/>
            <DetailElement  label="Joining Date" value={state.date}/>
            <DetailElement  label="Role" value={state.role}/>
            <DetailElement  id={state.status} label="Status" value={state.status}/>
            <DetailElement  label="Experience" value={state.experience}/>
           
        </div>
        <hr/>
        <div className="Details-down" >
        <div className= "detai2">
        <AddressDetailElement  label="Address" value1={state.line1 } value2={state.line2} value3={state.city} value4={state.state}value5={state.country} value6={state.pincode}/>
        </div>
        
        <DetailElement  label="Employee ID proof" value={state.experience}/>
        </div>
        </div>
    </main>
    </div>
)
}
export default EmployeeDetails;