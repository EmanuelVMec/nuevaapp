import { StyleSheet, Text, View } from 'react-native';

export default function Iniciar({ edadSeleccionada }: any) {

  let contenido;
  switch (edadSeleccionada) {
    case '4-6 años':
      contenido = 'Aprenderás sumas y restas básicas.';
      break;
    case '7-9 años':
      contenido = 'Aquí trabajaremos multiplicación y división.';
      break;
    case '10-12 años':
      contenido = 'Estudiaremos fracciones y decimales.';
      break;
    case '13-15 años':
      contenido = 'Álgebra básica y ecuaciones lineales.';
      break;
    case '16-18 años':
      contenido = 'Geometría, álgebra avanzada y trigonometría.';
      break;
    default:
      contenido = 'Por favor selecciona una edad para comenzar.';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edad seleccionada: {edadSeleccionada || 'No seleccionada'}</Text>
      <Text style={styles.text}>{contenido}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});
