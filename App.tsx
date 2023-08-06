import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading'; // npx expo install expo-app-loading
import SplashScreen from 'expo-splash-screen';


import{
  useFonts, //Função para carregar as fontes
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold

} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme' // Não precisa de chaves quando se utiliza a importação default
import { Dashboard } from './src/screens/dashboard';
import { HighlightCard } from './src/components/HighlightCard';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium, //Carregando as fontes
    Poppins_700Bold
  });//fontsLoaded será utilizado para saber se as fontes já foram carregadas.
  
  //Segurar a tela de carregamento do app até que as fontes sejam carregadas
  if(!fontsLoaded){
    return SplashScreen//Enquanto as fontes não estiverem carregadas, o app ira segurar o carregamento.
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
