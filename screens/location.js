import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, Pressable, ActivityIndicator, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import Global from '../utils/global';
import Loading from './loading';

const LocationPermission = (props) => {

    const [isClicked, setClicked] = useState(false);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Location.getForegroundPermissionsAsync();
            if(status !== 'granted')
                setLoaded(true);
            else
                props.navigation.navigate('Notification');
        })();
    }, []);

    const pressSubmitAction = () => {
        setClicked(true);
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                Alert.alert('Your location permission is denied');
                setClicked(false);
            } else {
                props.navigation.navigate('Notification');
            }
        })();
    }

    if(!isLoaded)
        return (<Loading/>);

    return (
        <ImageBackground source={Global.IMAGE.LOCATION} style={styles.bgContainer}>
            <TouchableOpacity onPress={pressSubmitAction}>
                <LinearGradient
                    colors={['rgba(232, 64, 125, 1)', 'rgba(238, 127, 94, 1)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    {
                        isClicked ? <ActivityIndicator size='large' color='white'/>
                                  : <Text style={styles.btnText}>ALLOW LOCATION</Text>
                    }
                </LinearGradient>
            </TouchableOpacity>
            <Pressable style={styles.moreBtn} onPress={() => props.navigation.navigate('Notification')}>
                <Text style={styles.moreText}>TELL ME MORE</Text>
            </Pressable>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgContainer: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 40,
    },
    gradient: {
        width: Global.SIZE.W_260,
        height: Global.SIZE.W_60,
        borderRadius: Global.SIZE.W_60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 19,
        letterSpacing: -0.5,
        fontWeight: 'bold',
        color: 'white',
    },
    moreBtn: {
        marginTop: 20,
    },
    moreText: {
        fontSize: 17,
        color: Global.COLOR.BTN_MORE
    },
});

export default LocationPermission;
