var VotesAnswer = React.createClass({

  displayName: 'VotesAnswer',

  propTypes: {
    code: React.PropTypes.number.isRequired,
    count: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    workMode: React.PropTypes.number.isRequired,
    freeanswer: React.PropTypes.bool,
    freeanswertext: React.PropTypes.string.isRequired,
    cbFreeAnswerTextChanged: React.PropTypes.func.isRequired,
    cbSelected: React.PropTypes.func.isRequired,
  },

  answerClicked: function(EO) {
    this.props.cbSelected(this.props.code);
    
    // как можно достучаться к атрибутам тега:
    console.log(EO.target.getAttribute('value'));    // сработает с любым атрибутом
    console.log(EO.target.getAttribute('data-zzz')); // сработает с любым атрибутом
    console.log(EO.target.dataset.zzz);              // сработает только с data- атрибутами
  },

  freeAnswerTextChanged: function(EO) { 
    console.log('VotesAnswer: текст свободного ответа изменён - '+EO.target.value); 
    this.props.cbFreeAnswerTextChanged(EO.target.value);
  },

  render: function() {

    if ( this.props.workMode==1 ) {
      return React.DOM.div(null,
        React.DOM.label({className:'VotesBlockAnswer'},
          React.DOM.input({type:'radio',
            value:this.props.code,
            name:'voteanswer',
            onClick:this.answerClicked,
            'data-zzz':this.props.code+100,
          }),
          React.DOM.span(null,this.props.text),
          this.props.freeanswer
            ?React.DOM.input({type:'text',name:'votefreeanswer',
              className:'FreeAnswer',
              defaultValue:this.props.freeanswertext,
              onChange:this.freeAnswerTextChanged
            })
            :null
        ),
      );
    }
    else {
      return React.DOM.div( {className:'VotesBlockAnswer'},
        React.DOM.span({className:'Count'},this.props.count),
        React.DOM.span({className:'Text'},this.props.text)
      );
    }

  },

});