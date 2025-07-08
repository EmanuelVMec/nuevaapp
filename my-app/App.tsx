import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Platform, BackHandler } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import Iniciar from './Iniciar';
import Informacion from './Informacion';
import ElegirEdad from './ElegirEdad';
import ElegirDificultad from './ElegirDificultad';

const Stack = createNativeStackNavigator();

export default function App() {
  const [edadSeleccionada, setEdadSeleccionada] = useState<string | null>(null);

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4F6D7A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              edadSeleccionada={edadSeleccionada}
              setEdadSeleccionada={setEdadSeleccionada}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="ElegirDificultad" component={ElegirDificultad} />

        <Stack.Screen 
          name="Iniciar" 
          options={{ title: 'Modo de Juego' }}
        >
          {(props) => (
            <Iniciar
              {...props}
              edadSeleccionada={props.route.params?.edadSeleccionada}
              dificultadSeleccionada={props.route.params?.dificultadSeleccionada}
            />
          )}
        </Stack.Screen>

        <Stack.Screen 
          name="Informacion" 
          component={Informacion} 
          options={{ title: 'Información' }}
        />

        <Stack.Screen 
          name="ElegirEdad" 
          options={{ title: 'Seleccionar Edad' }}
        >
          {(props) => (
            <ElegirEdad
              {...props}
              setEdadSeleccionada={setEdadSeleccionada}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation, edadSeleccionada, setEdadSeleccionada }: any) {
  const handleIniciar = () => {
    if (!edadSeleccionada) {
      Alert.alert(
        "Edad requerida",
        "Por favor selecciona una edad antes de comenzar para adaptar los ejercicios a tu nivel.",
        [{ text: "Entendido", style: 'default' }]
      );
    } else {
      navigation.navigate('ElegirDificultad', { edadSeleccionada });
    }
  };

  const handleSalir = () => {
    Alert.alert(
      "Salir",
      "¿Estás seguro que deseas salir de la aplicación?",
      [
        { text: "Cancelar", style: 'cancel' },
        { text: "Salir", onPress: () => Platform.OS === 'android' ? BackHandler.exitApp() : null }
      ]
    );
  };

  return (
    <LinearGradient 
      colors={['#E8F1F2', '#BDD5EA', '#577399']} 
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Math Genius</Text>
          <Text style={styles.subheader}>Aprende matemáticas de forma divertida</Text>
        </View>

        <Image 
          source={require('./assets/splash-icono.png')} 
          style={styles.image} 
        />

        <Text style={styles.text}>
          Domina las matemáticas básicas con ejercicios adaptados a tu edad y nivel de dificultad.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, !edadSeleccionada && styles.buttonDisabled]}
            onPress={handleIniciar}
            activeOpacity={0.7}
          >
            <LinearGradient
              colors={!edadSeleccionada ? ['#cccccc', '#aaaaaa'] : ['#4CAF50', '#2E7D32']}
              style={styles.buttonGradient}
            >
              <MaterialIcons name="play-arrow" size={24} color="white" />
              <Text style={styles.buttonText}>Comenzar</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('ElegirEdad')}
            activeOpacity={0.7}
          >
            <LinearGradient
              colors={['#2196F3', '#1976D2']}
              style={styles.buttonGradient}
            >
              <MaterialIcons name="person" size={24} color="white" />
              <Text style={styles.buttonText}>Seleccionar Edad</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Informacion')}
            activeOpacity={0.7}
          >
            <LinearGradient
              colors={['#9C27B0', '#7B1FA2']}
              style={styles.buttonGradient}
            >
              <MaterialIcons name="info" size={24} color="white" />
              <Text style={styles.buttonText}>Información</Text>
            </LinearGradient>
          </TouchableOpacity>

          {edadSeleccionada && (
            <View style={styles.ageContainer}>
              <View style={styles.ageBadge}>
                <Text style={styles.selectedAge}>Edad: {edadSeleccionada}</Text>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => setEdadSeleccionada(null)}
                >
                  <MaterialIcons name="close" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={styles.exitButton}
          onPress={handleSalir}
          activeOpacity={0.7}
        >
          <Text style={styles.exitButtonText}>Salir de la aplicación</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  header: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2E4057',
    marginBottom: 5,
    fontFamily: 'sans-serif-condensed',
  },
  subheader: {
    fontSize: 16,
    color: '#4F6D7A',
    fontWeight: '500',
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 25,
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#2E4057',
    textAlign: 'center',
    paddingHorizontal: 25,
    marginBottom: 35,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonGradient: {
    paddingVertical: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  ageContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  ageBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  selectedAge: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  removeButton: {
    marginLeft: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitButton: {
    marginTop: 20,
    paddingVertical: 10,
  },
  exitButtonText: {
    color: '#4F6D7A',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});