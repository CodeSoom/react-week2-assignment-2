import OrderedList from './OrderedList';
import Form from './Form';
import Heading from './Heading';

export default function Page({ onClick, onSubmit }) {
  return (
    <div>
      <Heading />
      <Form onSubmit={onSubmit} />
      <OrderedList onClick={onClick} />
    </div>
  );
}
