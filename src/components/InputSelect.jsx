
const InputSelect = ({
    label,
    onChange,
    value,
    name,
    id,
    options,
}) => {
    return (
        <div className="input" id={id}  value={value} name={name} onChange={(event)  => onChange(event.target.value)}>
            <label>{label}</label><br/>
            <select name={label}>
                {
                    options.map((item)=>(
                      <option key={item.key}>{item.label}</option>  
                    ))
                }
            </select><br/>        
            
        </div>
    );
};
export default InputSelect;