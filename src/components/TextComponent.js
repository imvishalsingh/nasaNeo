import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import constants
import { Colors } from '../common/constants';

export default TextComponent = ({title, font=14, color='#fff'}) => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.textFormating, {fontSize: font}]}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textFormating: {
        color: Colors.Base_White
    }
});