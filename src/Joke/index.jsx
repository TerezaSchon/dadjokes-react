import React, { useState } from 'react';
import { render } from 'react-dom';
import '../style.css';

export const Joke = (props) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleClickLike = () => {
    setLike(like + 1);
  };

  const handleClickDislike = () => {
    setDislike(dislike + 1);
  };

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={props.avatar} />

            <p className="user-name">{props.name}</p>
          </div>

          <p className="joke__text">{props.text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={handleClickLike}
          ></button>

          <span id="likes-up" className="likes-count likes-count--up">
            {props.likes + like}
          </span>

          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={handleClickDislike}
          ></button>

          <span id="likes-down" className="likes-count likes-count--down">
            {props.dislikes + dislike}
          </span>
        </div>
      </div>
    </div>
  );
};

render;
