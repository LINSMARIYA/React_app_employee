
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
        <div className="input">
            <label>{label}</label>
            <input type={type} id={id} placeholder={placeholder} name={name} value = {value} onChange={(event) => onChange(event.target.value)} />
        </div>
    );
};
export default InputField;