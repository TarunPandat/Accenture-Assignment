import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Home } from './src/screens/Home'
import styles from './src/styles'
import Header from './src/components/Header'

const App = () => {
    return (
        <>
        <Header title="My Jobs" />
            <SafeAreaView style={styles.container}>
                <Home />
            </SafeAreaView>
        </>
    )
}

export default App
