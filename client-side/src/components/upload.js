import React, { Component } from "react";
import "../App.css";



class Upload extends Component {
    constructor(){
        super()
        this.state={
            file:""
        }
        this.handleImgInput = this.handleImgInput.bind(this);
    }
    handleImgInput(event){
        this.setState({
            file: URL.createObjectUrl(event.target.files[0])
        })
    }
    render() {
        console.log("img", this.state.file)
        return <div>
            <center>
            <form>
                <input onClick={this.handleImgInput} className="select-comp" type="file" accept="image/*"></input>
            </form>
                {this.state.file.length>0?<img src={this.state.file}/>:""}
                
            </center>

        </div>;
    }
}

export default Upload;