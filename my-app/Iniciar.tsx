import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Platform, BackHandler } from 'react-native';
import Ejercicio from './Ejercicio';
import { ejerciciosPorEdad } from './ejercicios';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

export default function Iniciar({ route }: any) {
  const { edadSeleccionada, dificultadSeleccionada } = route.params;
  const navigation = useNavigation();

  const [indiceEjercicio, setIndiceEjercicio] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [respuestaActualCorrecta, setRespuestaActualCorrecta] = useState<boolean | null>(null);
  const [respondido, setRespondido] = useState(false);
  const [soundCorrecto, setSoundCorrecto] = useState<Audio.Sound | null>(null);
  const [soundIncorrecto, setSoundIncorrecto] = useState<Audio.Sound | null>(null);
  const [modalVisible, setModalVisible] = useState(false); // Estado para el modal de resultados

  useEffect(() => {
    const loadSounds = async () => {
      const { sound: soundC } = await Audio.Sound.createAsync(require('./assets/sounds/correcto.mp3'));
      const { sound: soundI } = await Audio.Sound.createAsync(require('./assets/sounds/incorrecto.mp3'));
      setSoundCorrecto(soundC);
      setSoundIncorrecto(soundI);
    };

    loadSounds();

    return () => {
      soundCorrecto?.unloadAsync();
      soundIncorrecto?.unloadAsync();
    };
  }, []);

  if (!edadSeleccionada || !dificultadSeleccionada) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Por favor, selecciona una edad y dificultad antes de comenzar.</Text>
      </View>
    );
  }

  const ejercicios = (ejerciciosPorEdad[edadSeleccionada] || []).filter(
    (ejercicio) => ejercicio.dificultad === dificultadSeleccionada
  );

  const handleRespuesta = async (correcta: boolean) => {
    setRespondido(true);
    setRespuestaActualCorrecta(correcta);

    if (correcta) {
      setPuntuacion(p => p + 1);
      await soundCorrecto?.replayAsync();
    } else {
      await soundIncorrecto?.replayAsync();
    }
  };

  const siguienteEjercicio = () => {
    if (!respondido) {
      alert('Por favor, selecciona una respuesta antes de continuar.');
      return;
    }

    if (indiceEjercicio + 1 < ejercicios.length) {
      setIndiceEjercicio(indiceEjercicio + 1);
      setRespondido(false);
      setRespuestaActualCorrecta(null);
    } else {
      setModalVisible(true); // Mostrar el modal cuando se termine los ejercicios
    }
  };

  const intentarDeNuevo = () => {
    setIndiceEjercicio(0);
    setPuntuacion(0);
    setRespondido(false);
    setRespuestaActualCorrecta(null);
    setModalVisible(false); // Cerrar el modal
  };

  const iniciar = () => {
    navigation.navigate('Home'); // Cambiar a la pantalla de inicio de la app
  };

  const salir = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp(); // Cierra la aplicación en Android
    } else {
      navigation.navigate('Home'); // Redirige al Home en iOS
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Matemática Básica</Text>
      <Text style={styles.edad}>
        Edad seleccionada: <Text style={styles.edadValor}>{edadSeleccionada}</Text>
      </Text>
      <Text style={styles.edad}>
        Dificultad seleccionada: <Text style={styles.edadValor}>{dificultadSeleccionada}</Text>
      </Text>

      {ejercicios.length > 0 ? (
        <View style={styles.card}>
          <Text style={styles.preguntaNumero}>
            Pregunta {indiceEjercicio + 1} de {ejercicios.length}
          </Text>
          <View style={styles.contenido}>
            <Ejercicio
              key={indiceEjercicio}
              ejercicio={ejercicios[indiceEjercicio]}
              onRespuesta={handleRespuesta}
            />
            <TouchableOpacity
              style={[styles.botonSiguiente, !respondido && { backgroundColor: '#ccc' }]}
              onPress={siguienteEjercicio}
            >
              <Text style={styles.botonTexto}>Siguiente</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text style={styles.text}>No hay ejercicios para esta edad y dificultad.</Text>
      )}

      {/* Modal de resultados */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {puntuacion < 7 ? (
              <Text style={styles.modalHeader}>Puedes intentarlo de nuevo.</Text>
            ) : (
              <Text style={styles.modalHeader}>¡Felicidades!.</Text>
            )}
            <Text style={styles.modalText}>Tu puntaje: {puntuacion} de {ejercicios.length}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={intentarDeNuevo}>
              <Text style={styles.modalButtonText}>Intentar de Nuevo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={iniciar}>
              <Text style={styles.modalButtonText}>Ir al Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={salir}>
              <Text style={styles.modalButtonText}>Salir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 10,
  },
  edad: {
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 5,
  },
  edadValor: {
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  preguntaNumero: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  contenido: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonSiguiente: {
    backgroundColor: '#3498db',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    width: '60%',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 10,
    width: '80%',
    marginVertical: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
