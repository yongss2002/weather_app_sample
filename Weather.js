import React, {Component} from 'react'
import {StyleSheet, Text, View, StatusBar} from 'react-native'
import {LinearGradient} from "expo"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import PropTypes from 'prop-types'

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        title: 'Raining like a MF',
        subtitle: 'For more info look outside',
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: 'Sunny as fuck',
        subtitle: 'Go get your ass burnt',
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: 'Thunder storm in the house',
        subtitle: 'Actually, outside of the house',
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ['#D7DECC', '#304352'],
        title: 'Clouds',
        subtitle: 'I know, fucking boring',
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: 'Cold as balls',
        subtitle: 'Do you want to build a snowman? Fuck no!',
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: 'Drizzle',
        subtitle: 'Is like rain, but gay 🏳️‍🌈',
        icon: 'weather-hail'
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: 'Haze',
        subtitle: 'What the fuck is haze',
        icon: 'weather-windy'
    },
    Mist: {
        colors: ['#D7DECC', '#304352'],
        title: 'Mist!!',
        subtitle: 'It like you don have no glasses on' ,
        icon: 'weather-fog'
    },
}

function Weather({weatherName, temp}) {
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color='white' size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    weatherName : PropTypes.string.isRequired
}

export default Weather

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    temp: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    }, 
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color:'white',
        marginBottom:10,
        fontWeight: '300'
    }, 
    subtitle: {
        fontSize:24,
        backgroundColor: 'transparent',
        color:'white',
        marginBottom:34
    }
})
