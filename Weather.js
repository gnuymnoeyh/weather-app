import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ["#4da0b0","#d39d38"],
        title: 'Haze',
        subtitle: "Just don't go outside"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#4B79A1","#283E51"],
        title: 'Thunderstorm',
        subtitle: "Just don't go outside"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title: 'Drizzle',
        subtitle: "Just don't go outside"
    },
    Rain: {
        iconName: "cloud-rainy",
        gradient: ["#2980b9","#2980b9"],
        title: 'Rain',
        subtitle: "Just don't go outside"
    },
    Snow: {
        iconName: "cloud-snowy",
        gradient: ["#8e9eab","#eef2f3"],
        title: 'Snow',
        subtitle: "Just don't go outside"
    },
    Atmosphere: {
        iconName: "weather-night-partly-cloudy",
        gradient: ["#BA8B02","#181818"],
        title: 'Atmosphere',
        subtitle: "Just don't go outside"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#fceabb","#f8b500"],
        title: 'Clear',
        subtitle: "Just don't go outside"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7","#2c3e50"],
        title: 'Clouds',
        subtitle: "Just don't go outside"
    },
    Mist: {
        iconName: "weather-pouring",
        gradient: ["#24c6dc","#514a9d"],
        title: 'Mist',
        subtitle: "Just don't go outside"
    },
    Dust: {
        iconName: "weather-tornado",
        gradient: ["#283048","#859398"],
        title: 'Dust',
        subtitle: "Thanks a lot China"
    },
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                size={96} 
                name={weatherOptions[condition].iconName} 
                color="white"
             />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title : {
        color: "white",
        fontWeight: "300",
        fontSize: 36,
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})