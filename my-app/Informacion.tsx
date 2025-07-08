import { StyleSheet, Text, View, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import { FontAwesome, Feather, Entypo, MaterialIcons } from '@expo/vector-icons';

export default function Informacion() {
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Error al abrir el enlace:", err));
  };

  const socialLinks = [
    {
      id: 1,
      name: 'TikTok',
      icon: <Image source={require('./assets/tik-tok.png')} style={styles.customIcon} />,
      url: 'https://www.tiktok.com/@aprendamosmatemat',
      color: '#000000'
    },
    {
      id: 2,
      name: 'Facebook',
      icon: <FontAwesome name="facebook-square" size={28} color="#3b5998" />,
      url: 'https://web.facebook.com/julioprofenet/?_rdc=1&_rdr#',
      color: '#3b5998'
    },
    {
      id: 3,
      name: 'YouTube',
      icon: <Feather name="youtube" size={28} color="#FF0000" />,
      url: 'https://www.youtube.com/@julioprofe',
      color: '#FF0000'
    },
    {
      id: 4,
      name: 'Instagram',
      icon: <Entypo name="instagram" size={28} color="#C13584" />,
      url: 'https://www.instagram.com/matematicasperfectas/?hl=es-la',
      color: '#C13584'
    }
  ];

  const features = [
    {
      title: "Aprendizaje Adaptativo",
      description: "Contenido ajustado al nivel de cada estudiante",
      icon: <MaterialIcons name="school" size={24} color="#4A90E2" />
    },
    {
      title: "Ejercicios Prácticos",
      description: "Problemas matemáticos con retroalimentación inmediata",
      icon: <MaterialIcons name="calculate" size={24} color="#4A90E2" />
    },
    {
      title: "Seguimiento de Progreso",
      description: "Monitoriza tu mejora con estadísticas detalladas",
      icon: <MaterialIcons name="trending-up" size={24} color="#4A90E2" />
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Matemática Básica</Text>
          <Text style={styles.headerSubtitle}>La mejor manera de aprender</Text>
        </View>

        {/* App Info Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sobre la Aplicación</Text>
          <Text style={styles.cardText}>
            Esta aplicación está diseñada para transformar el aprendizaje de las matemáticas en una experiencia interactiva y divertida. 
            Con contenido adaptado a diferentes edades y niveles, ayudamos a los estudiantes a dominar conceptos fundamentales.
          </Text>
          <Image 
            source={require('./assets/splash-icono.png')} 
            style={styles.bannerImage}
          />
        </View>

        {/* Features Section */}
        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>Características Principales</Text>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <View style={styles.featureIconContainer}>
                {feature.icon}
              </View>
              <View style={styles.featureTextContainer}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Social Links */}
        <View style={styles.socialsContainer}>
          <Text style={styles.sectionTitle}>Recursos Recomendados</Text>
          <View style={styles.socialIcons}>
            {socialLinks.map((social) => (
              <TouchableOpacity
                key={social.id}
                style={[styles.iconContainer, { borderColor: social.color }]}
                onPress={() => openLink(social.url)}
                activeOpacity={0.7}
              >
                <View style={styles.icon}>
                  {social.icon}
                </View>
                <Text style={styles.iconText}>{social.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2025 Matemática Básica App. Todos los derechos reservados.
          </Text>
          <Text style={styles.footerLegal}>
            El contenido educativo está protegido por derechos de autor. 
            Prohibida su reproducción sin autorización.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F8FAFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 25,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2C3E50',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    fontWeight: '500',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 25,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 15,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 16,
    color: '#34495E',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginTop: 15,
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
  },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIconContainer: {
    backgroundColor: '#EBF5FB',
    borderRadius: 10,
    padding: 12,
    marginRight: 15,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#7F8C8D',
    lineHeight: 20,
  },
  socialsContainer: {
    width: '100%',
    marginBottom: 25,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  iconContainer: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  icon: {
    marginBottom: 8,
  },
  customIcon: {
    width: 28,
    height: 28,
  },
  iconText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
  },
  footer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7F8C8D',
    marginBottom: 8,
    textAlign: 'center',
  },
  footerLegal: {
    fontSize: 12,
    color: '#BDC3C7',
    textAlign: 'center',
    lineHeight: 18,
  },
});