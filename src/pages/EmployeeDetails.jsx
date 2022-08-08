import Sidebar from "../components/Sidebar";
import Heading from "../components/Heading";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { useGetEmployeeByIdQuery } from "../services/baseApi";
import {DetailElement,AddressDetailElement} from "../components/DetailElement";
import {useState,useEffect} from "react";


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
        <section>
        <Heading name="Employee Details"/>
        <span className="right">
        <Button label="Edit" handleClick={()=>goToNextPage()}/>
        </span>
        </section>
        <div >
            <DetailElement className="Details" label="Employee Name" value={state.name}/>
            <DetailElement className="Details" label="Employee ID" value={state.id}/>
            <DetailElement className="Details" label="Joining Date" value={state.name}/>
            <DetailElement className="Details" label="Role" value={state.role}/>
            <DetailElement className="Details" label="Status" value={state.status}/>
            <DetailElement className="Details" label="Experience" value={state.experience}/>
            <AddressDetailElement className="Details" label="Address" value1={state.line1 } value2={state.line2} value3={state.city} value4={state.state}value5={state.country} value6={state.pincode}/>

        </div>
    </main>
    </div>
)
}
export default EmployeeDetails;