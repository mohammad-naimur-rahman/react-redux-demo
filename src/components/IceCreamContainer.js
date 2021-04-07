import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIcecream } from '../redux';
import iceCreamReducer from '../redux/iceCream/iceCreamReducer';

const iceCreamContainer = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch(iceCreamReducer);
    return (
        <div>
            <h2>Number of ice creams - {numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIcecream())}>Buy Ice-cream</button>
        </div>
    );
};

export default iceCreamContainer;