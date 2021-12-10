import Item from './Item';

export default function List({ list, handleDeleteList }) {
  const hasList = list.length > 0;

  function renderList() {
    return list.map((v) => (
      <Item
        key={v}
        item={v}
        handleDeleteList={() => handleDeleteList(v)}
      />
    ));
  }

  return (
    <div>
      {hasList ? renderList() : <p>할 일이 없어요!</p>}
    </div>
  );
}
