export default function Input({
  children, onChange, onKeyPress, placeholder,
}) {
  return (
    <input
      value={children}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
    />
  );
}
