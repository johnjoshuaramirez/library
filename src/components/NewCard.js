function NewCard({ setHidden }) {
  return (
    <div className="new-card" onClick={() => setHidden(false)}>
      <span className="plus-mark">+</span>
      <p>New book</p>
    </div>
  );
}

export default NewCard;
