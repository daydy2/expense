import { Text, StyleSheet } from "react-native";
import ExpensesOutput from "../component/Expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7dDaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7dDaysAgo;
  });

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 days"} />;
};

export default RecentExpenses;
