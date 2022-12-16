const Form = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type='text' value={value} onChange={onChange} placeholder={'할 일을 입력해주세요'} />
      <button type='submit'>추가</button>
    </form>
  );
};

export default Form;
