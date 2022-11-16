import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../constants'

const Button = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} >
        <Text style={styles.buttonText} >{title}</Text>
        </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.active
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
    }
})