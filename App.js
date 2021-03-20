import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where the tabs go */}
          <Task text={'Task1'}/>
          <Task text={'Task2'}/>
          <Task text={'Task3'}/>
          <Task text={'Task4'}/>
          <Task text={'Task5'}/>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {},
});
