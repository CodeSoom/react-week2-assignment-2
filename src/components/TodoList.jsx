export default function TodoList({ data, onClick }) {
  const style = { display: 'flex', alignItems: 'center' };

  return (
    <>
      {data.length < 1 ? (
        <p>할 일을 등록해주세요.</p>
      ) : (
        <div>
          {data.map((item) => (
            <div style={style} key={item.idx}>
              <p>
                {item.idx}
                .
                {item.toDo}
              </p>
              <button type="button" onClick={() => onClick(item)}>완료</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
