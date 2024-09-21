import React from 'react';
import { StyleSheet, View } from "react-native";
import HeaderPage from "@/components/HeaderPage";

export default function Page() {
  return (
    <View style={styles.container}>
      <HeaderPage /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: 'white',
    },
});
