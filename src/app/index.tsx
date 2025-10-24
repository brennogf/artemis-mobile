import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { fetchProfiles, toggleSuspend } from "@/src/services/api";
import { Profiles } from "@/src/types/models";
import { profilesByCategory } from "@/src/utils/profilesByCategory";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import styles from "./styles";

export default function Index() {
  const [profiles, setProfiles] = useState<Profiles[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ip, setIp] = useState("");
  const [port, setPort] = useState("");
  const [activeTab, setActiveTab] = useState<"Home" | "Settings">("Home");
  const organizedProfiles = profilesByCategory(profiles);

  const handleConnect = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const storageIp = await AsyncStorage.getItem("@ip");
      const storagePort = await AsyncStorage.getItem("@port");

      const actualIp = storageIp || ip;
      const actualPort = storagePort || port;

      setIp(actualIp);
      setPort(actualPort);

      const profiles = await fetchProfiles(actualIp, actualPort);
      setProfiles(profiles);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [ip, port]);

  useEffect(() => {
    handleConnect();
  }, [handleConnect]);

  const handleSuspend = async (id: string, suspend: boolean) => {
    try {
      await toggleSuspend(ip, port, id, suspend);
      setProfiles((prev) =>
        prev.map((p) =>
          p.Id === id ? { ...p, IsSuspended: !p.IsSuspended } : p
        )
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        {loading && !error && (
          <View style={styles.containerLoading}>
            <ActivityIndicator size="large" color="#DB9EE5" />
            <Text style={styles.textLoading}>Loading...</Text>
          </View>
        )}

        {!loading && error && (
          <View style={styles.containerError}>
            <Text style={styles.textError}>
              Web server not found.{"\n\n"}
              Configure the web server in settings...
            </Text>
          </View>
        )}

        {!loading && !error && (
          <>
            {Object.keys(organizedProfiles).map((categoryName) => (
              <View key={categoryName} style={styles.containerCategory}>
                <Text style={styles.textCategory}>{categoryName}</Text>
                <View style={styles.containerProfiles}>
                  {organizedProfiles[categoryName].map((profile) => (
                    <Pressable
                      key={profile.Id}
                      style={[
                        styles.button,
                        {
                          borderColor: profile.IsSuspended
                            ? "#585858"
                            : "#DB9EE5",
                        },
                      ]}
                      onPress={() =>
                        handleSuspend(profile.Id, !profile.IsSuspended)
                      }
                    >
                      <Text
                        style={[
                          styles.textProfile,
                          {
                            color: profile.IsSuspended ? "#585858" : "#DB9EE5",
                            textDecorationLine: profile.IsSuspended
                              ? "line-through"
                              : "none",
                          },
                        ]}
                        numberOfLines={2}
                      >
                        {profile.Name}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            ))}
          </>
        )}
      </View>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}
