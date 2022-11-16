import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native'
import React from 'react'
import { colors, images } from '../../constants'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated'

const { height, width } = Dimensions.get('screen')

const GestureModal = ({ children }) => {
    const gesY = useSharedValue(200)

    const viewStyles = useAnimatedStyle(() => {
        let borderRadius = gesY.value <= 100 ? 0 : 30
        let borderWidth = gesY.value <= 100 ? 0 : 0.5

        return {
            top: gesY.value,
            borderRadius,
            borderWidth,
        }
    })

    const crossContainerStyles = useAnimatedStyle(() => {
        return {
            display: gesY.value <= 0 ? 'flex' : 'none',
        }
    })

    const trackerStyles = useAnimatedStyle(() => {
        return {
            display: gesY.value <= 0 ? 'none' : 'flex',
        }
    })

    const panGestureHandlerEvent = useAnimatedGestureHandler({
        onStart: (e, c) => {
            c.translateY = gesY.value
        },
        onActive: (e, c) => {
            gesY.value = e.translationY + c.translateY
        },
        onEnd: () => {
            if (gesY.value < 100) {
                gesY.value = withSpring(-50)
            } else if (gesY.value >= height / 2) {
                gesY.value = withSpring(height)
            } else {
                gesY.value = withSpring(200)
            }
        },
    })

    React.useEffect(() => {
        gesY.value = withSpring(200)
    })

    return (
        <Animated.View style={[styles.view, viewStyles]}>
            <View style={[styles.modalHeader]}>
                <PanGestureHandler onGestureEvent={panGestureHandlerEvent}>
                    <Animated.View style={[styles.tracker, trackerStyles]} />
                </PanGestureHandler>
                <Animated.View
                    style={[styles.crossContainer, crossContainerStyles]}
                >
                    <TouchableOpacity
                        onPress={() => (gesY.value = withSpring(height))}
                    >
                        <Image source={images.cross} style={[styles.cross]} />
                    </TouchableOpacity>
                </Animated.View>
            </View>

            {children}
        </Animated.View>
    )
}

export default GestureModal

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.white,
        height,
        paddingHorizontal: 20,
        paddingTop: 20,
        top: 200,
        borderWidth: 0.5,
        borderRadius: 30,
        borderColor: colors.gray,
        position: 'absolute',
        width
    },
    modalHeader: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tracker: {
        width: 40,
        height: 10,
        borderRadius: 10,
        backgroundColor: colors.gray,
    },
    crossContainer: {
        alignItems: 'flex-end',
        width: '100%',
        display: 'none',
    },
    cross: {
        height: 30,
        width: 30,
    },
})
