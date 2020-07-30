import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';
export default class Project extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header headerText='Albums'/>
        <AlbumList />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});