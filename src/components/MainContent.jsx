// src/components/MainContent.jsx
import React, { useState } from 'react';
import Post from './Post';
import unnamed from "../assets/unnamed.jpg";
import pokemon from "../assets/pokemon.jpg";
import pikachu from "../assets/pikachu.png";

export default function MainContent() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'Pokemon GO',
      time: '1 min',
      avatar: [
              pokemon,
              ],
      content: 'Croagunk, el Pokémon de tipo Veneno y Lucha, está disponible en Pokémon GO para capturarlo y evolucionarlo. Si logras conseguir 50 Caramelos, podrás evolucionarlo a Toxicroak.',
      images: [
              unnamed,
              ],
      likes: 5,
      comments: [
        { id: 1, name: "Ash", comment: "¡Yo elijo a ti Croagunk!" },
      ],
    },
    {
      id: 2,
      name: 'Pikachu',
      time: '16 min',
      avatar: [
              pikachu,
              ],
      content: 'Cada paso para ti es mil para mí, y mis pulmones son del tamaño de uvas". Esta frase, pronunciada por Pikachu, describe de manera exagerada su estado físico en ese momento.',
      images: [],
      likes: 10,
      comments: [
        { id: 1, name: "Brock", comment: "¡La cocina es mi pasión!" },
      ],
    },
  ]);

  const handleLike = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleCommentSubmit = (postId, newCommentText) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          const newId = post.comments.length > 0 ? post.comments[post.comments.length - 1].id + 1 : 1;
          const newComment = {
            id: newId,
            name: "You",
            comment: newCommentText,
          };
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="w3-col m7">
      <div className="w3-row-padding">
        <div className="w3-col m12">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container w3-padding">
              <h6 className="w3-opacity">Social Media template by w3.css</h6>
              <p contentEditable="true" className="w3-border w3-padding">Status: Feeling Blue</p>
              <button type="button" className="w3-button w3-theme"><i className="fa fa-pencil"></i> &nbsp;Post</button>
            </div>
          </div>
        </div>
      </div>
      {posts.map(post => (
        <Post
          key={post.id}
          postData={post}
          onLike={handleLike}
          onCommentSubmit={handleCommentSubmit}
        />
      ))}
    </div>
  );
}