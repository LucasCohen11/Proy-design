import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Gradient = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#50DDC3", "#A098F3"]}
        angle={123.65}
        locations={[-0.4, 1.16]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient2}
      >
        <LinearGradient
          colors={["#FFDEDA", "rgba(255,255,255,0)"]}
          angle={184.82}
          locations={[0.013, 1]}
          start={{ x: 0, y: -0.01 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradient2}
        ></LinearGradient>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,

    height: "100%",
    backgroundColor: "#FFFFFF",
    alignContent: "center",
    justifyContent: "center",
  },
  gradient1: {
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
    width: "100%",
    flex: 1,
  },
  gradient2: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});

export default Gradient;
