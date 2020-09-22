import React, { Component } from 'react';
import "./ArticleBox.css";

class ArticleBox extends Component {
    render() {
        const categories = ["Objectivism", "reason", "man", "Lorem", "Ipsum", "Dolor", "Sit", "Amet"];
        return (
            <div className="container">
                <div>
                    <p className="title">{this.props.title}</p>
                    <p className="description">{this.props.description}</p>
                    <hr className="separator"/>
                    <div>
                        <p className="date">{this.props.date}</p>
                        <p className="read-time">{this.props.time}</p>
                    </div>
                    <div>
                        <p className="categories">Categories:
                            {categories.map(category => {
                                return <span>{category}</span>;
                            })}
                        </p>
                    </div>

                </div>
                <div>
                    <img src={this.props.image} alt="Man walking on stairs" />
                </div>
            </div>
        )
    }
}

export default ArticleBox;