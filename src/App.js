import BudgetForm from "./components/BudgetForm";
import BudgetHeader from "./components/BudgetHeader";
import BudgetList from "./components/BudgetList";

function App() {
  return (
    <>
      <BudgetHeader />
      <div className="bottom">
        <BudgetForm />
        <BudgetList />
      </div>
    </>
  );
}

export default App;
