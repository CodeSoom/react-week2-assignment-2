export default function Input({ children, onChange, placeholder }) {
  return (
    <input value={children} onChange={onChange} placeholder={placeholder} />
  );
}
