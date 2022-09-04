import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddNewExpense = () => {
  const navigate = useNavigate();
  return (
    <Button
      style={{ marginBottom: "10px" }}
      onClick={() => {
        navigate("/expense/new");
      }}
    >
      Add
    </Button>
  );
};

export default AddNewExpense;
