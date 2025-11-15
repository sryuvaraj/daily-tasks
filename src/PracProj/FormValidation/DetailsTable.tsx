import React, { useEffect, useState } from "react";
import DetailsRow from "./DetailsRow";
import InputBox from "./InputBox";

const DetailsTable = ({
  employees,
  setEmployees,
  setIsEdit,
  setEditableData,
  setFormData,
  editableData,
}: any) => {

  const [searchText, setSearchText] = useState<any>("")
  const [filteredEmployees, setFilteredEmployees] = useState<any>([])

  const handleDelete = (email: any) => {
    const updated = employees?.filter(
      (employee: any) => employee?.email != email
    );
    setEmployees(updated);
  };

  const handleEdit = (email: any) => {
    const editData = employees?.find(
      (employee: any) => employee?.email === email
    );
    setIsEdit(true);
    alert(editData?.email);
    setEditableData(editData);
    setIsEdit(true);
    setFormData(editData);
  };

  const handleSearch = (e:any) => {
    const filtered = employees?.filter((employee:any) => employee?.email.toLowerCase().includes(e.target.value.toLowerCase()) )
    setFilteredEmployees(filtered)
    setSearchText(e.target.value)
  }

    useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);


  return (
    <div>
      <InputBox value={searchText} name={"searchText"} handleChange={handleSearch} type={"text"} placeHolder={"type to serach"} />
      <div>
        <p>{employees?.length}</p>
        {filteredEmployees?.map((employee: any, index: number) => (
          <div key={index}>
            <DetailsRow
              employee={employee}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsTable;
