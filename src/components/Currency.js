import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    //const [currency, setCurrency] = useState('');
    const { dispatch } = useContext(AppContext);

    const changeEvent = (newCur) => {
        dispatch ({
            type: 'CHG_CURRENCY',
            payload: newCur,
        })
    }

    return (
        <div className='btn btn-success dropdown-toggle'>
            <select className="btn btn-success dropdown-toggle" id="inputGroupSelect02" onChange={(event) => changeEvent(event.target.value)}>
                <option defaultValue value="£" name="Pound">£ Pound</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
            
        </div>
    );
};

export default Currency;
