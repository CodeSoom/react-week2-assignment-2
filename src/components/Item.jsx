import Button from './common/Button';

export default function Item({ deleteList, item }) {
  return (
    <div>
      {item}
      <Button onClick={deleteList}>완료</Button>
    </div>
  );
}
