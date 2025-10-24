import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerSpacer}>
        <Image
          source={require("@/src/assets/images/artemis.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>Artemis Mobile</Text>
      </View>
    </View>
  );
}
