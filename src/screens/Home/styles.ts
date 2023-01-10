import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    backgroundColor: "#0D0D0D",
  },
  labelToText: {
    fontSize: 46,
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  labelDoText: {
    fontSize: 46,
    color: "#5E60CE",
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: "row",
    marginTop: -26,
    marginBottom: 48,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 6,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 4,
    borderColor: "#0D0D0D",
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#0D0D0D",
  },
});
