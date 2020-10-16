import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ArticleBox.css';

// eslint-disable-next-line react/prefer-stateless-function
class ArticleBox extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="mini-article">
        <div className="mini-article--flex">
          <div className="mini-article--flex-column">
            <div>
              <p className="mini-article__title">{this.props.title}</p>
              <div className="mini-article__description">
                <p>{this.props.description}</p>
              </div>
              <hr className="mini-article__separator" />
              <div className="mini-article__date-time date-time">
                <p className="date-time__date">{this.props.date}</p>
                <p className="date-time__time">{this.props.time}</p>
              </div>
            </div>
          </div>
          <img className="mini-article__image" src={this.props.image} alt="Man walking on stairs" />
        </div>
        <div className="mini-article__categories">
          <p className="categories__category">
            <p>Categories:</p>
            {categories.map((category) => {
              return <p>{category}</p>;
            })}
          </p>
        </div>
      </div>
    );
  }
}

ArticleBox.defaultProps = {
  categories: [],
};

ArticleBox.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default ArticleBox;
