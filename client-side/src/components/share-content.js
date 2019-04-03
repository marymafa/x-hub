import React,{Component} from "react";
import axios from 'axios';

class ShareContent extends Component{
    constructor(props){
        super(props);
        this.state={
            articles:[],
        }
    }

    async componentDidMount(){
    var test = await axios.get('http://localhost:3002/article').then(res => {
          const articles = res.data;
          this.setState({ articles });
        })
      
    }

    render(){
        console.log("this is the state", this.state)
        return (
            <ul>
        { this.state.articles.map(article => <li>{article.title}</li>)}
      </ul>
        )
    }
};

export default ShareContent;