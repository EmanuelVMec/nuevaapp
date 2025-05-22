import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface EjercicioProps {
  ejercicio: {
    pregunta: string;
    opciones: string[];
    respuestaCorrecta: string;
  };
  onRespuesta: (correcta: boolean) => void;
}

export default function Ejercicio({ ejercicio, onRespuesta }: EjercicioProps) {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const seleccionarRespuesta = (opcion: string) => {
    setRespuestaSeleccionada(opcion);
    const correcta = opcion === ejercicio.respuestaCorrecta;
    setFeedback(correcta ? '¡Correcto!' : 'Incorrecto');
    onRespuesta(correcta);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pregunta}>{ejercicio.pregunta}</Text>
      {ejercicio.opciones.map((opcion) => (
        <TouchableOpacity
          key={opcion}
          style={[
            styles.opcion,
            respuestaSeleccionada === opcion && styles.opcionSeleccionada,
          ]}
          disabled={respuestaSeleccionada !== null}
          onPress={() => seleccionarRespuesta(opcion)}
        >
          <Text style={styles.textoOpcion}>{opcion}</Text>
        </TouchableOpacity>
      ))}
      {feedback && <Text style={styles.feedback}>{feedback}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '90%',
  },
  pregunta: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  opcion: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
  },
  opcionSeleccionada: {
    backgroundColor: '#2980b9',
  },
  textoOpcion: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  feedback: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
