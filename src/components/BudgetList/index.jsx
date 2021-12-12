import ListExpend from './ListExpend';
import ListIncomes from './ListIncomes';
import { useBudgetData } from '../../hooks/useBudgetData';

const BudgetList = () => {

    const { listIncomes, listExpenses, totalAmount } = useBudgetData();

    return (
        <div className="container clearfix">
            <ListIncomes listData={listIncomes} />
            <ListExpend listData={listExpenses} total={totalAmount} />
        </div>
    );
}

export default BudgetList;
