import React from "react";

const List = ({ list, handleCompleted, handleEdit, handleDelete }: any) => {
  console.log(list, "ruigergei");
  return (
    <div>
      <p>{list?.length}</p>
      <div>
        {list.length > 0 &&
          list?.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-3">
              <p>{item?.id}</p>
              <p className={`${item?.isCompleted ? "line-through" : ""}`}>
                {item?.taskName}
              </p>
              <p onClick={() => handleCompleted(item?.id)}>
                {item?.isCompleted ? "Not Completed" : "Completed"}
              </p>
              <p onClick={() => handleEdit(item?.id)}>Edit</p>
              <p onClick={() => handleDelete(item?.id)}>Delete</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
