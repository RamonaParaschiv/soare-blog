import React, { Component } from 'react';
import "./ArticleBox.css";

class ArticleBox extends Component {
    render() {
        const description = this.props.description;
        const categories = this.props.categories;
        return (
            <div className="mini-article-container">
                <div className="mini-article-content">
                    <div>
                        <p className="mini-article-title">{this.props.title}</p>
                    <div className="mini-article-description">
                        {description.map(desc => {
                                return <p>{desc}</p>;
                            })}
                    </div>
                    <hr className="mini-article-separator"/>
                    <div className="mini-article-date-and-time">
                        <p className="mini-article-date">{this.props.date}</p>
                        <p className="mini-article-read-time">{this.props.time}</p>
                    </div>
                    </div>
                    <div className="mini-article-categories-container">
                        <p className="mini-article-categories">Categories:
                            {categories.map(category => {
                                return <span>{category}</span>;
                            })}
                        </p>
                    </div>

                </div>
                
                    <img className="mini-article-image" src={this.props.image} alt="Man walking on stairs" />
            </div>
        )
    }
}

export default ArticleBox;