import React, { useRef } from "react";

interface INewTodoForm {
  //   value: string;
  //   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (text: string) => void;
}

const NewTodoForm = ({ handleClick }: INewTodoForm) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="new todo"
        ref={inputRef}
        // value={value}
        // onChange={onChange}
      />
      <button onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewTodoForm;
