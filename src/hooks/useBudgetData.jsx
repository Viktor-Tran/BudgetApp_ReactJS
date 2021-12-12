import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { calculateTotal, calculatePercents } from '../helpers'

const useBudgetData = () => {
    const listData = useSelector(state => state.listDataIncome);
    const listIncomes = listData.filter(item => item.amount > 0);
    const listExpenses = listData.filter(item => item.amount < 0);

    const totalIncome = calculateTotal(listIncomes);
    const totalExpense = calculateTotal(listExpenses);
    const totalPercent = calculatePercents(totalIncome, totalExpense)
    const totalAmount = totalIncome + totalExpense;

    useEffect(() => {
        localStorage.setItem("LIST_BUDGET_DATA", JSON.stringify(listData));
    }, [listData]);
    return {
        listData,
        listIncomes,
        listExpenses,
        totalIncome,
        totalExpense,
        totalPercent,
        totalAmount,
    }
}
export { useBudgetData }

