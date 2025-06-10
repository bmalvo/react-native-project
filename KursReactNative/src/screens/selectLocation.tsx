import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/Root'

const SelectLocation = () => {
  
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <View>
      <TouchableOpacity onPress={() => navigate('LocationDetails')}>
        <Text>selectLocation</Text>
      </TouchableOpacity>
    </View>
  )
};

export default SelectLocation