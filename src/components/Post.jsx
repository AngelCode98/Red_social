import React, { useState } from 'react';
import CommentForm from './CommentForm';
import ListComments from './ListComments';

export default function Post({ postData, onLike, onCommentSubmit }) {
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => setShowComments(!showComments);

  const { id, name, time, avatar, content, images, likes, comments } = postData;

  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <br />
      <img src={avatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
      <span className="w3-right w3-opacity">{time}</span>
      <h4>{name}</h4>
      <br />
      <hr className="w3-clear" />
      <p>{content}</p>

      {images && images.length > 0 && (
        <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
          {images.map((image, index) => (
            <div key={index} className={images.length > 1 ? 'w3-half' : 'w3-col m12'}>
              <img src={image} style={{ width: '100%' }} className="w3-margin-bottom" alt="Post content" />
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        className="w3-button w3-theme-d1 w3-margin-bottom"
        onClick={() => onLike(id)}
      >
        <i className="fa fa-thumbs-up"></i> &nbsp;Like ({likes})
      </button>

      <button
        type="button"
        className="w3-button w3-theme-d2 w3-margin-bottom"
        onClick={toggleComments}
      >
        <i className="fa fa-comment"></i> &nbsp;Comment ({comments.length})
      </button>

      {showComments && (
        <CommentForm getCommentData={(newCommentText) => onCommentSubmit(id, newCommentText)} />
      )}
      <ListComments listComData={comments} />
    </div>
  );
}
