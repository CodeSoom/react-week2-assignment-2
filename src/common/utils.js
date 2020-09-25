export const generateId = () => Math.random().toString(36).substr(2, 10);
export const isArrayEmpty = (arr) => (Array.isArray(arr) && arr.length === 0);
