import React, { Component } from "react";
import "../App.css";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
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
        <center>
          <form
            className={"upload-form container"}
            onSubmit={e => this._handleSubmit(e)}
          >
            <div className={"grid-disp"}>
              <input
                className="select-comp"
                type="file"
                onChange={e => this._handleImageChange(e)}
              />
              <table className="">
                <td>
                  <div className="imgPreview">{$imagePreview}</div>
                </td>
                <td>
                  <table>
                    <tr>
                      <td>
                        <label>Title</label>
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label> Category</label>
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Article</label>
                      </td>
                      <td>
                        <textarea className={"txt-area"} rows="10" cols="30" />
                      </td>
                    </tr>
                  </table>
                </td>
              </table>
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
      </div>
    );
  }
}

export default Upload;
