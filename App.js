import { StyleSheet, Text, View } from 'react-native';
import AddCart from './screens/AddCart';
import CardDetails from './screens/CardDetails';
import Home from './screens/Home';
import IncomeStatus from './screens/IncomeStatus';

export default function App() {
  return (
    <View style={styles.container}>
      <IncomeStatus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#fff',
  },
});
