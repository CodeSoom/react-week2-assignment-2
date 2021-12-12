import Button from './common/Button';

export default function Item({ handleDeleteList, item }) {
  return (
    <div>
      {item}
      <Button onClick={handleDeleteList}>완료</Button>
    </div>
  );
}
