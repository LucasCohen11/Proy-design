import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import {
  DefaultTheme,
  Appbar,
  Provider as PaperProvider,
  Text,
  Button,
} from "react-native-paper";
import Gradient from "./components/Gradient";
import { LinearGradient } from "expo-linear-gradient";
import Heart from "./Heart.svg";
import Line from "./assets/Drawings/Shadow.svg";
import Dock from "./assets/Drawings/dock.svg";
import Cat from "./assets/Drawings/Cat.svg";
import Arrow from "./assets/Drawings/arrow.svg";
import SingleNote from "./assets/Drawings/SingleNote.svg";
import DoubleNote from "./assets/Drawings/doubleNote.svg";
import SingleStar from "./assets/Drawings/StarSingle.svg";
import DoubleStar from "./assets/Drawings/StarDouble.svg";
const screenLog = () => {
  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;
  return (
    <PaperProvider>
      <Gradient></Gradient>

      <View style={styles.dock}>
        <Line width={"100%"} style={styles.Line}></Line>
        <Cat style={styles.Cat}></Cat>
        <TouchableOpacity
          onPress={() => console.log("btnReg")}
          style={{ width: "81%", borderRadius: 30 }}
        >
          <LinearGradient
            useAngle={true}
            angle={91}
            locations={[0.29, 1.15]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#CBAFFC", "#91BAFD"]}
            style={styles.btnReg}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Registrarse</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Button
          mode="outlined"
          style={styles.btnLog}
          uppercase={false}
          labelStyle={{
            fontSize: 18,
          }}
          onPress={() => console.log("btnLog")}
        >
          Iniciar Sesión
        </Button>
      </View>
      <TouchableOpacity
        style={{ position: "absolute", top: height * 0.05, left: width * 0.03 }}
        onPress={() => console.log("back")}
      >
        <Arrow></Arrow>
      </TouchableOpacity>

      <Heart
        style={{
          position: "absolute",
          top: height * 0.1,
          left: width * 0.4,
        }}
        width={width * 0.08}
        height={height * 0.08}
      />

      <SingleStar
        style={{
          position: "absolute",
          top: height * 0.2,
          left: width * 0.16,
        }}
        width={width * 0.04}
        height={height * 0.04}
      />

      <DoubleStar
        style={{
          position: "absolute",
          top: height * 0.3,
          left: width * 0.62,
        }}
        width={width * 0.08}
        height={height * 0.08}
      />
      <SingleNote
        style={{
          position: "absolute",
          top: height * 0.4,
          left: width * 0.3,
        }}
        width={width * 0.05}
        height={height * 0.05}
      />
      <DoubleNote
        style={{
          position: "absolute",
          top: height * 0.1,
          left: width * 0.75,
        }}
        width={width * 0.09}
        height={height * 0.09}
      />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1,
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
    backgroundColor: "#FAFAFA",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  btnLog: {
    marginBottom: 10,
    marginTop: 10,
    width: "81%",
    borderRadius: 30,
    height: 55,
    justifyContent: "center",
  },
  btnReg: {
    marginBottom: 10,
    marginTop: 10,
    width: "100%",
    borderRadius: 30,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  Cat: {
    position: "absolute",
    top: -170,
    right: 0,
    left: 20,
    bottom: 0,
  },
  Line: { position: "absolute", top: -10, right: 0, left: 0, bottom: 0 },
  star: {},
});

export default screenLog;
