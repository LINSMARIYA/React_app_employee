const Button = (props)=>{
    const {label, handleClick,id,src}=props;
    return(
        <button id={id} onClick={(e)=> handleClick(e)}> {label}</button>
    );
}
export default Button; 