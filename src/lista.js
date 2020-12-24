import * as React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Button,
  TextInput,
  List,
  ImageBackground
} from 'react-native';
import { Component } from 'react';
import LocalizedStrings from 'react-native-localization';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';


//Usa la localisacion para saber el idio del telefono
let strings = new LocalizedStrings({
  en:{
    a1:"ingles",

  },
  es:{
    a1:"espa;ol",

  },

});

const bannerSuperiorID = "ca-app-pub-8454341646863233/5919129256";



export default class App extends React.Component {

  render() {
    var  loadingenmujes =[
      'Ahuic es uno de los nombres populares y era el nombre de la diosa azteca del agua corriente en ríos, arroyos y olas'
        , 'Este es un hermoso nombre azteca que significa "libro"'
        , 'Anacaona es un gran nombre para una niña y tiene un hermoso significado de flor dorada. También se puede abreviar a Ana.'
        , 'Este es otro nombre derivado de deidades. Apozanolotl era el nombre de la diosa azteca de la pureza y, por lo tanto, se convirtió en un gran nombre para tu pequeña.'
        ,'Atlacoya era el nombre de la diosa azteca de la sequía. Es un nombre único inspirado en la diosa de los aztecas '
        , 'Atlatonin era el nombre de la diosa madre azteca y muestra una imagen poderosa de una mujer, lo que lo convierte en un nombre profundo y significativo'
        , 'Atzi es un nombre azteca corto y lindo que está inspirado en una de las mayores maravillas del universo, Rain'
        , 'Chalchihuitlcue es un nombre azteca largo que tiene un hermoso significado, "Ella con la túnica hecha de joyas verdes'
        , 'Chantico es un azteca que significa "La que habita en la casa'
        , 'Un nombre azteca que simboliza las siete serpientes.'
        , 'Chimalma es un nombre azteca con el significado de escudero. Este nombre simbolizará la seguridad de tu chica'
        , 'significa limpio. Es un nombre azteca y significa limpieza y pureza '
       ,'Cihuaton proviene del idioma azteca y se traduce a mujercita, por lo que es un nombre apropiado para su pequeña hija'
      ,'Citlalic traducido a la estrella en ascenso y es un nombre azteca para niñas. Aporta un significado positivo a la vida de su hijo '
        , 'Coyolxauhqui es un nombre azteca que significa campanas de oro. Es largo y se puede usar con un apodo, Coyo.'
        , 'Cozamalotl es otro nombre azteca inspirado en los elementos universales, Rainbow. Simboliza una vida colorida y feliz '
        , 'Nombre azteca que significa canción. Es un nombre hermoso y puede ser una buena opción para los padres que se inclinan por la música '
        , 'Es un nombre azteca que significa "Sangre". Este es uno de esos nombres aztecas que se pueden usar tanto para bebés como para niños.'
        , 'Huixtocihuatl es un nombre azteca que es un nombre maravilloso para una niña. Este nombre proviene de la diosa azteca de la fertilidad.'
        , 'Itzpapalotl es un nombre azteca derivado de la naturaleza. Su traducción al inglés es "mariposa de obsidiana". La mariposa de obsidiana es una referencia folclórica a los murciélagos '
        , 'Macuilxóchitl es otro nombre azteca para niñas que se ha inspirado en la naturaleza y se traduce como “cinco flores”.'
        , 'Metztli, un nombre azteca para niñas nombradas de otra diosa azteca, la diosa de la noche'
        , 'En la cultura azteca, se le da mucha importancia a las deidades. El náhuatl es otro de esos nombres que proviene de la Diosa del agua y los ríos, que es un nombre antiguo ”.'
        , 'Necahual es un poderoso nombre azteca para su hija. Significa superviviente.'
        , 'Este es otro nombre azteca inspirado en la naturaleza. Nochtli se traduce como "fruta de tuna"'
        , 'Ohtli es otro poderoso nombre azteca. Significa una persona que es un campeón, lo cual es un significado maravilloso para el nombre de tu pequeño. Ohtli también se conoce como el hijo de Neil.'
        ,'Quetzalli es un nombre azteca para niñas que significa una hermosa pluma grande. Está inspirado en la cultura azteca, donde las aves y las plumas se consideran una parte prominente de la sociedad '
        , 'Tayanna es un nombre azteca hermoso y popular. Tiene un significado maravilloso, "un regalo de Dios". Es un gran nombre para un bebé, ya que los bebés son un regalo para toda la familia '
        , 'Una vieja tradición azteca es nombrar a las niñas según su orden de nacimiento. Teicuih significa hermana menor y puede ser un buen nombre para sus hijas menores '
        , 'Teiuc es otro nombre azteca basado en la tradición de nombrar a las niñas según su orden de nacimiento. Esto significa segundo nacido y se puede usar para sus hijas más jóvenes y segundas'
        , 'Tlachinolli es un nombre azteca derivado de un poderoso elemento universal, Fuego.'
        , 'Tonantzin significa madre tierra y era el nombre de la Diosa madre azteca'
        , 'Tozi es un nombre azteca que se ha derivado de la diosa azteca de la curación y el agua dulce".'
        , 'Xochiquetzal es un hermoso nombre azteca para niñas inspiradas en la naturaleza. Significa la flor más hermosa '
        , 'Xoco es un nombre azteca basado en la tradición de nombrar a las niñas según su orden de nacimiento. Significa la hermana menor.'
        , 'Xocoyotl es un nombre alternativo para Xoco y significa el niño más joven. Puede abreviarse a Xoco o puede tener un apodo, Xoco '
        , 'Yaotl es un nombre azteca extremadamente poderoso. Significa combatiente, soldado, guerrero, defensor, luchador o rival. Es uno de los nombres aztecas que se puede usar tanto para niños como para niñas.'
        , 'Yaretzi es un nombre azteca con uno de los significados más hermosos. Se traduce como "siempre serás amado" y es una elección maravillosa si buscas un nombre significativo '
        , 'Zyanya es un nombre azteca para niñas que comienzan con "z". Significa "Por siempre y para siempre'
    ];
  var  loading= ['Acalan'
    ,'Ácatl'
    ,'Ahuatzi'
    ,'Chicahua'
    ,'Chimalli'
    ,'Citlalee'
    ,'Cuallee'
    ,'Cuetzpallee'
    ,'Eztli'
    ,'Guatemoc'
    ,'Huitzilin'
    ,'Ilhicamina'
    ,'Itzcali'
    ,'Itzcoatl'
    ,'Matlalihuitl'
    ,'Mictlantecuhtli'
    ,'Montezuma'
    ,'Nahuatl'
    ,'Netzahualcoyotl'
    ,'Ohtli'
    ,'Patlee'
    ,'Tlanextic'
    ,'Tlanextli'
    ,'Tlilpotonqui'
    ,'Tochtlee'
    ,'Toltecatl'
    ,'Tonatiuh'
    ,'Tonauac'
    ,'Tupack'
    ,'Tupoc'
    ,'Ueman'
    ,'Xihuitl'
    ,'Xipil'
    ,'Xipilli'
    ,'Xiutecuhtli'
    ,'Xolotl'
    ,'Yaotl'
    ,'Yaotyl'
    ,'Yolyamanitzin'
    ,'Zipactonal'

  ];
  var  loadingen=['Acalan is an Aztec name for boys derived from a small narrow and long rowing boat.'
    ,'Acatl is an Aztec name inspired by nature. It means a giant reed.'
    ,'Ahuatzi is another Aztec name for boys that is inspired by nature. It means small oak.'
    ,'Chicahua is an Aztec name meaning strong.'
    ,'Chimalli is an Aztec name for boys which means shield. It symbolized safety.'
    ,'Citlalee is an Aztec name which means star. It is a symbol of light.'
    ,'Cuallee is an Aztec name, translating to good. It can also be spelled with a variation of Cuallea.'
    ,'long Aztec name derived from nature, meaning lizard. An alternate spelling can be used, Cuetzpallea.'
    ,'Eztli is an Aztec name that can be used for both boys and girls. It has the meaning of “Blood”.'
    ,'Guatemoc is an Aztec name with the meaning, the falling eagle or descending eagle in Nahuatl. It can be used in different ways with the same meanings, such as Cuathemoc, Cuauhtemotzin or Guatimozin.'
    ,'Huitzilin is another nature-inspired Aztec name, meaning Hummingbird.'
    ,'Ilhicamina is a powerful Aztec name for a boy. It means “he who shoots arrows at the sky”'
    ,'Itzcali is a popular Aztec name meaning the house of beauty.'
    ,'This is a rare name that translates to “Obsidian serpent”. Itzcoatl was the name of the Aztec ruler of Tenochtitlan, the capital of the Aztec Empire.'
    ,'Matlalihuitl means a greenish-blue feather and is a beautiful Aztec name for a boy. It is inspired by birds and feathers in the Aztec culture which was considered very important.'
    ,'Mictlantecuhtli was the name of the Aztec Lord of Mictlan and can be a great name for a boy.'
    ,'Montezuma is inspired by the archer Lord in an angry state. He was the last ruler of Aztec and thus is a powerful name for a boy.'
    ,'Nahuatl is a name that has come from the Goddess of water and rivers. It is a unisex Aztec name and can be used for both sexes.'
    ,'Netzahualcoyotl is a long Aztec name inspired by nature. It means the hungry coyote.'
    ,'Ohtli is another powerful Aztec name. It means a person who is a champion, which is a wonderful meaning for the name of your little one.'
    ,'Patlee is an Aztec name which means medicine. It symbolized healer, and healing and can also be spelled as Patlea.'
    ,'Tlanextic is a positive Aztec name meaning the light of dawn.'
    ,'Tlanextli is an alternative of Tlanextic meaning radiance or splendor.'
    ,'Tlilpotonqui is a rare Aztec name, which translates to feathered in black.'
    ,'Tochtlee is another Aztec name inspired by nature and means rabbit.'
    ,'Toltecatl means an artist or a creative person and can be a wonderful name for babies showing creativity.'
    ,'Tonatiuh means Sunshine. It is an Aztec name symbolizing positivity.'
    ,'Tonauac has a wonderful meaning, the one who possesses light.'
    ,'This is another powerful Aztec name for boys meaning warrior.'
    ,'Tupoc is an alternative for Tupack, meaning warrior.'
    ,'Ueman is an Aztec name meaning venerable time.'
    ,'Xihuilt means a comet.'
    ,'Xipil is a short Aztec name meaning the Noble One, of Fire    Boy.'
    ,'It means the jeweled prince and is a beautiful Aztec name.'
    ,'This is another powerful name for boys, meaning the gentleman of the fire.'
    ,'Xolotl means precious twin and can be used to name if you have twins.'
    ,'Yaotl is an extremely powerful Aztec name. It means combatant, Soldier, Warrior, Defender,  Fighter, or Rival.'
    ,'It means rival and can also be spelled as Yaotel.'
    ,'Yolyamanitzin has one of the most wonderful meanings, “He who is considerate and just”.'
    ,'Zipactonal is an Aztec name meaning the harmonic light.'
  ];
  var  loadingenes=['Acalan es un nombre azteca para niños derivado de un bote de remos pequeño, estrecho y largo'
    , 'Acatl es un nombre azteca inspirado en la naturaleza. Significa caña gigante.'
    , 'Ahuatzi es otro nombre azteca para niños que está inspirado en la naturaleza. Significa roble pequeño.'
    , 'Chicahua es un nombre azteca que significa fuerte.'
    , 'Chimalli es un nombre azteca para niños que significa escudo. Simboliza la seguridad .'
    , 'Citlalee es un nombre azteca que significa estrella. Es un símbolo de luz .'
    , 'Cuallee es un nombre azteca, que se traduce en bueno. También se puede escribir con una variación de Cuallea.'
    , 'nombre azteca largo derivado de la naturaleza, que significa lagarto. Se puede usar una ortografía alternativa, Cuetzpallea.'
    , 'Eztli es un nombre azteca que se puede usar tanto para niños como para niñas. Tiene el significado de "Sangre".'
    , 'Guatemoc es un nombre azteca con el significado, el águila que cae o el águila que desciende en náhuatl. Puede usarse de diferentes formas con los mismos significados, como Cuathemoc, Cuauhtemotzin o Guatimozin. '
    , '"Huitzilin es otro nombre azteca inspirado en la naturaleza, que significa colibrí".'
    , 'Ilhicamina es un poderoso nombre azteca para un niño. Significa "el que dispara flechas al cielo"'
    , 'Itzcali es un nombre azteca popular que significa la casa de la belleza.'
    ,'Este es un nombre raro que se traduce como "serpiente de obsidiana". Itzcóatl era el nombre del gobernante azteca de Tenochtitlan, la capital del Imperio azteca.'
    , 'Matlalihuitl significa pluma azul verdosa y es un hermoso nombre azteca para un niño. Está inspirado en las aves y las plumas de la cultura azteca, que se consideraba muy importante ”.'
    , 'Mictlantecuhtli era el nombre del señor azteca de Mictlan y puede ser un gran nombre para un niño.'
    , 'Moctezuma se inspira en el arquero Lord en un estado de ira. Fue el último gobernante de los aztecas y, por lo tanto, es un nombre poderoso para un niño'
    , 'Náhuatl es un nombre que proviene de la Diosa del agua y los ríos. Es un nombre azteca unisex y se puede usar para ambos sexos'
    , 'Netzahualcoyotl es un nombre azteca largo inspirado en la naturaleza. Significa el coyote hambriento.'
    , 'Ohtli es otro poderoso nombre azteca. Significa una persona que es un campeón, que es un significado maravilloso para el nombre de tu pequeño'
    , 'Patlee es un nombre azteca que significa medicina. Simboliza curandero y curación y también se puede escribir como Patlea'
    ,'Tlanextic es un nombre azteca positivo que significa la luz del amanecer".'
    , 'Tlanextli es una alternativa de Tlanextic que significa resplandor o esplendor.'
    , 'Tlilpotonqui es un nombre azteca poco común, que se traduce como emplumado en negro.'
    , 'Tochtlee es otro nombre azteca inspirado en la naturaleza y significa conejo'
    , 'Toltecatl significa artista o persona creativa y puede ser un nombre maravilloso para bebés que muestran creatividad'
    , 'Tonatiuh significa Sol. Es un nombre azteca que simboliza la positividad '
    , 'Tonauac tiene un significado maravilloso, el que posee la luz'
    , 'Este es otro nombre azteca poderoso para niños que significa guerrero'
    , 'Tupoc es una alternativa para Tupack, que significa guerrero'
    , 'Ueman es un nombre azteca que significa tiempo venerable'
    , 'Xihuilt significa cometa'
    , 'Xipil es un nombre azteca corto que significa el Noble, de Fire Boy.'
    ,'Significa el príncipe enjoyado y es un hermoso nombre azteca'
    , 'Este es otro nombre poderoso para los niños, es decir, el caballero del fuego'
    , 'Xolotl significa gemelo precioso y se puede usar para nombrar si tienes gemelos'
    , 'Yaotl es un nombre azteca extremadamente poderoso. Significa combatiente, soldado, guerrero, defensor, luchador o rival.'
    ,'Significa rival y también se puede escribir como Yaotel'
    , 'Yolyamanitzin tiene uno de los significados más maravillosos, "El que es considerado y justo".'
    , 'Zipactonal es un nombre azteca que significa la luz armónica'
  ];
  var  loadingmuj= ['Ahuic'
    ,'Amoxtli'
    ,'Anacaona'
    ,'Apozanolotl'
    ,'Atlacoya'
    ,'Atlatonin'
    ,'Atzi'
    ,'Chalchihuitlcue'
    ,'Chantico'
    ,'Chicomecoatl'
    ,'Chimalma'
    ,'Chipahua'
    ,'Cihuaton'
    ,'Citlalic'
    ,'Coyolxauhqui'
    ,'Cozamalotl'
    ,'Cuicatl'
    ,'Eztli'
    ,'Huixtocihuatl'
    ,'Itzpapalotl'
    ,'Macuilxóchitl'
    ,'Metztli'
    ,'Nahuatl'
    ,'Necahual'
    ,'Nochtli'
    ,'Ohtli'
    ,'Quetzalli'
    ,'Tayanna'
    ,'Teicuih'
    ,'Teiuc'
    ,'Tlachinolli'
    ,'Tonalnan'
    ,'Tonantzin'
    ,'Tozi'
    ,'Xochiquetzal'
    ,'Xoco'
    ,'Xocoyotl'
    ,'Yaotl'
    ,'Yaretzi'
    ,'Zyanya'
  ];
  var  loadingenmuj=[
      'Ahuic is one of the popular names and was the name of the Aztec goddess of the running water in rivers, streams, and waves.'
      ,'This is a beautiful Aztec name which means “book”'
      ,'Anacaona is a great name for a girl and has a beautiful meaning of the golden flower. It can also be shortened to Ana.'
      ,'This is another name derived from deities. Apozanolotl was the name of the Aztec goddess of purity and thus became a great name for your little girl.'
      ,'Atlacoya was the name of the Aztec goddess of drought. It is a unique name inspired by the goddess of Aztec.'
      ,'Atlatonin was the name of the Aztec mother-goddess and shows a powerful image of a woman, making it a deep and meaningful name.'
      ,'Atzi is a short and cute Aztec name that is inspired by one of the greatest marvels of the universe, Rain.'
      ,'Chalchihuitlcue is a long Aztec name that has a beautiful meaning, “She with the robe made of green jewels”.'
      ,'Chantico is an Aztec which means “She who dwells in the house”.'
      ,'An Aztec name which symbolizes the seven snakes.'
      ,'Chimalma is an Aztec name with the meaning of shield-bearer. This name will symbolize safety for your girl.'
      ,'means clean. It is an Aztec name and means cleanliness and purity.'
      ,'Cihuaton comes from the Aztec language and translated to little woman, making it an appropriate name for your little daughter.'
      ,'Citlalic translated to the rising star and is an Aztec name for girls. It brings a positive meaning to your child’s life.'
      ,'Coyolxauhqui is an Aztec name which means golden bells. It is a long and can be used with a nickname, Coyo.'
      ,'Cozamalotl is another Aztec name inspired by the universal elements, Rainbow. It symbolizes a colorful and happy life.'
      ,'Aztec name which means song. It’s a beautiful name and can be a good option for parents who are inclined towards music.'
      ,'It is an Aztec name meaning “Blood”. This is one of those Aztec names which can be used for both baby girls and boys.'
      ,'Huixtocihuatl is an Aztec name which is a wonderful name for a girl. This name has come from the Aztec goddess of fertility.'
      ,'Itzpapalotl is an Aztec name derived from nature. Its English translation is “Obsidian butterfly”. The obsidian butterfly is a folkloric reference to bats.'
      ,'Macuilxóchitl is another Aztec name for girls that have been inspired by nature and it translated to “five flowers”.'
      ,'Metztli an Aztec name for girls named from another Aztec Goddess, the goddess of night.'
      ,'In Aztec culture, a lot of significance is given to deities. Nahuatl is another such name that has come from the Goddess of water and rivers which is an ancient name.'
      ,'Necahual is a powerful Aztec name for your daughter. It means survivor.'
      ,'This is another Aztec name with inspiration taken from nature. Nochtli translates to “prickly pear fruit”'
      ,'Ohtli is another powerful Aztec name. It means a person who is a champion, which is a wonderful meaning for the name of your little one. Ohtli is also referred to as the son of Neil.'
      ,'Quetzalli is an Aztec name for girls which means a large beautiful feather. It is inspired by the Aztec culture where birds and feathers are considered a prominent part of society.'
      ,'Tayanna is a beautiful and popular Aztec name. It has a wonderful meaning, “a gift from God”. It is a great name for a baby, as babies are a gift to the whole family.'
      ,'An old Aztec tradition is to name girls based on their birth order. Teicuih means younger sister and can be a good name for your younger daughters.'
      ,'Teiuc is another Aztec name based on the tradition of naming baby girls based on their birth order. This means second-born and can be used for your younger and second-born daughters'
      ,'Tlachinolli is an Aztec name derived from a powerful universal element, Fire.'
      ,'Tonantzin means mother earth and was the name of the Aztec mother Goddess.'
      ,'Tozi is an Aztec name which has been derived from the Aztec goddess of healing and sweet water.'
      ,'Xochiquetzal is a beautiful Aztec name for little girls inspired by nature. It means the most beautiful flower.'
      ,'Xoco is an Aztec name based on the tradition of naming girls on their birth order. It means the youngest sister.'
      ,'Xocoyotl is an alternative name for Xoco and means the youngest child. It can be shortened to Xoco or can have a nickname, Xoco.'
      ,'Yaotl is an extremely powerful Aztec name. It means combatant, Soldier, Warrior, Defender,  Fighter, or Rival. It is one of the Aztec names which can be used for both boys and girls.'
      ,'Yaretzi is an Aztec name with one of the most beautiful meanings. It translates into, “you will always be loved” and is a wonderful choice if you’re looking for a meaningful name.'
      ,'Zyanya is an Aztec name for girls starting with “z”. It means “Forever and always”.'
    ];

    const { route } = this.props;
    const { genero } = route.params;
    const image = "https://i.imgur.com/jl8MY8H.jpg";

if(genero == "hombre"){
  if(strings.a1 == "espa;ol"){
    return (
<ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
     <View style={{flex:1}}>
              <ScrollView>
              { loadingenes.map(function(item, i){
                   return(
                      <ScrollView key={i}>
                     <View  style={styles.card}>
                      <Text style={styles.TextStyle}>{loading[i]}</Text>

                       <Text style={styles.TextStyle2} >{ item }</Text>
                       </View>
                     </ScrollView>
                   )
                 })
               }
               </ScrollView>

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
  else{
    return (
<ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
     <View style={{flex:1}}>
              <ScrollView>
              { loadingen.map(function(item, i){
                   return(
                      <ScrollView key={i}>
                     <View  style={styles.card}>
                      <Text style={styles.TextStyle}>{loadingmuj[i]}</Text>

                       <Text style={styles.TextStyle2} >{ item }</Text>
                       </View>
                     </ScrollView>
                   )
                 })
               }
               </ScrollView>

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
}
else{
  if(strings.a1 == "espa;ol"){
    return (
<ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
     <View style={{flex:1}}>
              <ScrollView>
              { loadingenmujes.map(function(item, i){
                   return(
                      <ScrollView key={i}>
                     <View  style={styles.card}>
                      <Text style={styles.TextStyle}>{loadingmuj[i]}</Text>

                       <Text style={styles.TextStyle2} >{ item }</Text>
                       </View>
                     </ScrollView>
                   )
                 })
               }
               </ScrollView>

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
  else{
    return (
<ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
     <View style={{flex:1}}>
              <ScrollView>
              { loadingenmuj.map(function(item, i){
                   return(
                      <ScrollView key={i}>
                     <View  style={styles.card}>
                      <Text style={styles.TextStyle}>{loadingmuj[i]}</Text>

                       <Text style={styles.TextStyle2} >{ item }</Text>
                       </View>
                     </ScrollView>
                   )
                 })
               }
               </ScrollView>

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
}




  }
}

const styles = StyleSheet.create ({

 card:{
   backgroundColor:"#90BEAB",
   marginBottom:12,
   marginHorizontal:26,
   // width:340,

   borderRadius:6,
   justifyContent:"center",
   shadowColor: '#000',
   shadowOffset: { width: 1, height: 2 },
   shadowOpacity: 0.8,
   shadowRadius: 2,
   elevation: 2,
 },
 MainContainer: {
    flex: 1,
    margin: 10

  },
  TextStyle2:{
    fontSize : 14,
     textAlign: 'center',
     fontFamily: 'Iowan Old Style',

  },

  TextStyle:{
    fontSize : 25,
     textAlign: 'center',
     fontFamily: 'Iowan Old Style',

  },
  backgroundImage: {
    paddingTop: 20,
    flex: 1,
    resizeMode: 'cover',
  },
})
