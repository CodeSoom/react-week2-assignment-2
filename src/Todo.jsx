import Button from './Button';

export default function Todo({ children, index, onClick }) {
  return (
    <div>
      <span>
        {index + 1}
        .
        {children}
      </span>

      <Button onClick={() => onClick(index)}>
        완료
      </Button>
    </div>
  );
}
