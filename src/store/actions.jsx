export const ACT_DELETE_INCOME = 'ACT_DELETE_INCOME';
export const ACT_ADD_INCOME = 'ACT_ADD_INCOME';

export const actionDeleteIncomeById = (id) => {
    return {
        type: ACT_DELETE_INCOME,
        payload: {
            id
        }
    }
}
export const actionAddIncome = (data) => {
    return {
        type: ACT_ADD_INCOME,
        payload: {
            data
        }
    }
}