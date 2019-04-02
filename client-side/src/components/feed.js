import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const Feeds = props => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>article title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>article text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <div className="iconBackground">
            <i class="icon far fa-comments" />
          </div>
          <div className="iconBackground">
            <i class=" icon fas fa-sync-alt" />
          </div>
          <div className="iconBackground">
            <i class="icon far fa-thumbs-up" />
          </div>
          <div className="iconBackground">
            <i class=" icon fab fa-font-awesome-flag" />
          </div>
          {/* <Button variant="secondary">filter</Button>
          <Button variant="primary"> comment</Button> */}
        </Modal.Footer>
      </Modal.Dialog>
      ;
    </div>
  );
};
export default Feeds;
