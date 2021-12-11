function Input({
  type, name, placeholder, handleChange, todoItem,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      value={todoItem}
    />
  );
}

export default Input;
