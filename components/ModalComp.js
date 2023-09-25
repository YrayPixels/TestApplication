import React from 'react'
import { Modal, Text, View } from 'react-native'
import { primary } from '../styles/general'

export default function ModalComp({ message, showModal, setShowModal }) {
    return (

        <Modal
            transparent
            visible={showModal}
            onRequestClose={() => {
                setShowModal(false)
            }}
            animationType='slide'
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#000000990',
                    alignItems: 'center'
                }}>
                <View
                    onPress={() => { setShowModal(false) }}
                    style={{
                        position: 'absolute',
                        height: 400,
                        width: '100%',
                        bottom: 0,
                        backgroundColor: primary,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        // elevation: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <View style={{ width: 200, }}>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: 'white',
                        }}>
                            {message}
                        </Text>
                    </View>

                </View>

            </View>

        </Modal>
    )
}
