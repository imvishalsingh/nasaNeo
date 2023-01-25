import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextComponent from "../components/TextComponent";

//import constants
import { Colors } from '../common/constants';

export default TitleBox = ({title, v1=null, v2=null}) => {
    return (
        <View style={styles.titleComponent}>
            <View style={styles.containerWidth}>
                <TextComponent title={title} />
            </View>
            <View style={[styles.containerWidth, {paddingVertical: 5}]}>
                { v1!=null?<TextComponent title={v1} />: null}
                { v2!=null?<TextComponent title={v2} />: null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleComponent: {
        height: 50, 
        flexDirection: 'row', 
        marginHorizontal: 20, 
        marginVertical: 10, 
        borderRadius: 40, 
        justifyContent: 'space-between', 
        backgroundColor: Colors.Primary_Dark2
    },
    containerWidth: {
        width: '50%'
    }
});