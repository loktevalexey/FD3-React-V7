import React from 'react';
import PropTypes from 'prop-types';

import './VotesQuestion.css';

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
  };
  
  // в атрибуте ref нужного тега будем указывать вот эту переменную-ссылку
  newTextRef = React.createRef(); // return { current: undefined }

  state = {
    question: this.props.question,
  };

  setNewText = () => {
    if ( this.newTextRef.current ) {
      let newText=this.newTextRef.current.value;
      this.setState({question:newText});
    }
  };

  render() {
    return (
      <div>
        <input type="text" defaultValue="новый текст вопроса" ref={this.newTextRef} />
        <input type="button" value="задать" onClick={this.setNewText} />
        <div className='VotesQuestion'>{this.state.question}</div>
      </div>
    );
  }

}

export default VotesQuestion;
