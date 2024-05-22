import React from 'react';
import '../index.css';

const QuizComponent = () => {
  return (
    <div className="qst-pad">
      <h1>Question</h1>
      <h2>Which is the only mammal that can’t jump?</h2>
      <ul>
        <li>Dog</li>
        <li>Elephant</li>
        <li>Goat</li>
        <li>Lion</li>
      </ul>
      <button className="btn-1">Previous</button>
      <button className="btn-2">Next</button>
      <button className="btn-3">Quit</button>
    </div>
  );
};

export default QuizComponent;
