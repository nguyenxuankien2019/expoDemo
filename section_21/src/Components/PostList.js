import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import PostDetail from './PostDetail';

export default class AlbumList extends Component {
    state = { posts: [] };

    componentWillMount() {
        axios.get('http://reduxblog.herokuapp.com/api/posts')
            .then(res => this.setState({ posts: res.data }))
            .catch(err => console.log(err, 'da co loi xay ra'));
    }

    render() {   
            console.log(this.state.posts,'posts: ');

        return (
            <ScrollView>
                <View style={styles.viewStyles}>
                    <Text>Album List</Text>
                </View>
                <PostDetail posts={this.state.posts} />
            </ScrollView>
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