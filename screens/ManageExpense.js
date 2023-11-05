import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../component/ui/iconButton";
import { GlobalStyles } from "../utils/utils";
import Button from "../component/ui/Button";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditting = !!editedExpenseId;

  const deleteExpenseHandler = () => {
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditting]);
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditting ? "Update" : "Add"}
        </Button>
      </View>
      {isEditting && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    minHeight: 20,
  },
});
export default ManageExpense;
