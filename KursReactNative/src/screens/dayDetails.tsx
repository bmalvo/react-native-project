import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../themes/colors';
import dayjs from 'dayjs';
import ListItems from '../components/ListItems';
import { RouteProp, useRoute} from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Root';


const DayDetails = () => {

  const { params: { day, locationName } } = useRoute<RouteProp<RootStackParamList, 'DayDetails'>>();


  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 20 }}
      data={day.hour}
      ListHeaderComponent={
        <View style={{ alignItems: 'center', backgroundColor: COLORS.background }}>
          <Text style={[styles.location, styles.text]}>{locationName}</Text>
          <Text style={[styles.date, styles.text]}>{dayjs(day.date).format('dddd, D MM YYYY')}</Text>
          <Image source={{ uri: `https:${day.day.condition.icon}` }} width={100} height={100} />
          <Text style={[styles.temperature, styles.text]}>{`${Math.floor(day.day.mintemp_c)}° - ${Math.ceil(day.day.maxtemp_c)}°`}</Text>
        </View>
      }

      renderItem={({ item: hour, index }) => {
        const isLast = index === day.hour.length - 1
        return (
          <View style={[styles.item, index === 0 && styles.firstItem, isLast && styles.lastItem]}>
            <ListItems
              key={hour.time}
              isLast={isLast}
              title={dayjs(hour.time).format('HH:mm')}
              value={hour.temp_c}
              condition={hour.condition}
            />
          </View>
        )
      }}
    />
  )
};

export default DayDetails

const styles = StyleSheet.create({

  container: {

    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingBottom: 20
  },

  location: {

    fontSize: 30,
    fontWeight: 'bold',
  },

  date: {
    fontSize: 26,
    marginBottom: 20
  },

  temperature: {

    fontSize: 40,
    fontWeight: 600,
  },

  text: {

    color: COLORS.text,
    marginTop: 20
  },
  item: {

    backgroundColor: COLORS.lightBlue,
    paddingHorizontal: 20,
  },
  firstItem: {

    paddingTop: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  lastItem: {

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingBottom: 10
  }
}
);