import React, { useState } from "react";
import Form from "./Form";
import DetailsTable from "./DetailsTable";

const FormHome = () => {
  const initData = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    role: "",
  };

  const [formData, setFormData] = useState<any>(initData);

  const [isEdit, setIsEdit] = useState<any>(false);
  const [editableData, setEditableData] = useState<any>({});
  const updateEditData = (email: any) => {
    const updated = employees?.map(
      (employee: any) => {
        if(employee?.email === email){
          return formData
        }
        else{
          return employee
        }
      }
    );
    setEmployees(updated)
    setFormData(initData)
    setEditableData(initData)
  };
  const [employees, setEmployees] = useState<any>([]);
  return (
    <div>
      <div>
        <Form
          employees={employees}
          setEmployees={setEmployees}
          updateEditData={updateEditData}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editableData={editableData}
          setEditableData={setEditableData}
          formData={formData}
          setFormData={setFormData}
          initData={initData}
        />
      </div>
      <div>
        <DetailsTable
          employees={employees}
          setEmployees={setEmployees}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editableData={editableData}
          setEditableData={setEditableData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

export default FormHome;
