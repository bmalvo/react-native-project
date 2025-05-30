import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Dashboard } from '../../src/screens/dashboard';

export default function HomeScreen() {

  return (
    <SafeAreaProvider>
      <StatusBar style='light' />
      <SafeAreaView style={styles.container}>
        <ThemedView>
          <Dashboard />
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
