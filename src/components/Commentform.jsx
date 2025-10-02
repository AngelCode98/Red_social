// src/components/CommentForm.jsx
import { useState } from "react";

const CommentForm = ({ getCommentData }) => {
  const [comment, setComment] = useState("");
  const getComment = (e) => {
    setComment(e.target.value);
  };
  return (
    <section className="comentarios">
      <textarea
        className="form-control"
        rows="3"
        placeholder="Escribe un comentario..."
        value={comment}
        onChange={getComment}
      ></textarea>
      <br />
      <button
  className="btn btn-secondary"
  onClick={() => {
    getCommentData(comment);
    setComment(""); // limpia el textarea
  }}
>
  Comentar
</button>
    </section>
  );
};

export default CommentForm;