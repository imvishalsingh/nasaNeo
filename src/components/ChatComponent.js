import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";

//import constants
import { Colors } from '../common/constants';

export default ChatComponent = ({asteroidList}) => {
    return (
        <ScrollView horizontal={true}>
            <LineChart
                data={{
                    labels: asteroidList?.dateRow,
                    datasets: [
                        {
                            data: asteroidList?.astroCount
                        }
                    ],
                }}
                width={1024}
                height={Dimensions.get("window").height/1.8}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor: Colors.Primary_Dark,
                    backgroundGradientFrom: Colors.Primary_Medium_Light,
                    backgroundGradientTo: Colors.Primary_Medium_Light,
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 36
                    },
                    propsForDots: {
                        r: "8",
                        strokeWidth: "7",
                        stroke: Colors.Primary_Blue
                    }
                }}
                bezier
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
});