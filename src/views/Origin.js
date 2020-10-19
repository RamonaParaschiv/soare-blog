import React, { Component } from 'react';
import img from "../imgs/test-image.jpg";
import ArticleBox from '../components/ArticleBox';

class Origin extends Component {
    render(){
        const title = "Lorem ipsum ayn rand amet";
        const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt risus porta quis amet sem senectus etiam lectus nisi. Non risus feugiat nec nunc. Nibh tincidunt cursus porttitor scelerisque quisque.";
        const date = "November 10, 2020";
        const time = "10 min read";
        const src = img;
        const categories = ["Objectivism", "reason", "man", "Lorem", "Ipsum", "Dolor", "Sit", "Amet"];
        return (
            <>
                <p>I am the Origin route</p>
                <ArticleBox title={title} description={description} date={date} time={time} image={src} categories={categories}/>
            </>
        )
    }
}

export default Origin;