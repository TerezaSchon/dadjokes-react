import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Joke } from './Joke/index';
import { jokes } from './jokes.js';

const App = () => {
  return jokes.map((jokeBlock) => {
    return (
      <Joke
        /* props={jokeBlock} */
        key={jokeBlock.name}
        userAvatar={jokeBlock.avatar}
        userName={jokeBlock.name}
        text={jokeBlock.text}
        likes={jokeBlock.likes}
        dislikes={jokeBlock.dislikes}
      />
    );
  });
};

render(<App />, document.querySelector('#app'));
