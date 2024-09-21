import HeaderPage from "@/components/HeaderPage"; 
import { StyleSheet, Text, View } from "react-native";
import SVGIconTextLogo from './../assets/SVG/SVGIconTextLogo';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Olá Test</Text>
        <Text style={styles.subtitle}>Primeiro test</Text>
        
        <SVGIconTextLogo />

        <HeaderPage /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
