import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleButtonClick = (event) => {
    const { name } = event.target;
    onLeaveFeedback(name);
  };
  
  return (
    <ButtonList>
      {options.map(option => (
        <li key={option}>
          <button
            className="feedbackBtn"
            onClick={handleButtonClick}
            name={option}
          >
            {option}
          </button>
        </li>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;