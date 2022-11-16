import { View, Text, Alert } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import Job from './Job'

const JObDetails = ({ job }) => {
    return (
        <View>
            <Job
                job={job}
                onApply={() => Alert.alert('Job Applied Successfully!')}
            />

            <View style={[styles.jobDesContainer]}>
                <Text style={styles.jobText}>Job Description: </Text>

                <Text style={styles.jobText}>{job?.jobDescription}</Text>
            </View>
        </View>
    )
}

export default JObDetails
