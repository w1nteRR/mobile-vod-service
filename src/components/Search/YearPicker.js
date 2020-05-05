import React, { useState, useEffect, useContext } from 'react'
import { Modal, StyleSheet, Text, View, CheckBox, ScrollView } from 'react-native'

import SettingsBtnWrapper from '../../components/modals/Player/Settings.button'

import { SearchContext } from '../../reducers/SearchTags'


const YearPicker = ({ data, modalVisible, setModalVisible, modalDataName }) => {
    const { searchDispatch, searchState } = useContext(SearchContext)

    const [checkBoxInit, setInit] = useState([])
    const [dataName, setDataName] = useState('')

    Object.assign({}, searchState, checkBoxInit)

    const handleCheckBox = (id, dataName) => {
        const checkBox = checkBoxInit.find(checkbox => checkbox.id === id)
        checkBox.checked = !checkBox.checked
        
        const checkBoxesChecked = Object.assign([], checkBoxInit, checkBox)
        const checkedReady = checkBoxesChecked.filter(film => film.checked)
        
        switch(dataName) {
            case 'years':
                return searchDispatch({
                    type: 'toggleYears',
                    payload: checkedReady
                })
            case 'companies':
                return searchDispatch({
                    type: 'toggleCompanies',
                    payload: checkedReady
                })
            case 'genres':
                return searchDispatch({
                    type: 'toggleGenres',
                    payload: checkedReady
                })
        }
    }

    useEffect(() => {
        setInit(data)
        setDataName(modalDataName)
    }, [data])

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <SettingsBtnWrapper 
                            buttonText='close'
                            onPress={() => setModalVisible(!modalVisible)}  
                        />
                        <ScrollView>
                        {
                            checkBoxInit.map(item => (
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
                                        onChange={() => handleCheckBox(item.id, dataName)}
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

});

export default YearPicker;