import React, { Component } from "react";
import { Modal,Button } from "react-bootstrap";
import "../App.css";


class FlagPost extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("props for flag", this.props);
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Red Flag Alert!!
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Inappropriate content displayed!!
                        Thanks for reporting this  We use spam reports as a signal to understand problems we're having with spam on Instagram.
                        If you think this post violates our Community Guidelines or Terms of Use and should be removed,
                        mark it as inappropriate.
                   </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default FlagPost;
