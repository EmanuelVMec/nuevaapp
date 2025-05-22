import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ElegirEdad({ navigation, setEdadSeleccionada }: any) {

  const handleSelectAge = (ageRange: string) => {
    setEdadSeleccionada(ageRange);
    navigation.navigate('Home'); // O 'Iniciar' si quieres ir directo a iniciar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selecciona la edad del estudiante:</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleSelectAge('4-6 años')}>
        <Text style={styles.buttonText}>4-6 años</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleSelectAge('7-9 años')}>
        <Text style={styles.buttonText}>7-9 años</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleSelectAge('10-12 años')}>
        <Text style={styles.buttonText}>10-12 años</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleSelectAge('13-15 años')}>
        <Text style={styles.buttonText}>13-15 años</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={styles.button} onPress={() => handleSelectAge('16-18 años')}>
        <Text style={styles.buttonText}>16-18 años</Text>
      </TouchableOpacity>
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
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
