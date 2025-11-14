import React, { useState } from "react";
import List from "./List";

const Home = () => {
  const initState = {
    taskName: "",
    isCompleted: false,
  };
  const [formData, setFormData] = useState<any>(initState);
  const [list, setList] = useState<any>([]);
  const [isEdit, setisEdit] = useState<any>(false);
  const [editableTask, setEditableTask] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    const id = Math.floor(Math.random() * 10000);
    setList([...list, { ...formData, id: id }]);
    setFormData(initState);
  };

  const handleCompleted = (id: any) => {
    const updated = list?.map((item: any) => {
      if (item?.id === id) {
        if (item?.isCompleted) {
          return { ...item, isCompleted: false };
        } else {
          return { ...item, isCompleted: true };
        }
      } else {
        return item;
      }
    });
    setList(updated);
    // console.log(updated)
  };

  const handleEdit = (id: any) => {
    console.log(id, "ir");
    const item = list?.find((item: any) => item?.id === id);
    setEditableTask(item);
    console.log(item, "rwguin  ");
    setisEdit(true);
    const updated = list?.filter((item: any) => item?.id != id);
    setList(updated);
  };

  const handleChangeUpdate = (e: any) => {
    const { name, value } = e.target;
    setEditableTask({ ...editableTask, [name]: value });
  };

  const handleUpdate = () => {
    setList([...list, editableTask]);
    setEditableTask(initState);
  };

  const handleDelete = (id: any) => {
    const updated = list?.filter((item: any) => item?.id != id);
    setList(updated);
  };

  console.log(editableTask, "edit", list);

  return (
    <div>
      <div>
        {!isEdit ? (
          <>
            <input
              type="text"
              placeholder="type task"
              value={formData?.taskName}
              name="taskName"
              onChange={handleChange}
            />
            <button onClick={() => handleAdd()}>Add Task</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="type update task"
              value={editableTask?.taskName}
              name="taskName"
              onChange={handleChangeUpdate}
            />
            <button onClick={() => handleUpdate()}>Add Task</button>
          </>
        )}
      </div>
      <div>
        <List
          list={list}
          handleCompleted={handleCompleted}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Home;
