import { StatusBar } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"

import { Routes } from "./src/routes";
import { Loading } from "@components/Loading";

import { ThemeProvider } from 'styled-components/native';
import theme from "./src/theme"

export default function App() {
  // o useFonts é assíncrono e pode demorar um pouco mais a carregar do que a aplicação, 
  // causando uma sensação estranho qunando o usuário entrar, então guardamos em uma constante 
  // pode-se ver que a constante possui até um valor booleano, que representa se ja carregou(true) ou nao(false)
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  // Aqui então colocamos que se o fontsLoaded for verdadeiro, então ele carrega o Groups
  // se for falso, mostra o Loading(tela so pra mostrar que ta carregando), que é uma bolinha de carregamento
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  )
}
