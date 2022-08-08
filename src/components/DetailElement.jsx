// import "../styles/style.css";
const DetailElement=(props)=>{
    const {label,value}=props;
    return(
        <div>
            <div className="label">{label}</div>
            <div className="value">{value}</div>
        </div>
    )
}
const AddressDetailElement=(props)=>{
    const {label,value1,value2,value3,value4,value5,value6}=props;
    return(
        <div>
            <div className="label">{label}</div>
            <div className="value">{value1}, {value2}, <br/>{value3}, {value4},<br/>{value5}, {value6}</div>
        </div>
    )
}

export {DetailElement ,AddressDetailElement};