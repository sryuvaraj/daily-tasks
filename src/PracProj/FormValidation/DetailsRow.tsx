import React from "react";

const DetailsRow = ({ employee, handleDelete, handleEdit }: any) => {
  return (
    <div className="flex items-center gap-4">
      <p>{employee?.firstName}</p>
      <p>{employee?.lastName}</p>
      <p>{employee?.email}</p>
      <p>{employee?.age}</p>
      <p>{employee?.role}</p>
      <p onClick={() => handleEdit(employee?.email)}>Edit</p>
      <p onClick={() => handleDelete(employee?.email)}>delte</p>
    </div>
  );
};

export default DetailsRow;
