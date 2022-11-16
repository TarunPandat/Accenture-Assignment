import { TextInput, View } from 'react-native'
import React from 'react'
import styles from '../../../styles'

const SearchBar = ({ value, placeholder, onChange, ...props }) => {
    return (
        <View style={styles.searchBarWrapper}>
            <TextInput
                style={styles.searchBar}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder || 'Search'}
                {...props}
            />
        </View>
    )
}

export default SearchBar
