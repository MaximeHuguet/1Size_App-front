import * as React from 'react';
import { useState } from 'react';

//font
import { useFonts } from 'expo-font';

import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const FirstRoute = () => (
  <View style={styles.firstRoute}>
    <View>
      <Text style={styles.h3} >Choisis ton vêtement</Text>
    </View>
    <View></View>
    <View>
      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.8}
        //AJOUTER LA FONCTIONNALITE POUR PASSER A L'ETAPE SUIVANTE
        // onPress={()=> }
        >
          <Text style={styles.textButton}>Continuer</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#FCFAF1' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function HomeScreen({navigation}) {

  const initialLayout = { width: Dimensions.get('window').width };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Pour moi' },
    { key: 'second', title: 'Pour un ami' },
  ]);

  return (
    <View style={styles.background}>
        <View style={styles.container}>
          <SafeAreaView style={styles.header}>
              <TouchableOpacity                     
              onPress={() => navigation.openDrawer()}>
                  <FontAwesome 
                  name={'bars'} 
                  size={40} 
                  color={'#25958A'}
                  />
              </TouchableOpacity>
              <Text>HomeScreen</Text>
          </SafeAreaView>
          <View style={styles.titleBox}>
            <Text style={styles.H1}>Recherche ton vêtement</Text>
          </View>
        </View>
        <TabView
      navigationState={{ index, routes }}
      renderTabBar={props => (
        <TabBar
          {...props}
          renderLabel={({ route, color }) => (
            <Text style={{ color: '#FFFF', margin: 8 }}>
              {route.title}
            </Text>
          )}
          style={{backgroundColor: '#d95b33', fontFamily:'Outfit'}}
        />
      )}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FCFAF1',
  },
  container: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  titleBox: {

  },
  H1: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    fontFamily: 'Outfit'

  },
  tabView: {
    marginTop: 10,
    
  },
  firstRoute: { 
    flex: 1, 
    backgroundColor: '#FCFAF1',
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  button: {
    width: 150,
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 8,
    backgroundColor: '#D6D1BD',
    borderRadius: 30,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  h3: {
    color: '#707B81',
    fontSize: 20,
    fontFamily: 'Outfit'

  },
  textButton: {
    color: '#707B81',
    height: 30,
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Outfit'
  },
});