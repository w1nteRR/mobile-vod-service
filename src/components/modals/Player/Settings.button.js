import React from 'react'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SettingsBtnWrapper = ({ iconName, buttonText, onPress, fontColor, iconColor }) => {
    return (
        <Wrapper>
            <TouchableOpacity onPress={onPress}>
                <InnerContainer>
                    <Icon 
                        size={25} 
                        color={iconColor || '#fff'} 
                        name={iconName} 
                    />
                    <Text 
                        fontColor={fontColor}
                    >
                        {buttonText}
                    </Text>
                </InnerContainer>
            </TouchableOpacity>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    width: 100%;
    height: 65px;
`

const InnerContainer = styled.View`
    width: 100%;
    height: 100%;
    
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    display: flex;
    margin: 10px;    
`
const Text = styled.Text`
    color: ${props => props.fontColor || '#fff'};
    margin-left: 10%;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
`

export default SettingsBtnWrapper