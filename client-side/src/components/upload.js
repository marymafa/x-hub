import React, { Component } from "react";
import "../App.css";


class Upload extends Component {
    render() {
        return <div>
            <center>
                <select className="select-comp">
                <option value="Upload">Upload</option>
                <option value="Article">Article</option>
                <option value="Photo">Photo</option>
                <option value="Video">Video</option>
            </select>
            </center>
            
        </div>;
    }
}

export default Upload;