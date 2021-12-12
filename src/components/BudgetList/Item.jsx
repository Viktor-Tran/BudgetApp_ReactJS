import React from 'react';
import { formatStringNumber, calculatePercents } from '../../helpers';
import { useDispatch } from 'react-redux';
import { actionDeleteIncomeById } from '../../store/actions';

const Item = ({ dataItem, total }) => {
    const { id, amount, description } = dataItem;
    const dispatch = useDispatch();

    const handleDeleteItem = (id) => {
        dispatch(actionDeleteIncomeById(id))
    }
    return (
        <div className="item clearfix">
            <div className="item__description">{description}</div>
            <div className="right clearfix">
                <div className="item__value">{formatStringNumber(amount)}</div>
                {amount < 0 && <div className="item__percentage">{calculatePercents(total, amount)}</div>}
                <div className="item__delete">
                    <button className="item__delete--btn" onClick={() => handleDeleteItem(id)}> <i className="ion-ios-close-outline" /></button>
                </div>
            </div>
        </div>
    );
}

export default Item;
