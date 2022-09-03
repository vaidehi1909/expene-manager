import { Button } from "antd";
import React from "react";
import { useNavigate } from 'react-router-dom';

const AddNewExpens = () => {

    const navigate = useNavigate();
return(<Button style={{ marginBottom : '10px' }} onClick= {() =>{ navigate("/createexpense") }}>Add</Button>);
}

export default AddNewExpens;