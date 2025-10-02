// src/components/ListComments.jsx
import { useState } from "react";
//import React, { useState } from "react";

const ListComments = ({ listComData }) => {
  return (
    <ul className="w3-ul w3-card-4">
      {listComData.map((com) => (
        <CommentItem key={com.id} comment={com} />
      ))}
    </ul>
  );
};

// Componente individual para manejar el estado de cada comentario
const CommentItem = ({ comment }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <li className="w3-container w3-padding">
      <p>
        <strong>{comment.name}:</strong> {comment.comment}
      </p>
      <div>
        <button
          className="w3-button w3-small w3-green w3-margin-right"
          onClick={() => setLikes(likes + 1)}
        >
          👍 {likes}
        </button>
        <button
          className="w3-button w3-small w3-red"
          onClick={() => setDislikes(dislikes + 1)}
        >
          👎 {dislikes}
        </button>
      </div>
    </li>
  );
};

export default ListComments;
