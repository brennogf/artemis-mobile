import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#211F22",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  buttonContainer: {
    marginVertical: 5,
    borderRadius: 5,
  },
  titleContainer: {
    width: "90%",
    paddingBottom: 12,
  },
  labelTitle: {
    textAlign: "left",
    fontSize: 15,
    color: "white",
    marginLeft: 8,
  },
  inputContainer: {
    width: "90%",
    backgroundColor: "#28272A",
    padding: 16,
    borderRadius: 5,
    marginBottom: 20,
  },
  labelInput: {
    textAlign: "left",
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 2,
    color: "white",
  },
  input: {
    backgroundColor: "#343435",
    color: "white",
    borderColor: "#A0A0A1",
    borderBottomWidth: 2,
    borderRadius: 6,
    padding: 8,
    marginBottom: 15,
    height: 43,
  },
  inputFocused: {
    borderColor: "#F0C0F4",
    backgroundColor: "#212122",
  },
  button: {
    backgroundColor: "#343435",
    borderRadius: 6,
    height: 43,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  buttonPressed: {
    backgroundColor: "#2F2E2F",
  },
  text: {
    textAlign: "center",
    padding: 6,
    fontSize: 18,
    color: "white",
  },
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: "#3A3A3D",
    marginVertical: 10,
    alignSelf: "center",
  },
});
