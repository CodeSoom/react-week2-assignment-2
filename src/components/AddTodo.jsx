import { useState } from "react";

import Button from "./common/Button";
import TextInput from "./common/TextInput";

export default function AddTodo({ list, addList }) {
  const [text, setText] = useState("");

  function onClickButton() {
    if (text === "") {
      return;
    }

    if (list.includes(text)) {
      return;
    }

    addList(text);
    setText("");
  }

  return (
    <div>
      <TextInput value={text} onChange={setText} />
      <Button onClick={onClickButton}>추가</Button>
    </div>
  );
}
