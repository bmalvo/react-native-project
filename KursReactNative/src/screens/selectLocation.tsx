import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/Root'
import { COLORS } from '../themes/colors'

interface ListItem {

  title: string;
  value: string;
}

const SelectLocation = () => {
  
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [value, setValue] = useState('');
  const [list, setList] = useState<ListItem[]>([]);

  
  return (
    <View style={style.container}>
      <TextInput
        placeholder='wpisz lokalizację'
        placeholderTextColor={COLORS.text}
        selectionColor={COLORS.text}
        style={style.input}
        onChangeText={setValue}
        value={value} />
      <TouchableOpacity style={style.button}
        onPress={() => {
          setList([...list, { title: value, value: value }]);
          setValue('');
        }}>
        <Text style={style.buttonText}>Dodaj</Text>
      </TouchableOpacity>

      <View style={style.listcontainer}>

      {list.map((item) => (
        <View key={item.title}>
          <Text>{item.title}</Text>
          </View>
        ))}
        </View>

    </View>
  )
};

export default SelectLocation

const style = StyleSheet.create({
  container: {

    margin: 10,
  },

  input: {
    width: '100%',
    // height: 50,
    // backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.link,
    padding: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: COLORS.text
  },
  button: {

    width: '100%',
    backgroundColor: COLORS.link,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {

    color: COLORS.text,
    fontSize: 16
  },
  item: {
    width: '100%',
    backgroundColor: COLORS.lightBlue,
    marginBottom: 10,
    
  },
  listcontainer: {
    
    width: '100%',
    marginTop: 40
  }
})