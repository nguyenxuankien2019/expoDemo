import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card  from './Card'
import Button from './Button';

const PostDetail = ({ posts }) => {
    return (
        <Card>   
                {posts.map(post => <Item key={post.id} title={post.title} categories={post.categories} />)}
        </Card>
    )
}
const Item = ({ title, categories, }) => {
    const url = "https://www.packman.co.in/media/catalog/product/cache/23f809ee1867fb487aff3d3e6f1d8f24/n/9/n95-face-mask-packaging-01.jpeg";

    return (
        <View style={{margin: 15, borderColor:'green', borderWidth: 1 }}>
        <View style={styles.header}>
        <Image 
            style={{height: 70, width: 70}}
            source={{uri:"data:image/jpeg;base64,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"}}></Image>

  <View>
  <Text style={{marginBottom: 5}}>Title: {title}</Text>
            <Text>Categories: {categories}</Text>
  </View>
        </View>
  <Image 
            style={{height: 200, width: '90%', margin: 15}}
            source={{uri: url}}></Image>
       <Button onPress={() => Linking.openURL(url)} >
           Buy now
           </Button>
        </View>
    )
}
const styles ={
    header:{
        flexDirection:'row',
        justifyContent: 'space-around',
        borderColor:'grey', borderWidth: 1, margin: 5, padding: 5
    }
}
export default PostDetail;