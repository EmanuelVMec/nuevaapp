import { StyleSheet, Text, View } from 'react-native';

export default function Informacion() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Esta app está diseñada para ayudar a los niños a aprender matemáticas básicas. Incluye operaciones, tablas y ejercicios para diferentes edades.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
