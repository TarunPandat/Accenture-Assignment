import { View, FlatList } from 'react-native'
import React from 'react'
import GestureModal from '../../../components/GestureModal'
import styles from '../../../styles'
import jobs from '../../../constants/Jobs'
import Job from '../components/Job'
import JobDetails from '../components/JobDetails'
import SearchBar from '../components/SearchBar'
import FuzzySearch from 'fuzzy-search'

const Home = () => {
    const [modal, setModal] = React.useState({ data: null, visible: false })
    const [search, setSearch] = React.useState('')

    const searchData = new FuzzySearch(
        jobs,
        ['jobId', 'jobTitle', 'jobLocation'],
        {
            caseSensitive: false,
        }
    )

    const searchJobs = searchData.search(search)

    return (
        <View style={styles.container}>
            <SearchBar
                value={search}
                onChange={(value) => {
                    setModal({ ...modal, visible: false })
                    setSearch(value)
                }}
                placeholder="Search Jobs"
            />
            <FlatList
                style={[styles.container, styles.jobWrapper]}
                data={searchJobs}
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
                    <JobDetails job={modal?.data} />
                </GestureModal>
            ) : null}
        </View>
    )
}

export default Home
