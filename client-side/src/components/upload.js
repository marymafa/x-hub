import React, { Component } from "react";
import "../App.css";
import Axios from "axios";
import { Modal } from "react-bootstrap";


class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = { file: "", imagePreviewUrl: "", articleData: {} };
    }

    handlePost() {
        var collection = this.state
        Axios.post("localhost:3001/article", { collection })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log(e.target);
        console.log("handle uploading-", this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file);
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = <img src={imagePreviewUrl} />;
        } else {
            $imagePreview = (
                <div className="previewText">Please select an Image for Preview</div>
            );
        }

        return (
            <div className="previewComponent">
                <Modal.Dialog>
                <Modal.Body>
                    <center>
                        <form
                            className={"table"}
                            onSubmit={e => this._handleSubmit(e)}
                        >
                            <div className={"grid-disp"}>
                                <input
                                    className="select-comp"
                                    type="file"
                                    onChange={e => this._handleImageChange(e)}
                                />
                                <div className="imgPreview">{$imagePreview}</div>

                                <label>Title</label>

                                <input type="text" />

                                <label> Category</label>

                                <input type="text" />

                                <label>Article</label>

                                <textarea className={"txt-area"} rows="10" cols="30" />

                                <button
                                    className="submitButton"
                                    type="submit"
                                    onClick={e => this._handleSubmit(e)}
                                >
                                    Post
              </button>
                            </div>
                        </form>
                    </center>
                    </Modal.Body>
                </Modal.Dialog>

            </div>
        );
    }
}

export default Upload;
