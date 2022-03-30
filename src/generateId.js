export default function generateId() {
  return Math.random().toString(36).slice(2, 36);
}
