import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors, images } from '../../constants'

const Header = ({ title, onPress }) => {
    return (
        <View style={[styles.header]}>
            <View style={styles.row}>
                <Text style={[styles.title]}>{title}</Text>
                <TouchableOpacity onPress={onPress || null}>
                    <Image source={images.hamburger} style={[styles.icon]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        padding: 10,
        backgroundColor: colors.active,
        height: 100,
    },
    row: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    icon: {
        width: 30,
        height: 30,
    },
})
