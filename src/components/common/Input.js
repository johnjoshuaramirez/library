function Input({ onChange, type, value, placeholder }) {
  return (
    <input
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
      required
    />
  );
}

export default Input;
