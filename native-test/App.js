import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, TextInput, TextComponent} from 'react-native';

export default function App() { 
  const [outputText,setOutputText] = useState('Pulsa para empezar a contar');
  const [contador,setcontador] = useState(0)
  const [text, setInputText] = useState('')
  
  const sumar = function(){
  setcontador(contador + parseInt(text))
  setOutputText('el numero es '+ contador)
  };


  const reset = function(){
  setcontador(0)
  setOutputText('Pulsa para empezar a contar')
  setInputText()
  
  
  };

  const props = 
  {
    keyboardType:"numeric",
    placeholder:'numero a sumar',
    textAlign:'center',
    className:"texto",
    clearButtonMode:"while-editing",
  }
  

  return (
   <View style={styles.container}>
     <Text alignItems='center'>{outputText}</Text>
    <TextInput onChangeText={text => setInputText(text)}
      {...props}
      value={text}
    > 
    </TextInput>
     <Button title="sumar" onPress={sumar}/>
     <Button title="reset" onPress={reset}/>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:40,
  },
  
});
