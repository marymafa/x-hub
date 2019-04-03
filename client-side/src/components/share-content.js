import React from "react";
import axios from 'axios';

class ShareContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            articles:[],
        }
    }

     componentDidMount(){
         axios.get('https://localhost:3001/articles')
        .then(res => {
          const articles = res.data;
          this.setState({ articles });
        })
        console.log("article", this.articles )
        console.log("hello react")

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