import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import {
  DefaultTheme,
  Appbar,
  Provider as PaperProvider,
  Text,
  Button,
} from "react-native-paper";
import Gradient from "./components/Gradient";

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#A098F3",
      accent: "#FFDEDA",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <Gradient style={styles.screen}></Gradient>
      <View style={styles.dock}>
        <Button mode="contained" style={styles.btn}>
          Registrarse
        </Button>
        <Button mode="outlined" style={styles.btn}>
          iniciar sesión
        </Button>
      </View>
      {/* <Appbar style={styles.bottom}>
        <Appbar.Action
          icon="home"
          onPress={() => console.log("boton presionado")}
        />
      </Appbar> */}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,

    justifyContent: "center",
    alignContent: "center",
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
  },
  dock: {
    backgroundColor: "white",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginBottom: 10,
    marginTop: 10,
    width: "81%",
  },
});
