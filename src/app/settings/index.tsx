import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Label } from "@react-navigation/elements";
import { useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./styles";

export default function Index() {
  const [ip, setIp] = useState("");
  const [port, setPort] = useState("");
  const [activeTab, setActiveTab] = useState<"Home" | "Settings">("Settings");
  const [focusedIp, setFocusedIp] = useState(false);
  const [focusedPort, setFocusedPort] = useState(false);

  useEffect(() => {
    const updateConfigs = async () => {
      try {
        const responseIp = await AsyncStorage.getItem("@ip");
        setIp(responseIp || "");
        const responsePort = await AsyncStorage.getItem("@port");
        setPort(responsePort || "9696");
      } catch (error) {
        alert(error);
      }
    };

    updateConfigs();
  }, []);

  const handleConnect = async () => {
    try {
      await AsyncStorage.setItem("@ip", ip);
      await AsyncStorage.setItem("@port", port);
      Alert.alert("Settings", "Configurations saved successfully!");
      Keyboard.dismiss();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Label style={styles.labelTitle}>Web server</Label>
        </View>
        <View style={styles.inputContainer}>
          <Label style={styles.labelInput}>Web server ip address</Label>
          <TextInput
            style={[styles.input, focusedIp && styles.inputFocused]}
            onFocus={() => setFocusedIp(true)}
            onBlur={() => setFocusedIp(false)}
            value={ip}
            onChangeText={setIp}
            keyboardType="numeric"
          />
          <View style={styles.separator} />
          <Label style={styles.labelInput}>Web server port</Label>
          <TextInput
            style={[styles.input, focusedPort && styles.inputFocused]}
            onFocus={() => setFocusedPort(true)}
            onBlur={() => setFocusedPort(false)}
            value={port}
            onChangeText={setPort}
            keyboardType="numeric"
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleConnect}
            >
              <Text style={styles.text}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}
