import { v4 as uuid_v4 } from 'uuid';
import { ACT_DELETE_INCOME, ACT_ADD_INCOME } from './actions';

const dataFromLocalStorage = localStorage.getItem('LIST_BUDGET_DATA') || '[]';
const initialState = {
    listDataIncome: JSON.parse(dataFromLocalStorage)
}

const reducer = (state = initialState, action) => {


    switch (action.type) {
        case ACT_DELETE_INCOME:
            return {
                /*Copy old state, and return newState using filter, if id in state === id in action => true*/
                ...state, listDataIncome: state.listDataIncome.filter(dataItem => {
                    return dataItem.id !== action.payload.id;
                })
            }
        case ACT_ADD_INCOME:
            const newDataIncome = action.payload.data;
            return {
                ...state,
                listDataIncome: [...state.listDataIncome, {
                    id: uuid_v4(),
                    description: newDataIncome.description,
                    amount: newDataIncome.sign === '+' ? newDataIncome.amount : newDataIncome.amount * (-1),
                }]
            };

        default:
            return state;
    }

}
export default reducer;