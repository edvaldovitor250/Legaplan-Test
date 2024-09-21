import { Text, View, StyleSheet } from "react-native";

const HeaderPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bem-vindo à minha aplicação!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default HeaderPage;
