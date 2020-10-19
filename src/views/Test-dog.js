import React, {Component} from 'react';

class Dog extends Component {
    render() {
        return (
            <div className="Dog">
                <h1>Ham!</h1>
                <h3>My name is: {this.props.name}</h3>
                <img src='https://unsplash.com/photos/ImMqGl_tNm4' />
            </div>
        );
    }
}

export default Dog;