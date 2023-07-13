import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);


    const changeEvent = (newBud) => {
        dispatch ({
            type: 'SET_BUDGET',
            payload: newBud,
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='cost'
                value={budget}
                style={{ marginLeft: '0rem' , size: 10}}
                onChange={(event) => changeEvent(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;
