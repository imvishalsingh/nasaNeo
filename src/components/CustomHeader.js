import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import constants
import { Colors } from '../common/constants';

export default CustomHeader = ({title}) => {
    return (
        <View style={[styles.container]}>
            <Text style={styles.title_format}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        paddingVertical: 10, 
        backgroundColor: Colors.Primary_Light,
        justifyContent: 'center'
    },
    title_format: {
        color: '#fff', 
        fontSize: 23
    }
});