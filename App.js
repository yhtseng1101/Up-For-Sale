import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddItem from './components/AddItemComponent';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
            <View style={styles.buttonOne}>
                <Button 
                    title='New Items'
                    onPress={() => navigation.navigate('AddItem')}
                    color="#f194ff"
                />
            </View>
            <View style={styles.buttonTwo}>
                <Button 
                    title='Catalog'
                    onPress={() => navigation.navigate('Catalog')}
                />
            </View>
        </View>
  );
}

function AddItemScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AddItem />
    </View>
  );
}

function CatalogScreen(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Catalog</Text>
    </View>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
        <Stack.Screen name="Catalog" component={CatalogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      marginTop: '40%',
      
  },
  buttonOne: {
      backgroundColor: 'blue',
      marginRight: 40,
      marginLeft: 40,
      height: 40,
      borderRadius: 10
  },
  buttonTwo: {
      backgroundColor: 'blue',
      marginTop: 15,
      marginRight: 40,
      marginLeft: 40,
      height: 40,
      borderRadius: 10
  }
})

export default App;
