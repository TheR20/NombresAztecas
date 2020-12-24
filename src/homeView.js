import * as React from 'react';
import {  View, Text,ImageBackground,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'galio-framework';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import mujeres from './mujeres';
import lista from './lista';
import LocalizedStrings from 'react-native-localization';

const bannerSuperiorID = "ca-app-pub-8454341646863233/5919129256";

let strings = new LocalizedStrings({
  en:{
    a1:"Male",
    a2: "Female",
    textodimemasaoru: "Nahuatl or Mexican is a Uto-Aztec language that is spoken primarily by the Nahuas in Mexico and Central America. Nahuatl means in their language: language of clear or pleasant sound. Its exact origin is not known, but at least in the 7th century it already existed. Many Nahuatl names are preserved, and most of the meanings of proper names in Nahuatl refer to native plants and animals. ",
  },
  es:{

    a1:"Hombres",
    a2: "Mujeres",
textodimemasaoru: "El náhuatl o mexicano es una lengua uto-azteca que se habla principalmente por los nahuas en México y en América Central. Náhuatl significa en su idioma: lengua de sonido claro o agradable. No se conoce su origen exacto, pero al menos en el siglo VII ya existía Se conservan muchos nombres náhuatl, y la mayoría de los significados de los nombres propios en náhuatl aluden a plantas y animales autóctonos.",
  },

});

function HomeScreen({ navigation }) {
  return (
      <ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/jAvoklO.jpg'}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Text style={styles.topBox2}>{strings.textodimemasaoru}</Text>

      <Button round size="large" onPress={() => navigation.navigate('Nombres',{genero: "hombre"})} color="#399DF1" style={{ marginTop: 100, }}>{strings.a1}</Button>
<Button round size="large" onPress={() => navigation.navigate('Nombres',{genero: "mujer"})} color="#EC6AE6" style={{ marginTop: 10, }}>{strings.a2}</Button>
    </View>

    <BannerAd
                unitId={bannerSuperiorID}
                     size={BannerAdSize.FULL_BANNER}
                     requestOptions={{
                       requestNonPersonalizedAdsOnly: true,
                     }}
                   />
      </ImageBackground>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/Ddx5QwS.png'}}>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


    <Button round size="small" onPress={() => navigation.navigate('Mujeres')} color="#436DD5" style={{ marginTop: 450, marginBottom: 200 }}>{strings.textodimemasaoru}</Button>

  </View>

    </ImageBackground>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Happy" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Mad" component={DetailsScreen} options={{headerShown: false}} />
        <Stack.Screen name="Nombres" component={mujeres}  />
        <Stack.Screen name="Completo" component={lista}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F5FCFF',
    paddingTop: 50,

  },


  backgroundImage: {
    paddingTop: 20,
    flex: 1,
    resizeMode: 'cover',
  },

    topBox: {
      textAlign: 'center', // <-- the magic
      marginTop: 10,
      color: "#3658DE",
        fontSize: 41,
        fontFamily: 'Iowan Old Style'
    },
      topBox2: {
        textAlign: 'center', // <-- the magic
          fontSize: 18,
          color: "white",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        fontFamily: 'Iowan Old Style'
      }
});

export default App;
