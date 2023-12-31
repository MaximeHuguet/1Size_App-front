import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

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

const url = process.env.EXPO_PUBLIC_IP

export default function MarqueScreen({ navigation, route }) {
  const categorie = route.params.categorie

  const [marquesDispo, setMarquesDispo] = useState([]); // récupéré au moment du fetch
  const sexe = useSelector((state)=>state.user.value.genre)
  const sexeLC = sexe && sexe.toLowerCase()
  

  //const [search, setSearch] = useState('');

  const images = marquesDispo.map((data, i) => {
    return (
      <TouchableOpacity key={i} style={styles.photoContainer} onPress={()=>{navigation.navigate('MarqueTypeScreen', {name:data.name, categorie:categorie})}}>
        <Image source={ {uri:data.url} } style={styles.photo} resizeMode='contain'/>
      </TouchableOpacity>
    );
  });

// Fetch qui récupère toutes les marques de la catégorie (nom et image)

  useEffect(()=>{
    fetch(`${url}/marques/logos?sexe=${sexeLC}&categorie=${categorie}`)
    .then((response)=> response.json())
    .then((marques) => setMarquesDispo(marques))
    console.log("dans le useeffect")
  }, [categorie])
  
console.log("en dehors du useeffect")
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>  
          <Text style={styles.retour}>Retour</Text> 
        </TouchableOpacity> 
      </View>
      <View style={styles.titleContainer}>

        <Text style={styles.H1}>Choisis la marque de {categorie === "chaussures" ? "tes" : "ton"} {categorie}</Text>
        
        <View style={styles.border}></View>
      {/* <View style={styles.inputContainer}>
        <TextInput
          placeholder="Barre de recherche"
          onChangeText={(value) => setSearch(value)}
          value={search}
          style={styles.input}
        />
      </View> */}
      </View>
      <ScrollView contentContainerStyle={styles.imageContainer} showsVerticalScrollIndicator={true}>
        {images}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  border: {
    width: '25%',
    paddingHorizontal: 35, 
    borderBottomWidth:3,
    borderBottomColor: '#d95b33', 
    borderRadius: 50,
  },
  photo: {
    margin: 10,
    marginBottom: 20,
    width: 110,
    height: 110
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: "#fcfaf1",
    marginTop: 30,
  },
  border: {
    paddingHorizontal: 35, 
    borderBottomWidth:3,
    borderBottomColor: '#d95b33', 
    borderRadius: 50,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fcfaf1'
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    padding: 20,
    marginTop: 40
  },
  retour: {
    fontWeight: 'bold', 
    color: '#D95B33',
    fontSize: 20,
    paddingTop: 15
  },
  H1: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
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