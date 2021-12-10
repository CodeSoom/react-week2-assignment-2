import Item from "./Item";

export default function List({ list, deleteList }) {
  const hasList = Boolean(list.length);

  function renderList() {
    return list.map((v) => (
      <Item
        key={v}
        item={v}
        deleteList={() => deleteList(v)}
      />
    ));
  }

  return (
    <div>
      {hasList ? renderList() : <p>할 일이 없어요!</p>}
    </div>
  );
}
