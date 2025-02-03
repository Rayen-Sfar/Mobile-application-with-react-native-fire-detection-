import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert('Erreur', 'Veuillez saisir une adresse e-mail.');
      return;
    }

    // Placeholder for API call logic

    Alert.alert('Succès', 'Un lien de réinitialisation a été envoyé à votre adresse e-mail.');
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>Enter your email address to receive a password reset link.</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={24} color="#A9A9A9" style={styles.icon} />
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor="#A9A9A9"
              onChangeText={text => setEmail(text)}
            />
          </View>
          {error && <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>}
          <TouchableOpacity style={styles.sendButton} onPress={handleForgotPassword}>
            <Text style={styles.buttonText}>Send Reset Link</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.backToLogin}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f8f4',
    width: '100%',
    height: 50,
    marginBottom: 10,
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#000',
  },
  sendButton: {
    backgroundColor: '#175b27',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  backToLogin: {
    color: '#175b27',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default ForgotPasswordScreen;
