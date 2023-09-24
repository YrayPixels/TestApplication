import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { SlideInLeft, SlideInRight } from 'react-native-reanimated'

export default function Logo({ styles }) {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>

            <Animated.View entering={SlideInLeft.duration(2000)} style={styles.circle} />
            <Animated.View style={styles.rectangle} />
            <Animated.View entering={SlideInRight.duration(2000)}
                style={styles.circle} />
        </View>
    )
}

