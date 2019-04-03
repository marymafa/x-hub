import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "../App.css";


class ViewComments extends Component {
    constructor(props) {
        super(props);
        this.state = { users: props }
    }
    render() {
        console.log("iikdie",this.state.users.postedComments)
        return (
            <Modal.Dialog>
                <Modal.Body>
                    {this.state.users.postedComments.comments.map((com)=>{
                     return ( <div>
                            <h4 style={{fontFamily:"Calibri",textAlign:"left"}}>{com.user}</h4>
                            <p style={{fontFamily:"Calibri",textAlign:"left", marginLeft:+"%"}}>
                                {com.comment}
                            </p>
                            <br />
                            <i style={{color:"orange"}} className="icon far fa-thumbs-up " />
                        </div>)
                        console.log("c0om",com.user)

                    })}

                </Modal.Body>
            </Modal.Dialog>
        );
    }
}

export default ViewComments;
