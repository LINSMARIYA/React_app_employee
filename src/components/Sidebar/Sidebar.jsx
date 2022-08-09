import "./Sidebar.css"
const Sidebar=()=>{
    return(
        <div>
        <nav className="sidebar">
        <header className="logo">
        <img src={require("../../images/kv logo.png")} alt="This is KeyValue logo"/>
        </header>
        <aside>
        <a href="/list" className="list">
        <img className="img-list"  alt=""/><span className="tab">Employee list</span>
        </a>
        </aside>
        </nav>
        </div>
    );
}
export default Sidebar;