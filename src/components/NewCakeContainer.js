import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

const NewCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    const [number, setnumber] = useState(1);
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <input type="number" value={number} onChange={e => setnumber(e.target.value)} />
            <button onClick={() => dispatch(buyCake(number))}>Buy {number} cake</button>
        </div>
    );
};

export default NewCakeContainer;