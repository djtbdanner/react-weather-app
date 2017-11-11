var React=require("react");

var ErrorModal = React.createClass({
  // we can require properties
  propTypes: {
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
  },

  // so you can return anything you want here for default propsl
  getDefaultProps: function (){
    return {
      title: "Error"
    }
  },

  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function (){
    var {title, message} = this.props;
    return (
      <div id = "error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            OK
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
