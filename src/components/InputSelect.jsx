
const InputSelect = ({
    label,
    onChange,
    value,
    name,
    id,
    options,
    elemName,
}) => {
    return (
        <div className="select" id={id} elemName={elemName} value={value} name={name} onChange={(event)  => onChange(event.target.value)}>
            <label>{label}</label><br/>
            <select name={label}>
                {
                    options.map((item)=>(
                      <option key={item.key} selected={item.key === value}>{item.label}</option>  
                    ))
                }
            </select><br/>        
            
        </div>
    );
};
export default InputSelect;