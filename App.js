import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import Header from './src/Components/Header';
export default class Project extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header headerText='Albums'/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});