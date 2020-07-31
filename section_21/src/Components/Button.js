import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({onPress, children }) => {
    const { buttonStyles, textStyle } = styles;
    return (
        <TouchableOpacity
        onPress = {onPress}
        style={buttonStyles}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}
const styles = {
    buttonStyles: {
        flex: 1,
        alignSef: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginHorizontal: 15,
        marginBottom: 10
    },
    textStyle:{
        alignSelf:'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}
export default Button;