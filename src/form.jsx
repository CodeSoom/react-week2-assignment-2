const Form = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type='text' value={value} onChange={onChange} />
      <button type='button'>추가</button>
    </form>
  );
};

export default Form;
