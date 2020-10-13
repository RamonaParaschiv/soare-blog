import React, { Component } from 'react';
import "./ArticleBox.css";

class ArticleBox extends Component {
    render() {
        const categories = this.props.categories;
        return (
            <div className="mini-article-container">
            <div className="mini-article-container-flex">
                <div className="mini-article-content">
                    <div>
                        <p className="mini-article-title">{this.props.title}</p>
                    <div className="mini-article-description">
                        <p>{this.props.description}</p>
                    </div>
                    <hr className="mini-article-separator"/>
                    <div className="mini-article-date-and-time">
                        <p className="mini-article-date">{this.props.date}</p>
                        <p className="mini-article-read-time">{this.props.time}</p>
                    </div>
                    </div>
                </div>
                    <img className="mini-article-image" src={this.props.image} alt="Man walking on stairs" />
            </div>
                    <div className="mini-article-categories-container">
                        <p className="mini-article-categories">
                            <p>Categories:</p>
                            {categories.map(category => {
                                return <p>{category}</p>;
                            })}
                        </p>
                    </div>
            </div>
            
        )
    }
}

export default ArticleBox;