import { View, Text, Button, FlatList } from 'react-native'
import React from 'react'
import GestureModal from '../../../components/GestureModal'
import styles from '../../../styles'
import jobs from '../../../constants/Jobs'
import Job from '../components/Job'
import JobDescription from '../components/JobDetails'
import JObDetails from '../components/JobDetails'

const Home = () => {
    const [modal, setModal] = React.useState({ data: null, visible: false })

    return (
        <View style={styles.container}>
            <FlatList
                style={[styles.container, styles.jobWrapper]}
                data={jobs}
                keyExtractor={(item) => `${item.jobId}`}
                renderItem={({ item }) => (
                    <Job
                        border
                        job={item}
                        onApply={() =>
                            setModal({ ...modal, data: item, visible: true })
                        }
                    />
                )}
            />

            {modal.visible ? (
                <GestureModal visible={modal}>
                    <JObDetails job={modal?.data} />
                </GestureModal>
            ) : null}
        </View>
    )
}

export default Home
