import Button from './common/Button';
import TextInput from './common/TextInput';

export default function AddTodo({
  text,
  setText,
  list,
  handleAddList,
}) {
  function onClickButton() {
    if (text === '') {
      return;
    }

    if (list.includes(text)) {
      return;
    }

    handleAddList(text);
    setText('');
  }

  return (
    <div>
      <TextInput value={text} onChange={setText} />
      <Button onClick={onClickButton}>추가</Button>
    </div>
  );
}
