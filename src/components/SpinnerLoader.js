import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

//import constants
import { Colors } from '../common/constants';

export default SpinnerLoader = ({title}) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.Base_White} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center'
    },
});