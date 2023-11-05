import { Text, StyleSheet } from "react-native";
import ExpensesOutput from "../component/Expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expensesPeriod={"Total"} expenses={expenseCtx.expenses} />
  );
};

export default AllExpenses;
