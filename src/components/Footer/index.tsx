import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { FooterProps } from "./types";

export default function Footer({ activeTab, setActiveTab }: FooterProps) {
  const router = useRouter();
  return (
    <View style={styles.footer}>
      <Pressable
        style={styles.button}
        onPress={() => {
          setActiveTab("Home");
          router.replace("/");
        }}
      >
        <Ionicons
          name="home-outline"
          size={24}
          color={
            activeTab === "Home" && styles.textActive.color
              ? styles.textActive.color
              : "white"
          }
        />
        <Text style={[styles.text, activeTab === "Home" && styles.textActive]}>
          {activeTab === "Home" ? <Text>Home</Text> : ""}
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => {
          setActiveTab("Settings");
          router.replace("/settings");
        }}
      >
        <Ionicons
          name="settings-outline"
          size={24}
          color={
            activeTab === "Settings" && styles.text.color
              ? styles.textActive.color
              : "white"
          }
        />
        <Text
          style={[styles.text, activeTab === "Settings" && styles.textActive]}
        >
          {activeTab === "Settings" ? <Text>Settings</Text> : ""}
        </Text>
      </Pressable>
    </View>
  );
}
