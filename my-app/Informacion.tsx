import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, Feather, Entypo } from '@expo/vector-icons';

export default function Informacion() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Información de la App</Text>
        <Text style={styles.text}>
          Esta app está diseñada para ayudar a los niños a aprender matemáticas básicas de forma divertida e interactiva. 
          Incluye operaciones, tablas, juegos y ejercicios adaptados a diferentes edades.
        </Text>
      </View>

      <View style={styles.socials}>
        <Text style={styles.socialsTitle}>Síguenos en nuestras redes:</Text>

        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.icon}>
            <Image 
              source={require('./assets/tik-tok.png')} 
              style={styles.customIcon} 
              resizeMode="contain"
            />
            <Text style={styles.iconText}>TikTok</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="facebook-square" size={24} color="#3b5998" />
            <Text style={styles.iconText}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <Feather name="youtube" size={24} color="#FF0000" />
            <Text style={styles.iconText}>YouTube</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <Entypo name="instagram" size={24} color="#C13584" />
            <Text style={styles.iconText}>Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sección de Derechos de Autor */}
      <View style={styles.footer}>
        <Text style={styles.copyright}>
          © 2025 Matematica Básica App. Todos los derechos reservados.
        </Text>
        <Text style={styles.legal}>
          El contenido educativo de esta aplicación está protegido por derechos de autor. 
          Cualquier reproducción, distribución o uso indebido sin autorización está prohibido.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 16,
  },
  card: {
    width: '95%',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3498db',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  socials: {
    width: '95%',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: -290,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  socialsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3498db',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#EAEAEA',
    width: '22%',
  },
  customIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  iconText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  footer: {
    width: '95%',
    backgroundColor: '#EAEAEA',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  copyright: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888',
    marginBottom: 6,
  },
  legal: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
});
