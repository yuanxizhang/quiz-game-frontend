import React, { Component } from 'react';
import QuestionsContainer from '../../containers/QuestionsContainer'
import icon1 from '../../assets/react-icon.png'
import './card-style.css'
class Test extends Component {


  render() {
    const { test } = this.props;

    return (
      <div className='card text-center shadow'>
        <div className="overflow">
          <img src={icon1} alt='icon1' className='card-img-top'/>
        </div>
        <div className='card-body text-dark'>
          <div>
            <h4 className='card-title'>{test.text}</h4>
            <p className="card-text text-secondery">{test.text}</p>
            <a href="#" className='btn btn-outline-primary'>Start</a>
            {/* <QuestionsContainer test={test}/> */}
          </div>
            <button onClick={() => this.props.deleteTest(test.id)}>remove quiz</button>
          
        </div> 
      </div>
    );
  }
};

export default Test;