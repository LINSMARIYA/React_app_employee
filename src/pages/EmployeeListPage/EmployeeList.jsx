import React from 'react';
import "./EmployeeList.css"
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Sidebar from '../../components/Sidebar/Sidebar';
import { useDeleteEmployeeByIdMutation, useGetEmployeeQuery } from './EmployeeListApi';
import Heading from '../../components/Heading/Heading';
import {MdOutlineDelete,MdOutlineEdit} from "react-icons/md"
// import InputSelect from '../../components/InputSelect/InputSelect';


const EmployeeList=({})=>{

  

    const { data, error, isLoading } = useGetEmployeeQuery()
    const navigate= useNavigate();

    let {id}=useParams();
    const [DeleteEmployeeById, result] = useDeleteEmployeeByIdMutation(id)
   
   const goToNextPage =(url)=>{
        navigate(url ? url : '/create');
        }
        
        
  return (
   
    <div>
    <Sidebar/>
    <main>
    <section className='createEmp'>
    <Heading name="Employee List"/>

    <div>Filter By</div>

    <div className='parent'>
    <img className='image2' src={require("../../images/circle.png")}/>
    <img className='image1' src={require("../../images/plus.png")}/>
    <div  className="emp">

    <Button label="Create Employee" handleClick={() => goToNextPage()}></Button></div>
    </div>

    

    {/* <div> */}
    {/* <InputSelect label="Filter By " id="filter"  onChange={(value) => onChangeValue("filter", value)}
                    options ={[
                        {key:'id', label:'ID'},
                        {key:'name', label:'namr'},
                        {key:'date', label:'date'},
                        {key:'experience', label:'Experience'}
                    ]}
                    />   */}
            

    {/* </div> */}
    </section>
    




    <div className="table-div">
      <table>
      
      <tr className="list-element">
            <th className="list-head">Employee Name</th>
            <th className="list-head">Employee ID</th>
            <th className="list-head">Joining Date</th>
            <th className="list-head">Role</th>
            <th className="list-head">Status</th>
            <th className="list-head">Experience</th>
            <th className="list-head">Action</th>
      </tr>
      
      
     
 
           {data && data.data.map(user => (
        <tr key={user.id} id="element" className="list-element" style={{backgroundColor: "white"}} onClick={()=>goToNextPage(`/details/${user.id}`)}>
             
                  <td className="list-head">{user.name}</td>
                  <td className="list-head">{user.id}</td>
                  <td className="list-head">{user.dateOfJoining}</td>
                  <td className="list-head">{user.role}</td>
                  <td id={user.status} className="list-head">{user.status} </td>
                  <td className="list-head">{user.experience} Years</td>
                  <td className="list-head">
          
        <MdOutlineDelete className='del-icon' onClick={(e)=>{e.stopPropagation(); DeleteEmployeeById(user.id)}}/>
        <MdOutlineEdit className='edit-icon' onClick={(e)=>{e.stopPropagation();navigate(`/update/${user.id}`)}}/>
                  </td>
                 
                   </tr>
          ))}
     
      
      </table>
      </div>      
        </main>
        </div>
    
  );
}

export default EmployeeList;
