import React from 'react';
import { StyleSheet, View } from "react-native";
import HeaderPage from "@/src/components/HeaderPage";
import TaskCard from '@/src/components/TaskCard';

export default function Page() {
  return (
    <View style={styles.container}>
      <HeaderPage /> 
      <TaskCard/>
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
