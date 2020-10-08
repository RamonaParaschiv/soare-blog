import React from 'react';
// import './App.css';
import img from "./imgs/Man-stairs.png";
import ArticleBox from './components/ArticleBox';

function App() {
  const title = "Lorem ipsum ayn rand amet";
  const description = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus porta quis amet sem senectus etiam lectus nisi. Non risus feugiat nec nunc. Nibh tincidunt cursus porttitor scelerisque quisque. Vulputate e ros, v enenatis ullamcorper urna risus nec. Nunc, nec convallis tellus lorem commodo pretium dictumst diam, felis.",
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus porta quis amet sem senectus etiam lectus nisi. Non risus feugiat nec nunc. Nibh tincidunt cursus porttitor scelerisque quisque. Vulputate e ros, v enenatis ullamcorper urna risus nec. Nunc, nec convallis tellus lorem commodo pretium dictumst diam, felis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus porta quis amet sem senectus etiam lectus nisi. Non risus feugiat nec nunc. Nibh tincidunt cursus porttitor scelerisque quisque. Vulputate e ros, v enenatis ullamcorper urna risus nec. Nunc, nec convallis tellus lorem commodo pretium dictumst diam, felis."];
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
      <ArticleBox title={title} description={description} date={date} time={time} image={src} categories={categories}/>
    </div>
  );
}

export default App;
