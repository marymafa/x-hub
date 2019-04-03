import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getLogin } from "../actions";

class ChatLog extends Component {
  saveUser(e) {
    console.log("e", e);
    let user = this.refs.message.value;
    this.props.getLogin(user);
    console.log("save");
  }

  render() {
    return (
      <div>
        <input type="text" ref="message" />

        <Link to="/chat">
          {" "}
          <button onClick={e => this.saveUser(e)}>Save</button>
        </Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getLogin: user => dispatch(getLogin(user))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ChatLog);

// export default ChatLog;
