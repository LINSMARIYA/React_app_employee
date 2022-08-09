import "./Details.css";
const DetailElement=(props)=>{
    const {label,value,id }=props;
    return(
        <div>
            <div className="label">{label}</div>
            <div  id={id} className="value" >{value}</div>
        </div>
    )
}
const AddressDetailElement=(props)=>{
    const {label,value1,value2,value3,value4,value5,value6,className}=props;
    return(
        <div>
            <div className="label">{label}</div>
            <div className={className}>{value1},<br/> {value2}, <br/>{value3}, {value4},<br/>{value5}, {value6}</div>
        </div>
    )
}

export {DetailElement ,AddressDetailElement};