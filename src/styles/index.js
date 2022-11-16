import { StyleSheet } from 'react-native'
import { colors } from '../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    jobContainer: {
        borderRadius: 15,
        borderColor: colors.gray,
        padding: 20,
        marginBottom: 20,
    },
    jobWrapper: {
        padding: 10,
    },
    jobText: {
        fontSize: 16,
        marginBottom: 10,
    },
    jobDesContainer: {
        margin: 20,
    },
    searchBarWrapper: {
        padding: 10,
    },
    searchBar: {
        borderWidth: 0.5,
        padding: 10,
        borderColor: colors.gray,
        borderRadius: 10,
        fontSize: 16,
        color: colors.gray,
    },
})

export default styles
