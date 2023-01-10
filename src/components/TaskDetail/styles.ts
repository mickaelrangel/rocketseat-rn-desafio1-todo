import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  boxTask: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#262626",
    marginBottom: 8,
  },
  task: {
    flex: 1,
    textAlign: "justify",
  },
  taskDescription: {
    color: "#F2F2F2",
  },
  taskDescriptionCompleted: {
    color: "#808080",
    textDecorationLine: "line-through",
    textDecorationColor: "#808080",
    textDecorationStyle: "solid",
  },
});
