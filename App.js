import React from 'react';//React est nécessaire pour utiliser les composants React.
import { StyleSheet } from 'react-native';//StyleSheet est utilisé pour définir les styles.
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import { NavigationContainer } from '@react-navigation/native';// fournit le contexte de navigation.
import { createStackNavigator } from '@react-navigation/stack';//crée une pile de navigateurs.

const Stack = createStackNavigator();//est utilisé pour créer une pile de navigation, qui permet de naviguer entre les écrans de manière hiérarchique.

function App() {//cette fonction principale retourne la configuration de navigation de l'application.
  return (//(NavigationContainer) Encapsule toute l'application pour gérer la navigation.
    //(Stack.Navigator) Définit la pile de navigateurs avec initialRouteName spécifiant l'écran initial 'home'
    //Stack.Screen:Définition de chaque écran dans la pile avec son nom et son composant correspondant.
    // options={{ headerShown: false }}  pour cacher l'en-tête sur l'écran d'accueil.
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
