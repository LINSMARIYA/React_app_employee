import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import Button from "../components/Button";

const CreateEmployee=()=>{
    return(
    
        <form className="form" >
            <div className="input">
                <InputField className="enter" type="text" id="Name" name="Employee Name" placeholder="Employee Name" label="Employee Name :"/><br/>
            </div><br/>
            <div>
                <InputField className="enter" type="text" id="ID" name="Employee ID" placeholder="Employee ID" label="Employee ID :"/><br/>
            </div><br/>
            <div>
                <InputField className="enter" type="text" id="Date" name="Joining Date" placeholder="Joining Date" label="Employee ID :"/><br/>
            </div><br/>
            <div >
            <InputSelect
                    label="Role :" id="Role" 
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
                    label="Status :" id="Status" 
                    options ={[
                        {key:'status', label:'' },
                        {key:'Probation', label:'Probation'},
                        {key:'Active', label:'Active'},
                        {key:'Inactive', label:'Inactive'}
                    ]}
                    />  
            </div><br/>
            <div className="input">
                <InputField className="enter" type="number" id="Experience" name="Experience" placeholder="Experience" label="Experience :"/><br/>
            </div><br/>
            <div>
                <InputField className="enter" type="text" id="Address" name="Address" placeholder="Address" label="Address :"/><br/>
            </div><br/>
            <div>
                <InputField className="enter" type="text" id="Address" name="Address" placeholder="Address" label="Address :"/><br/>
            </div><br/>
            <div>
                <InputField className="browse" type="file" id="Address" name="Address" placeholder = "Choose a file" label="Upload ID Proof"/>
                
            </div><br/>
            <Button
        className="button"
        label="Create"
        handleClick={''}
        />
        <Button
        className="button"
        label="Cancel"
        handleClick={''}
        />
        </form>
        );
    
    }

    export default CreateEmployee;


      