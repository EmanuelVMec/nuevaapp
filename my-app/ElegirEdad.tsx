import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ElegirEdad({ navigation, setEdadSeleccionada }: any) {
  const ageRanges = [
    { range: '4-6 años', icon: 'child-care' },
    { range: '7-9 años', icon: 'directions-run' },
    { range: '10-12 años', icon: 'school' },
    { range: '13-15 años', icon: 'sports-esports' },
    { range: '16-18 años', icon: 'emoji-people' }
  ];

  const handleSelectAge = (ageRange: string) => {
    setEdadSeleccionada(ageRange);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona la edad del estudiante</Text>
      <Text style={styles.subtitle}>El contenido se adaptará al nivel seleccionado</Text>

      <View style={styles.buttonsContainer}>
        {ageRanges.map((item, index) => (
          <TouchableOpacity 
            key={index}
            style={styles.ageButton}
            onPress={() => handleSelectAge(item.range)}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              <MaterialIcons name={item.icon} size={24} color="#4A90E2" />
            </View>
            <Text style={styles.ageText}>{item.range}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  buttonsContainer: {
    width: '100%',
    maxWidth: 400,
  },
  ageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#4A90E2',
  },
  iconContainer: {
    backgroundColor: '#EBF5FB',
    borderRadius: 8,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  ageText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  backButtonText: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});