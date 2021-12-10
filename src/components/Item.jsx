import Button from "./common/Button";

export default function Item({ deleteList, item }) {
  function onClickButton() {
    deleteList(item);
  }
  return (
    <div>
      {item}
      <Button onClick={onClickButton}>완료</Button>
    </div>
  );
}
