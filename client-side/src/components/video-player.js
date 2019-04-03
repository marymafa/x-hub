import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "../App.css";

// this.state = { show: false, file: 'https://s3..com/codecademy-content/courses/React/react_video-fast.mp4', imagePreviewUrl: "", videoPlaying: "" };

import ReactPlayer from "react-player";

class Video extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          {/* <Modal.Title>video title</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <center className={"container-size container"}>
            <ReactPlayer
              width={100 + "%"}
              height={30 + "%"}
              url={this.props.url}
<<<<<<< HEAD
              // playing
=======
              //playing
>>>>>>> b01159546a39b25e7f689c484741323125f586f4
            />
          </center>
        </Modal.Body>
        <Modal.Footer>
          <div className="iconBackground">
            <i className="icon far fa-comments" />
          </div>
          <div className="iconBackground">
            <i className=" icon fas fa-sync-alt" />
          </div>
          <div className="iconBackground">
            <i className="icon far fa-thumbs-up" />
          </div>
          <div className="iconBackground">
            <i className=" icon fab fa-font-awesome-flag" />
          </div>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default Video;
