import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../../styles'
import Button from '../../../components/Button'

const Job = ({ job, onApply, border }) => {
    return (
        <View style={[styles.jobContainer, { borderWidth: border ? 0.5 : 0 }]}>
            <Text style={[styles.jobText]}>Job Title: {job.jobTitle}</Text>
            <Text style={[styles.jobText]}>Job Id: {job.jobId}</Text>
            <Text style={[styles.jobText]}>Location: {job.jobLocation}</Text>

            <Button
                title="Apply"
                style={{ width: 200, marginTop: 10 }}
                onPress={onApply}
            />
        </View>
    )
}

export default Job
