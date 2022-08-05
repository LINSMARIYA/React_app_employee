import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Login=()=>{
    const navigate= useNavigate();
    const goToNextPage =()=>{
        navigate('/list');
    }
    return(
        <Button
        label="Next"
        handleClick={goToNextPage}
        />
    );
}
export default Login;