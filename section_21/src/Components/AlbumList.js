import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {
    state = { posts: [] };

    componentWillMount() {
        axios.get('http://reduxblog.herokuapp.com/api/posts')
            .then(res => this.setState({ posts: res.data }))
            .catch(err=> console.log(err,'da co loi xay ra'));
    }

    render() {
        console.log(this.state.posts);

        return (
           <View>
                <View style={styles.viewStyles}>
                <Text>Album List</Text>
            </View>
            {this.state.posts.map( post => <Text style={{backgroundColor:'red',margin: 10, padding: 5}}>Title: {post.title}</Text> )}

           </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        height: 70
    }
})