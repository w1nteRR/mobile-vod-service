import React, { useState, useReducer, useContext } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import SettingsBtnWrapper from '../../../components/modals/Player/Settings.button'
import YearPicker from '../../../components/Search/YearPicker'

import { TagContainer, RatingText } from '../../../components/Film/Film.styles'

import years from '../../../data/years.json'
import companies from '../../../data/companies.json'
import genres from '../../../data/genres.json'


import { SearchContext } from '../../../reducers/SearchTags'

const SearchTagsModal = ({ route }) => {
    const navigation = useNavigation()
    const { searchState } = useContext(SearchContext)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalData, setModalData] = useState()
    const [modalDataName, setModalDataName] = useState()

    const handlePress = (dataType, dataName) => {
        setModalDataName(dataName)
        setModalData(dataType)
        setModalVisible(true)
    }

    const doSearch = async () => {
        try {
            const res = await axios.post('http://192.168.1.104:8000/search/tags', {
                year: searchState.year.map(val => val.value),
                company: searchState.company.map(val => val.value),
                genr: searchState.genr.map(val => val.value)            
        })
            route.params.getData(res.data)
        } catch (err) {
            console.log(err)
            alert('Choose tags')
        }
    }     

    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                <View style={{ height: "80%" ,width: '100%', backgroundColor:"#171717", justifyContent:"flex-start"}}>
                    <SettingsBtnWrapper 
                        iconName='keyboard-return'
                        onPress={() => navigation.goBack()}  
                    />
                    <View style={{height: 100}}>
                        <View> 
                            <SettingsBtnWrapper 
                                onPress={() => handlePress(years, 'years')}
                                buttonText='years' 
                            />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                        {
                            searchState.year.map(year => (
                                <TagContainer>
                                    <RatingText textColor='silver'>{year.value}</RatingText>
                                </TagContainer>
                            ))
                        }
                        </View>
                    </View>
                    <View style={{height: 100}}>
                        <View> 
                            <SettingsBtnWrapper 
                                onPress={() => handlePress(companies, 'companies')}
                                buttonText='companies' 
                            />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                        {
                            searchState.company.map(company => (
                                <TagContainer>
                                    <RatingText textColor='silver'>{company.value}</RatingText>
                                </TagContainer>
                            ))
                        }
                        </View>
                    </View>
                    <View style={{height: 100}}>
                        <View> 
                            <SettingsBtnWrapper 
                                onPress={() => handlePress(genres, 'genres')}
                                buttonText='genres' 
                            />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                        {
                            searchState.genr.map(genr => (
                                <TagContainer>
                                    <RatingText textColor='silver'>{genr.value}</RatingText>
                                </TagContainer>
                            ))
                        }
                        </View>
                    </View>
                    <SettingsBtnWrapper 
                        buttonText='search'
                        onPress={() => doSearch()}
                        
                    />
                    {
                        modalData
                        &&
                        <YearPicker 
                            modalVisible={modalVisible}
                            setModalVisible={setModalVisible} 
                            data={modalData}
                            modalDataName={modalDataName}
                        />
                    }
                </View>
            </View>
    )
}

export default SearchTagsModal