function Card({ id, title, author, pages, status, updateBook, deleteBook }) {
  return (
    <div className="card">
      <button onClick={() => deleteBook(id)} className="x-mark">
        ✖
      </button>
      <div className="details">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Pages: {pages}</p>
        <span onClick={() => updateBook(id)} className={`status ${status}`}>{status ? 'READ' : 'UNREAD'}</span>
      </div>
    </div>
  );
}

export default Card;
