import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

//import constants
import { Colors } from '../common/constants';

export default CustomHeader = ({searchEvent}) => {

    const [date, setDate]               = useState(new Date())
    const [lastDate, setLastDate]       = useState(new Date())
    const [open, setOpen]               = useState(false)
    const [inputType, setInputType]     = useState('minDate');
    const [minDate, setMinDate]         = useState(new Date());
    const [maxDate, setMaxDate]         = useState(new Date());

    const openCalender = (req) => {
        setOpen(true);
        setInputType(req);
        if(req=='minDate'){
            setDate(minDate);
        } 
        else {
            setDate(minDate);
        }
    }

    return (
        <>
            <View style={{flexDirection: 'row', height: 50, marginVertical: 15, marginHorizontal: 20}}>
                <View style={{width: '42%'}}>
                    <TouchableOpacity onPress={()=>openCalender('minDate')} style={{flex: 1, flexDirection: 'row', backgroundColor: Colors.Primary_Dark2, marginHorizontal: 5, borderRadius: 80}}>
                        <TextComponent title={`From: ${moment(minDate).format("DD-MM-YYYY")}`} font={13} />
                    </TouchableOpacity>
                </View>
                <View style={{width: '42%'}}>
                    <TouchableOpacity onPress={()=>openCalender('maxDate')} style={{flex: 1, flexDirection: 'row', backgroundColor: Colors.Primary_Dark2, marginHorizontal: 5, borderRadius: 80}}>
                        <TextComponent title={`To: ${moment(maxDate).format("DD-MM-YYYY")}`} font={13} />
                    </TouchableOpacity>
                </View>
                <View style={{width: '15%'}}>
                    <TouchableOpacity onPress={()=>searchEvent(minDate, maxDate)} style={{height: '100%', width: '100%', borderRadius: 50, backgroundColor: Colors.Primary_Dark2}}>
                        <TextComponent title={`🔎`} font={13} />
                    </TouchableOpacity>
                </View>
            </View>
            <DatePicker
                modal
                open={open}
                date={date}
                mode={'date'}
                minimumDate={lastDate}
                onConfirm={(date) => {
                    setOpen(false)
                    inputType=='minDate'?setMinDate(date):setMaxDate(date);
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </>
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