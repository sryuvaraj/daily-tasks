import React, { useState } from "react";
import InputBox from "./InputBox";
import DetailsRow from "./DetailsRow";

const Form = ({ employees, setEmployees, updateEditData, isEdit, editableData, formData, setFormData, initData }: any) => {

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancle = () => {
    setFormData(initData)
  }

  const handleSubmit = () => {
    const exist = employees?.some((employee:any) => employee?.email === formData?.email)
    if(exist){
      return
    }
    setEmployees([...employees, formData]);
  };

  return (
    <div>
      <div>
        <p>First Name:</p>
        <InputBox
          type={"text"}
          name="firstName"
          value={formData?.firstName}
          handleChange={handleChange}
        />
      </div>
      <div>
        <p>Last Name:</p>
        <InputBox
          type={"text"}
          name="lastName"
          value={formData?.lastName}
          handleChange={handleChange}
        />
      </div>
      <div>
        <p>Email:</p>
        <InputBox
          type={"text"}
          name="email"
          value={formData?.email}
          handleChange={handleChange}
        />
      </div>
      <div>
        <p>Age:</p>
        <InputBox
          type={"text"}
          name="age"
          value={formData?.age}
          handleChange={handleChange}
        />
      </div>
      <div>
        <p>Role:</p>
        <InputBox
          type={"text"}
          name="role"
          value={formData?.role}
          handleChange={handleChange}
        />
      </div>
      {!isEdit ?  <button onClick={handleSubmit}>Submit</button>:
      <><button onClick={() =>updateEditData(formData?.email)}>Update</button><button onClick={handleCancle}>Cancle</button></>}
      {/* <div>
        <p>First Name:</p>
        <InputBox
          type={"text"}
          name="firstName"
          value={formData?.firstName}
          handleChange={handleChange}
        />
      </div> */}
    </div>
  );
};

export default Form;
