import React from 'react';
import InputField from '../components/InputField';
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function EmployeeList() {
    
    const navigate= useNavigate();
    
   const goToNextPage =()=>{
        navigate('/create');
        }
    const Employee = [
    {
        "EmployeeName": "Vishal M",
        "EmployeeID": "Lazada", 
        "JoiningDate": "12.04.2021",
        "Role": "Full Stack",
        "Status": "Probation",
        "Experience": "5 years",
        "Address": "No:C-9, T.V.K Industrial Estate, Kerala 600032",
        "EmployeeIDProof": "true"
    },
    {
        "EmployeeName": "Susan Kurian",
        "EmployeeID": "XYZ", 
        "JoiningDate": "12.04.2021",
        "Role": "UI Engineer",
        "Status": "Probation",
        "Experience": "7 years",
        "Address": "No:C-9, T.V.K Industrial Estate, Kerala 600032",
        "EmployeeIDProof": "true"
    },
    {
        "EmployeeName": "Yugesh",
        "EmployeeID": "XYZ1", 
        "JoiningDate": "12.04.2021",
        "Role": "Devops",
        "Status": "Active",
        "Experience": "6 years",
        "Address": "No:C-9, T.V.K Industrial Estate, Kerala 600032",
        "EmployeeIDProof": "true"
    }
  ];
  return (
    <div>
    <ul>
          {Employee.map((data) => (
              <li key={data.EmployeeID}>
                  <InputField placeholder={data.EmployeeName} />
                  <InputField placeholder={data.EmployeeID} />
                  <InputField placeholder={data.JoiningDate} />
                  <InputField placeholder={data.Role} />
                  <InputField placeholder={data.Status} />
                  <InputField placeholder={data.Experience} />
                  <InputField placeholder={data.Address} />
                  <InputField placeholder={data.EmployeeIDProof} />
                  
                  <br /> </li>
          ))}
      </ul>

      <Button
        label="Cancel"
        handleClick={goToNextPage}
        />
</div>
    
  );
}

export default EmployeeList;
