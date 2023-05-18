function CheckBox({ onChange, checked }) {
  return (
    <label>
      Have you read this book?
      <input onChange={onChange} checked={checked} type="checkbox" />
    </label>
  );
}

export default CheckBox;
