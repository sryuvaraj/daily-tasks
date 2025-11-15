import React, { useState } from "react";
import DetailsRow from "./DetailsRow";

const DetailsTable = ({ employees, setEmployees, setIsEdit, setEditableData, setFormData ,editableData }: any) => {

    const handleDelete = (email:any) => {
        const updated = employees?.filter((employee:any) => employee?.email != email)
        setEmployees(updated)
    }


    const handleEdit = (email:any) => {
        const editData = employees?.find((employee:any) => employee?.email===email)
        setIsEdit(true)
        alert(editData?.email)
        setEditableData(editData)
        setIsEdit(true);
setFormData(editData);  
    }

  return (
    <div>
      <div>
        {employees?.map((employee: any, index: number) => (
          <div key={index}>
            <DetailsRow employee={employee} handleDelete={handleDelete} handleEdit={handleEdit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsTable;
