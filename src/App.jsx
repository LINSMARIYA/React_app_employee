//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import InputField from './components/InputField';
import TextField from './components/TextField';
import {useEffect} from 'react';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
function App() {
  return (
    <div className="App">
     
      <CreateEmployee/>
      <EmployeeList/>

    </div>
  );
}
export default App;