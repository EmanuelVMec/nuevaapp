import { StyleSheet, Text, View } from 'react-native';

export default function Iniciar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aquí comenzarás tus lecciones de Matemática Básica. ¡Vamos a aprender!</Text>
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
