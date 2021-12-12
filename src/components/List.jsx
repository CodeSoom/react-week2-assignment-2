import Item from './Item';

export default function List({ list, handleDeleteList }) {
  const hasList = list.length > 0;

  function renderList() {
    if (!hasList) {
      return <p>할 일이 없어요!</p>;
    }

    return list.map((v) => (
      <Item
        key={v}
        item={v}
        handleDeleteList={() => handleDeleteList(v)}
      />
    ));
  }

  return <div>{renderList()}</div>;
}
