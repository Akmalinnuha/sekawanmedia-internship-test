import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image 
        source={require('../assets/foto-profil.png')}
        style={styles.profileImage}
      />

      {/* Name */}
      <Text style={styles.name}>Akmalinnuha</Text>

      {/* Simple Information */}
      <Text style={styles.info}>
        Informatics Engineering student with experience working in mobile development field. 
        Looking for a role as mobile developer to grow and gain experience. 
        Eager to bring my ability to design and develop mobile app to a dynamic team that values innovation.
      </Text>

      {/* Contact Information */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Contact Information</Text>

        {/* Email */}
        <View style={styles.contactRow}>
          <Ionicons name="mail-outline" size={24} color="black" />
          <Text style={styles.contactText} onPress={() => Linking.openURL('mailto:akmalinnuha.0@gmail.com')}>
            akmalinnuha.0@gmail.com
          </Text>
        </View>

        {/* Phone */}
        <View style={styles.contactRow}>
          <Ionicons name="call-outline" size={24} color="black" />
          <Text style={styles.contactText} onPress={() => Linking.openURL('tel:+6285759900061')}>
            +62-8575 9900 061
          </Text>
        </View>

        {/* LinkedIn */}
        <View style={styles.contactRow}>
          <Ionicons name="logo-linkedin" size={24} color="black" />
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://www.linkedin.com/in/akmalinnuha')}>
            LinkedIn
          </Text>
        </View>

        {/* GitHub */}
        <View style={styles.contactRow}>
          <Ionicons name="logo-github" size={24} color="black" />
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://github.com/Akmalinnuha')}>
            GitHub
          </Text>
        </View>

        {/* Portfolio */}
        <View style={styles.contactRow}>
          <Ionicons name="briefcase-outline" size={24} color="black" />
          <Text style={styles.contactText} onPress={() => Linking.openURL('https://drive.google.com/file/d/1EjNLRPs7tIAKX3HJznAcuK7nyvZJrVu5/view')}>
            Portfolio
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    textAlign: 'justify',
    marginHorizontal: 12,
    marginBottom: 20,
  },
  contactContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'blue',
  },
});

