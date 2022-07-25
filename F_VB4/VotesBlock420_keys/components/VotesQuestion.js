import React from 'react';
import PropTypes from 'prop-types';

import './VotesQuestion.css';

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
    auxClassName: PropTypes.string.isRequired,
  };
  
  componentDidUpdate        = (oldProps, oldState) => { console.log(this.props.auxClassName+' componentDidUpdate');        };
  componentDidMount         = ()                   => { console.log(this.props.auxClassName+' componentDidMount');         };
  componentWillUnmount      = ()                   => { console.log(this.props.auxClassName+' componentWillUnmount');      };
  
  render() {
    return <div className={'VotesQuestion '+this.props.auxClassName}>{this.props.question}</div>;
  }

}

export default VotesQuestion;
