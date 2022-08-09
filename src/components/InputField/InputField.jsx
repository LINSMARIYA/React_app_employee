import "./InputField.css"
const InputField = ({
    label,
    onChange,
    value,
    placeholder,
    type,
    id,
    name
}) => {
    return (
        <div >
            <label>{label}</label><br/>
            <input className="enter" type={type} id={id} placeholder={placeholder} name={name} value = {value} onChange={(event) => onChange(event.target.value)} />
        </div>
    );
};
export default InputField;