import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerList: {
    flex: 1,
  },
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 32,
  },
  infoTasks: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoQuantityGroup: {
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoQuantity: {
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333",
    borderRadius: 19 / 2,
    width: 42,
    height: 19,
  },
  containerEmptyList: {
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#808080",
    borderTopWidth: 0.5,
    paddingTop: 48,
    marginLeft: 24,
    marginRight: 24,
  },
});
