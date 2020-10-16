import React, {Component} from 'react';
// import './App.css';
import img from "./imgs/test-image.jpg";
import ArticleBox from './components/ArticleBox';
import Origin from './views/Origin';
import SayHi from './views/SayHi';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {page: 'sayhi'}
  }
  changePage(newPage) {
    this.setState({page: newPage});
  }

  renderPage() {
    if(this.state.page === 'origin') return <Origin />
    if(this.state.page === 'sayhi') return <SayHi />
  }

  render() {
    const title = "Lorem ipsum ayn rand amet";
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus porta quis amet sem senectus etiam lectus nisi. Non risus feugiat nec nunc. Nibh tincidunt cursus porttitor scelerisque quisque.";
    const date = "November 10, 2020";
    const time = "10 min read";
    const src = img;
    const categories = ["Objectivism", "reason", "man", "Lorem", "Ipsum", "Dolor", "Sit", "Amet"];
    // function giveNextCategory(categories) {
    //   console.log("categories", categories);
    //   let category = "";
    //   for(let i=0; i < categories.length; i++) {
    //     category = categories[i];
    //     console.log("category in loop", category);
    //   }
    //   console.log("category outside loop", category);
    //   return category;
    // }
    return (
      <div className="App">
        <nav>
          <a onClick={() => this.changePage("origin")}>Origin</a>
          <a onClick={() => this.changePage("sayhi")}>SayHi</a>
        </nav>
        {this.renderPage()}
        <ArticleBox title={title} description={description} date={date} time={time} image={src} categories={categories}/>
      </div>
  
  
  )
}
}


export default App;