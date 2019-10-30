import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = ({ count, increment, decrement }) => {
    return (
        <div>
            <div>I'm the home component</div>
            <button onClick={() => console.log('Hi there!')}>Press me!</button>
            <button onClick={() => increment()}>Incrementa</button>
            <button onClick={() => decrement()}>Decrementa</button>
            <p>Count: {count}</p>
            <Link to="/users">Go to Users List</Link>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        count: state.count,
    };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'ADD_COUNT' }),
    decrement: () => dispatch({ type: 'REMOVE_COUNT' }),
  };
}

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(HomePage),
};