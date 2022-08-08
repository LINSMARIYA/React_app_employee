import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Sidebar from '../components/Sidebar';
import { useDeleteEmployeeByIdMutation, useGetEmployeeQuery } from '../services/baseApi';
import Heading from '../components/Heading';



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
    <section>
    <Heading name="Employee List"/>
    <Button label="Create Employee" handleClick={() => goToNextPage()} />
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
                  <td className="list-head">{user.status}</td>
                  <td className="list-head">{user.experience}</td>
                  <td className="list-head">
                  <a href={`/update/${user.id}`}><Button
        className="button"
        label="Edit"
        id="btn_cancel"
        handleClick={''}
        /></a>
                  <Button
        className="button"
        label="Delete"
        id="btn_cancel"
        handleClick={(e)=>{e.stopPropagation(); DeleteEmployeeById(user.id) }
          
        }
        />
                  </td>
                 
                   </tr>
          ))}
     
      
      </table>
      </div>
      
  
   
    {/* <section className="list-element">

          

    </section> */}
    {/* <ul>
    {data && data.data.map(user => (
              <div key={user.EmployeeID}>
                {user.name}<br/> 
                {user.id} <br/> 
                {user.dateOfJoining}<br/> 
                {user.role} <br/> 
                {user.status}<br/> 
                {user.experience}<br/> 
                {user.addressId}<br/> 
                {user.employeeId}<br/> 

                  <br /> </div>
          ))}
      </ul> */}

      
        </main>
        </div>
    
  );
}

export default EmployeeList;
