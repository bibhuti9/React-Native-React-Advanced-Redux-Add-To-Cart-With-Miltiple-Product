import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import { COLOR } from '../../theme/colors';

export default function Spinner() {
    return (
        <View style={[StyleSheet.absoluteFill, styles.container]}>
            <Lottie
                source={require('../../../assets/icon/spinner.json')}
                autoPlay
                loop
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    }
})