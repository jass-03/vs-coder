import React, { Component } from "react";
import Newsitems from "./Newsitems";

export default class Newss extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1, 
    };
  }


  

  async componentDidMount() {
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=4ec220a254634ceaa0af1e67e5a8c4fa";
    let data = await fetch(url);
    let result = await data.json();
    // console.log(result)
    this.setState({
      articles: result.articles,
      totalarticles: result.totalArticles,
      loading: false,
    });
  }
  handlePrevClick= async()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=4ec220a254634ceaa0af1e67e5a8c4fa&page=${this.state.page-1}&pageSize=6`;
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    this.setState({
      articles: result.articles,
      page: this.state.page-1,
      loading: false,
    });
  };

  handleNextClick= async()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=4ec220a254634ceaa0af1e67e5a8c4fa&page=${this.state.page+1}&pageSize=6`;
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);
    this.setState({
      articles: result.articles,
      page: this.state.page+1,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Top Headlines</h2> <br /> <br />
        <div className="row">
       {this.state.articles.map((article)=>(
        <div className="col-md-3 mx-3" key={Element.publishedAt}>
        <Newsitems key={article.url} title={article.title} description={article.description} image={article.urlToImage} news={article.url}/>
        </div>
       ))}
        </div>
        <div className=" container d-flex justify-content-between">
          <button 
          type="button"
          disabled={this.state.page <=1}
          className="btn btn-dark"
          onClick={this.handlePrevClick}
          >
            &larr; Previous
            </button>
            <button 
          type="button"
          class="btn btn-dark"
          onClick={this.handlePrevClick}
          >
            &larr; Previous
            </button>
      </div>
    );
  }
}
