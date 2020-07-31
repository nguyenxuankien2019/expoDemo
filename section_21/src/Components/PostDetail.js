import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card  from './Card'

const PostDetail = ({ posts }) => {
    return (
        <Card>
            {posts.map(post => <Item key={post.id} title={post.title} categories={post.categories} />)}
        </Card>
    )
}
const Item = ({ title, categories }) => {
    return (
        <View style={{borderColor:'grey', borderWidth: 1, margin: 5, padding: 5}}>
            <Text style={{marginBottom: 5}}>Title: {title}</Text>
            <Text>Categories: {categories}</Text>
        </View>
    )
}
export default PostDetail;