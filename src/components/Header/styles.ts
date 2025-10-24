import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 110,
    paddingLeft: 20,
    paddingTop: 40,
    backgroundColor: "#101413",
    borderBottomWidth: 2,
    borderBottomColor: "#2B2B32",
    justifyContent: "center",
  },
  headerSpacer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
