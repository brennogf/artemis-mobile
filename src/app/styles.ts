import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#211F22",
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  containerLoading: {
    backgroundColor: "#211F22",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  containerError: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textError: {
    color: "white",
    textAlign: "center",
  },
  containerCategory: {
    width: "100%",
    marginBottom: 25,
  },
  textCategory: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  containerProfiles: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    width: "22.5%",
    height: 40,
    borderWidth: 1,
    backgroundColor: "#211F22",
  },
  textLoading: {
    textAlign: "center",
    padding: 6,
    fontSize: 18,
    color: "white",
  },
  textProfile: {
    fontSize: 14,
    textAlign: "center",
  },
});
