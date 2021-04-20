import React from 'react'
import styled from 'styled-components/native'

import HomeIcon from '../svg/home.svg'
import SearchIcon from '../svg/search.svg'
import TodayIcon from '../svg/today.svg'
import FavoriteIcon from '../svg/favorite.svg'
import AccountIcon from '../svg/account.svg'

const TabArea = styled.View`
    height: 60px;
    background-color: #4EADBE;
    flex-direction: row;
`
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export default ({ state, navigation }) => {
    
    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }
    
    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon width="24" height="24" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <SearchIcon width="24" height="24" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={() => goTo('Appointments')}>
                <TodayIcon width="24" height="24" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={() => goTo('Favorites')}>
                <FavoriteIcon width="24" height="24" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                <AccountIcon width="24" height="24" fill="#FFFFFF"/>
            </TabItem>
        </TabArea>
    )
}