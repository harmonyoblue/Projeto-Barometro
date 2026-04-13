import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text  } from "react-native";
import { useState } from "react";
import { Barometer } from "expo-sensors";

export default function Barometro() {
   const [{pressure, relativeAltitude}, setData] = useState({pressure: 0, relativeAltitude: 0});
   const [leitor, setLeitor] = useState(null);

   const AtivarLeitor = () => {
    leitor ? desligar() : ligar();
   };

   const ligar = () => {
    setLeitor(Barometer.addListener(setData));
   };

   const desligar = () => {
    leitor && leitor.remove();
    setLeitor(null);
   };

  return (
    <SafeAreaView  style={{
      justifyContent: 'center'
    }
    }>
      <Text>Barometro yay </Text>
      <Text>Sensor: {leitor ? 'ligado' : 'desligado'} </Text>
      <Text>Pressão: {pressure} hPa</Text>
      <Text>Altura: {relativeAltitude ?? "Indefinido"} </Text>

      <Button title="Ligar / Desligar"onPress={AtivarLeitor}/>

    </SafeAreaView>
  );
}