import React from 'react';
import PropTypes from 'prop-types';

import './VotesQuestion.css';

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
    auxClassName: PropTypes.string.isRequired,
  };
  
  state = {
    auxClassName: this.props.auxClassName,
  }
  
  componentDidUpdate        = (oldProps, oldState) => { console.log(this.state.auxClassName+' componentDidUpdate');        };
  componentDidMount         = ()                   => { console.log(this.state.auxClassName+' componentDidMount');         };
  componentWillUnmount      = ()                   => { console.log(this.state.auxClassName+' componentWillUnmount');      };
  
  render() {
    return <div className={'VotesQuestion '+this.state.auxClassName}>{this.props.question}</div>;
  }

}

export default VotesQuestion;
