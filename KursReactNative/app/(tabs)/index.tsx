import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Dashboard } from '../../src/screens/dashboard';
import DayDetails from '@/src/screens/dayDetails';

import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import isToday from 'dayjs/plugin/isToday';

dayjs.extend(isToday);
dayjs.locale('pl');


export default function HomeScreen() {

  return (
    <SafeAreaProvider>
      <StatusBar style='light' />
      <SafeAreaView style={styles.container}>
        <ThemedView>
          {/* <Dashboard /> */}
          <DayDetails />
        </ThemedView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

  container: {

    backgroundColor: '#00BFFF',
    flex: 1
  }
});