import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { MainColor, TextColor } from '../jsontesters/slides'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'

const width = Dimensions.get('window').width

export default function SlidesPages({ navigation, slide, index, translateX }) {

    const rStlye = useAnimatedStyle(() => {
        return {

        }
    })
    return (
        <Animated.View key={index} style={[styles.container, rStlye]}>
            <View style={{
                top: -20,
                alignItems: 'center',
            }}>
                <Image style={{
                    height: 450,
                    resizeMode: 'contain',
                    aspectRatio: 490 / 390.3,
                }} source={slide.background_image} />
            </View>
            <View>
                <Text style={styles.texthead}>{slide.heading}</Text>

                <Text style={styles.textsubhead}>{slide.subheading}</Text>
                <Text style={styles.text}>{slide.description}</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 20,
                width: '100%',
                alignSelf: 'center',
                alignItems: 'center',
                gap: 10,
                justifyContent: 'space-between',
            }}>
                {
                    index != 2 && (


                        <Pressable style={{
                            flex: 1,
                            backgroundColor: MainColor,
                            padding: 15,
                            bottom: 20,
                            alignSelf: 'center',
                            // top: -20,
                            borderRadius: 10,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 24,
                                textAlign: 'center',
                            }}>
                                {
                                    index != 0 ? 'Prev' : 'Next'
                                }

                            </Text>
                        </Pressable>
                    )
                }
                <Pressable onPress={
                    () => { navigation.navigate('signin') }
                } style={{
                    flex: 1,
                    backgroundColor: MainColor,
                    padding: 15,
                    bottom: 20,
                    alignSelf: 'center',
                    // top: -20,
                    borderRadius: 10,
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 24,
                        textAlign: 'center',
                    }}>
                        {slide.cta_button_text}
                    </Text>
                </Pressable>
            </View>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        paddingHorizontal: '1%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texthead: {
        marginBottom: 10,
        fontSize: 40,
        color: MainColor,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    textsubhead: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    text: {
        fontSize: 15,
    }
})