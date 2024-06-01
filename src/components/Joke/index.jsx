import { useState } from "react";
import "./style.css";
import "./img/like-down.png";
import "./img/like-up.png";

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [jokeLikes, setJokeLikes] = useState(likes);
  const [jokeDislikes, setJokeDislikes] = useState(dislikes);

  const handleLikeClick = () => {
    setJokeLikes(jokeLikes + 1);
  };
  const handleDislikeClick = () => {
    setJokeDislikes(jokeDislikes + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleLikeClick}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {jokeLikes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleDislikeClick}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {jokeDislikes}
        </span>
      </div>
    </div>
  );
};
