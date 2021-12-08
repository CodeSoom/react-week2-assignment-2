export default function TodoList({ texts, onClick }) {
  if (!texts.length) return (<div>할 일이 없어요!</div>);
  return (
    <div>
      <ol>
        {texts.map((text) => (
          <div key={text}>
            <li>
              {text}
              <button type="button" onClick={() => onClick(text)}>완료</button>
            </li>
          </div>
        ))}
      </ol>
    </div>
  );
}
