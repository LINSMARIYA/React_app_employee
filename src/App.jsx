//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Button from './components/Button/Button.jsx';
// import InputField from './components/InputField';
// import TextField from './components/TextField';
// import {useEffect} from 'react';
import CreateEmployee from './pages/CreateEmployeePage/CreateEmployee';
import EmployeeList from './pages/EmployeeListPage/EmployeeList';
// import Counter from './pages/Counter';
function App() {
  return (
    <div className="App">
     
      <CreateEmployee/>
      <EmployeeList/>
      <Counter/>
    </div>
  );
}
export default App;