import React from 'react';
import PropTypes from 'prop-types';

import { withColorBackground } from './withColorBackground';

import './VotesQuestion.css';

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
  };
  
  render() {
    return <div className='VotesQuestion'>{this.props.question}</div>;
  }

}

export default VotesQuestion;

// а можно экспортировать уже обёрнутую версию VotesQuestion
//export default withColorBackground("cyan")(VotesQuestion);
