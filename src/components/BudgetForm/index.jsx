import { useState } from 'react';
import cls from 'classnames'
import { useDispatch } from 'react-redux'
import { actionAddIncome } from '../../store/actions';

const BudgetForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        sign: '+',
        description: '',
        amount: ''
    });
    const isShowRed = formData.sign === 'exp';

    const handleChangeData = (event) => {
        const key = event.target.name;
        let value = event.target.value;

        //Convert amount to Number if value != ''
        if (key === 'amount' && value !== '') {
            value = Number(value);
        }

        //case negative number
        if (value < 0) {
            return;
        }

        setFormData({
            ...formData,
            [key]: value
        })
    }

    const handleSubmit = () => {
        if (!formData.description && !formData.amount) {
            return;
        }
        dispatch(actionAddIncome(formData));
        setFormData({
            sign: '+',
            description: '',
            amount: ''
        })
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }
    return (
        <div>
            <div className="add">
                <div className="add__container">
                    <select className=
                        {cls('add__type', {
                            'red-focus': isShowRed
                        })}
                        value={formData.sign}
                        name='sign'
                        onChange={handleChangeData}>
                        <option value="inc">+</option>
                        <option value="exp" >-</option>
                    </select>
                    <input
                        type="text"
                        className={cls('add__description', {
                            'red-focus': isShowRed
                        })}
                        placeholder="Add description"
                        value={formData.description}
                        name='description'
                        onChange={handleChangeData} />
                    <input
                        type="number"
                        className={cls('add__value', {
                            'red-focus': isShowRed
                        })}
                        placeholder="Value"
                        value={formData.amount}
                        name='amount'
                        onChange={handleChangeData}
                        onKeyUp={handleKeyPress} />
                    <button className={cls('add__btn', {
                        'red': isShowRed
                    })}
                        onClick={handleSubmit}><i className="ion-ios-checkmark-outline" /></button>
                </div>
            </div>
        </div>
    );
}

export default BudgetForm;
