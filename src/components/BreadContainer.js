import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import buyBread from '../redux/bread/breadAction';
import breadReducer from '../redux/bread/breadReducer';

const BreadContainer = () => {
    const numOfBread = useSelector(state => state.bread.numOfBread);
    const dispatch = useDispatch(breadReducer);
    return (
        <div>
            <h2>Number of Breads - {numOfBread}</h2>
            <button onClick={() => dispatch(buyBread())}>Buy bread</button>
        </div>
    );
};

export default BreadContainer;