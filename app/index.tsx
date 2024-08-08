import { StyleSheet , Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

// Componente App
export default function App() {
  return (
    <View className="felx-1 items-center justify-center bg-black ">
      <Text className="text-3xl color-white">Estoy en INDEX</Text>
      <StatusBar style='auto' />
      <Link href="/profile" style={{color: 'green', marginTop: 20, fontSize: 30}}
      >Perfil</Link> 


      
    </View>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});*/

