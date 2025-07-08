import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface DifficultyOption {
  level: string;
  color: string;
  icon: string;
  description: string;
}

export default function ElegirDificultad({ route, navigation }: any) {
  const { edadSeleccionada } = route.params;

  const difficultyOptions: DifficultyOption[] = [
    {
      level: 'fácil',
      color: '#4CAF50',
      icon: 'mood',
      description: 'Operaciones básicas para empezar'
    },
    {
      level: 'media',
      color: '#FFC107',
      icon: 'sentiment-satisfied',
      description: 'Desafíos moderados'
    },
    {
      level: 'difícil',
      color: '#F44336',
      icon: 'sentiment-dissatisfied',
      description: 'Problemas complejos'
    }
  ];

  const seleccionarDificultad = (dificultad: string) => {
    navigation.navigate('Iniciar', {
      edadSeleccionada,
      dificultadSeleccionada: dificultad,
    });
  };

  return (
    <LinearGradient 
      colors={['#E8F4F8', '#B8DFEB']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Para {edadSeleccionada}</Text>
        <Text style={styles.title}>Elige el nivel de dificultad</Text>
        <Text style={styles.subtitle}>Selecciona según el nivel de desafío que prefieras</Text>
      </View>

      <View style={styles.difficultyContainer}>
        {difficultyOptions.map((option) => (
          <TouchableOpacity
            key={option.level}
            style={[styles.difficultyButton, { borderColor: option.color }]}
            onPress={() => seleccionarDificultad(option.level)}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={[`${option.color}99`, option.color]}
              style={styles.gradientBackground}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.iconContainer}>
                <MaterialIcons 
                  name={option.icon as any} 
                  size={32} 
                  color="white" 
                />
              </View>
              <Text style={styles.difficultyLevelText}>
                {option.level.charAt(0).toUpperCase() + option.level.slice(1)}
              </Text>
              <Text style={styles.difficultyDescription}>{option.description}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={24} color="#4A90E2" />
        <Text style={styles.backButtonText}>Volver a selección de edad</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  headerText: {
    fontSize: 18,
    color: '#4A90E2',
    fontWeight: '600',
    marginBottom: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
    maxWidth: '80%',
  },
  difficultyContainer: {
    width: '100%',
    alignItems: 'center',
  },
  difficultyButton: {
    width: '90%',
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 2,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  gradientBackground: {
    padding: 25,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  difficultyLevelText: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
    marginBottom: 8,
  },
  difficultyDescription: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '600',
    marginLeft: 8,
  },
});