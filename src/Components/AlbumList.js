import React, { Component } from 'react';
import { Text, StyleSheet, View,Button } from 'react-native';

export default class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    componentDidMount() {
        console.log('componentDidMount in AlbumList');
    }
    componentWillMount() {
        console.log('componentWillMount in AlbumList');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate in AlbumList');
    }
    componentWillUpdate(nextProps, nextState) {
        // Are we adding new items to the list?
        // Capture the scroll position so we can adjust scroll later.
        console.log('componentWillUpdate in AlbumList');
      }
    componentWillUnmount() {
        console.log('componentWillUnmount in AlbumList');
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps in AlbumList');
    }
    shouldComponentUpdate(props,state) {
        if(state != this.state){
            console.log('shouldComponentUpdate in AlbumList');
            return true;
        }
        else {
            return false
        }
    }
    static getDerivedStateFromProps(props, state) {
        // Store prevId in state so we can compare when props change.
        // Clear out previously-loaded data (so we don't render stale stuff).
        console.log('static getDerivedStateFromProps in AlbumList');
        // No state update necessary
        return null;
      }
    render() {
        console.log("render in Album list");
        
        return (
            <View >
                <Text style={{ textAlign: 'center' }}>Album List!!</Text>
        <Text style={{ textAlign: 'center' }}>Count: {this.state.count}</Text>
                <Button title={'Increase Count'} onPress = {() => this.setState({count: this.state.count + 1})}></Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({

});