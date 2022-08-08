import { upload } from "@testing-library/user-event/dist/upload";

const Upload = (props)=>{
    const {mainLabel, placeholder,btnLabel,onChange,value,}=props;
    return(
        <div>
            {/* Upload Files */}
            <label>{mainLabel}</label><br/>
                <div className="browse">
                <p id="choose">{placeholder}</p>
                <label className="photo" for="upload">{btnLabel}</label>
                <input type="file" id="upload" name="photo" value = {value} onChange={(value) => onChange(upload,value)}/>
                </div>
        </div>
    );
}
export default Upload; 