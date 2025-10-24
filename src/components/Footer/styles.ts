import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: 80,
    backgroundColor: "#101413",
    borderTopWidth: 2,
    borderTopColor: "#2B2B32",
  },

  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#888",
    marginTop: 5,
  },

  textActive: {
    color: "#F0C0F4",
  },
});
