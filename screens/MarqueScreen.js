import * as React from "react";
import { useState } from "react";

//font
import { useFonts } from "expo-font";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";


export default function MarqueScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const imagesData = [
    {id: '1', image: require("../assets/marques/adidas.png"), name: 'adidas'},
    {id: '2', image: require("../assets/marques/nike.png"), name: 'nike'},
    {id: '3', image: require("../assets/marques/lacoste.png"), name: 'lacoste'},
    {id: '4', image: require("../assets/marques/stjames.png"), name: 'stjames'},
    {id: '5', image: require("../assets/marques/hm.png"), name: 'hm'},
  ];

  const images = imagesData.map((data, i) => {
    return (
      <View key={i} style={styles.photoContainer}>
        {/* <TouchableOpacity onPress={() => dispatch(removePhoto(data))}>
          <FontAwesome name='times' size={20} color='#000000' style={styles.deleteIcon} />
        </TouchableOpacity> */}
        <Image source={ data.image } style={styles.photo} />
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome name={"bars"} size={40} color={"#25958A"} />
        </TouchableOpacity>
        <Text style={styles.retour}>Retour</Text> 
      </View>
      <Text style={styles.H1}>Haut</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Barre de recherche"
          onChangeText={(value) => setSearch(value)}
          value={search}
          style={styles.input}
        />
      </View>
      <ScrollView contentContainerStyle={styles.imageContainer}>
        {images}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  photo: {
    margin: 10,
    marginBottom: 20,
    width: 110,
    height: 110
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fcfaf1'
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
    marginTop: 40
  },
  retour: {
    fontWeight: 'bold', 
    color: '#D95B33',
    fontSize: 20
  },
  H1: {
    textAlign: 'center',
    fontFamily: 'Outfit',
    fontSize: '50',
  },
  inputContainer: {
    width: '80%',
    backgroundColor: '#fcfaf1',
    borderRadius: 10,
    marginTop: 30,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#D6D1BD",
    padding: 5,
    marginTop: 20,
    marginLeft: 40,
    width: "100%",
    fontFamily: 'Outfit',
    borderRadius: 5,
    backgroundColor: '#ffffff'
  },
  imageContainer: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});