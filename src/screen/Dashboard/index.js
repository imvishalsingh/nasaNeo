import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, StatusBar, Text, Button, ScrollView, SafeAreaView, Dimensions } from "react-native";
import { showMessage } from "react-native-flash-message";
import { Strings, Colors } from '../../common/constants';
import { getChartData } from '../../common/helper/useJsonParse';
import moment from "moment";

// import custom component
import { TitleBox, CustomHeader, DateRangePicker, SpinnerLoader, TextComponent } from "../../components"

// api actions
import { getAsteroidListApi } from '../../store/dash/dash.actions';

const Dashboard = ({props}) => {
     
    // setup the states
    const [ loaderStatus, setLoaderStatus ]      = useState(false);
    const [ asteroidList, setAsteroidList ]      = useState([]);
  
    // call the search api  
    const searchEvent = async(minDate, maxDate) => {
        try {
            let payload = {};
            setLoaderStatus(true);
            payload.minDate = moment(minDate).format("YYYY-MM-DD");
            payload.maxDate = moment(maxDate).format("YYYY-MM-DD");
            let response = await getAsteroidListApi(payload);
            setLoaderStatus(false);
             if(response?.element_count){
                setAsteroidList(getChartData(response));   
            } else {
                showMessage({ message: response.code, description: response.error_message, type: "danger" });
            }
        }
        catch(err){
            showMessage({ message: 'Error', description: err, type: "danger" });
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <CustomHeader title={Strings.HEADER_TITLE} />
            <View style={styles.listContainer}>
                <DateRangePicker searchEvent={(minDate, maxDate)=>searchEvent(minDate, maxDate)} />
                { loaderStatus ?
                    <SpinnerLoader />
                : 
                    <>
                        {
                            asteroidList.length==0 ?
                                <TextComponent title={Strings.NO_DATA_FOUND} />
                            : 
                                <>
                                    <ChatComponent asteroidList={asteroidList} />
                                    <TitleBox title={Strings.FASTEST_ASTEROID} v1={`${Strings.ASTEROID_ID} ${asteroidList?.fastestAstro?.id}`} v2={`${Strings.SPEED} ${asteroidList?.fastestAstro?.speed} ${Strings?.KM}`} />
                                    <TitleBox title={Strings.CLOSEST_ASTEROID} v1={`${Strings.ASTEROID_ID} ${asteroidList?.closestAstro?.id}`} v2={`${Strings.DISTANCE} ${asteroidList?.closestAstro?.speed} ${Strings?.KM}`} />
                                    <TitleBox title={Strings.AVERAGE_SIZE} v1={`${asteroidList?.averageSize} ${Strings.KM}`} />
                                </>
                        }
                        
                    </>
                }
            </View>
        </SafeAreaView>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: Colors.Primary_Dark
    },
    listContainer: {
        flex:1,
        backgroundColor: Colors.Primary_Dark,
    },
    title_format: {
        color: '#fff', 
        fontSize: 23
    }
});