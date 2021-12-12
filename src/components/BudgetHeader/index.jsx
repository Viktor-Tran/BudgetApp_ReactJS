
import BudgetTitle from './BudgetTitle';
import TotalAmount from './TotalAmount'
import TotalExpend from './TotalExpend';
import TotalIncomes from './TotalIncomes'
import { formatStringNumber } from '../../helpers'
import { useBudgetData } from '../../hooks/useBudgetData';

const BudgetHeader = () => {
    const { totalAmount, totalPercent, totalIncome, totalExpense } = useBudgetData();

    return (
        <div className="top">
            <div className="budget">
                <BudgetTitle />
                <TotalAmount total={formatStringNumber(totalAmount)} />
                <TotalIncomes total={formatStringNumber(totalIncome)} />
                <TotalExpend total={formatStringNumber(totalExpense)} percent={totalPercent} />
            </div>
        </div>
    );
}

export default BudgetHeader;
