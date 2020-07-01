import React, { useContext } from 'react'
import { Modal, StyleSheet, Text, View, CheckBox, ScrollView } from 'react-native'

import { SearchContext } from '../../reducers/Search'
import { useSearch } from '../../hooks/useSearch'
import { Button } from '../shared/Button'
import { Container } from '../styled/screens'

export const TagPicker = ({ modalVisible, setModalVisible }) => {
    
    const [state, dispatch] = useContext(SearchContext)

    const { addToSearchFilterData } = useSearch()
   
    const handleCheckBox = id => {
        const checkBox = state.tags.data.find(checkbox => checkbox.id === id)
        checkBox.checked = !checkBox.checked

        const checkBoxesChecked = Object.assign([], state.tags.data).filter(film => film.checked).map(tag => tag.value)

        addToSearchFilterData(state.tags.type, checkBoxesChecked)
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={state.isModalOpen}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Container justify='flex-end' m='10px'>
                            <Button 
                                type='danger'
                                iconColor='#fff'
                                w='30px'
                                p='5px'
                                iconName='close' 
                                onPress={() => dispatch({
                                    type: 'CLOSE_MODAL'
                                })} 
                            />
                        </Container>
                        <ScrollView>
                        {
                            state.tags.data.map(item => (
                                <View key={item.id} style={{
                                        display: 'flex', 
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        width: '70%',
                                        margin: 10
                                    }}
                                >
                                    <View style={{
                                        backgroundColor: '#fff', 
                                        borderRadius: 10,
                                        color: 'red'
                                    }}>
                                    <CheckBox 
                                        value={item.checked}
                                        onChange={() => handleCheckBox(item.id)}
                                    />
                                    </View>
                                    <Text style={{
                                            color: 'silver',
                                            fontWeight: 'bold',
                                            fontSize: 13
                                        }}
                                    >
                                        {item.value}
                                    </Text>
                                </View>
                            ))
                        }
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        marginTop: 110,
        backgroundColor: "#171717",
        borderRadius: 20,
        width: '90%',
        height: 500,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },

})