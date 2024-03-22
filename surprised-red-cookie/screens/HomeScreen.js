import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  Linking,
  TextInput,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

  function HomeScreen({navigation}) {
  const imageUri1 = require('../assets/img/image1.png');
  const imageUri2 = require('../assets/img/image2.png');
  const imageUri3 = require('../assets/img/image3.png');
  const onPress = () => {
    Linking.openURL('https://www.mozilla.org/'); // Ensures valid URL
  };
  const onPress2 = () => {
    Linking.openURL('https://www.mozilla.org/'); // Ensures valid URL
  };
  const onPress3 = () => {
    Linking.openURL('https://www.mozilla.org/'); // Ensures valid URL
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome
        <View style={styles.box}>
          <Text style={styles.subt}>Chose your</Text>
          <Text style={styles.subt}>favorite recipe</Text>

          <View>
            <ImageBackground source={imageUri1} style={styles.image}>
              <Text
                style={[
                  styles.subt2,
                  { marginRight: 22, textDecorationLine: 'underline' },
                ]}
                onPress={onPress}>
                La Villita Cheese and Broccoli Soup
              </Text>
            </ImageBackground>
          </View>

          <View>
            <ImageBackground source={imageUri2} style={styles.image}>
              <Text
                style={[
                  styles.subt2,
                  { marginLeft: 70, textDecorationLine: 'underline' },
                ]}
                onPress={onPress2}>
                Lemon Pie
              </Text>
            </ImageBackground>
          </View>

          <View>
            <ImageBackground source={imageUri3} style={styles.image}>
              <Text style={[styles.subt2, { marginLeft: 60 }]}>
                Coming Soon
              </Text>
            </ImageBackground>
          </View>

          <View>
            <Text
              style={[
                styles.text,
                {
                  marginLeft: 110,
                  marginTop: 50,
                  textDecorationLine: 'underline',
                },
              ]}
              onPress={onPress3}>
              Opinions
            </Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A5B6E2',
    padding: 8,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  box: {
    marginTop: 30,
    width: 280,
    height: 500,
    borderRadius: 10,
    backgroundColor: '#ffff',
  },
  subt: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
  image: {
    marginTop: 50, // Add spacing between text and image
    width: '90%', // Adjust image width as desired
    height: 60, // Adjust image height as desired
    resizeMode: 'contain',
    marginLeft: 30,
  },
  subt2: {
    color: 'blue',
    fontFamily: 'cursive',
    fontSize: 18,
    position: 'absolute', // Necessary for proper alignment within ImageBackground
    top: 20,
  },
  text: {
    fontSize: 10,
    position: 'absolute', // Necessary for proper alignment within ImageBackground
    top: 20,
  },
});

function OpinionsScreen() {
  return (
    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center',marginBottom:10 }}>
      <Text>We want to know yout opinions</Text>
      <View>
      <TextInput placeholder= 'Escriba aqui...' style={{
          marginTop:15,
          marginBottom: 15, 
          fontSize: 16,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          height: 40,
          width: 200,}}/>
      <Button title="SEND" onPress={() => {}}></Button>
      </View>
      
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App2() {
  return (

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Opinions" component={OpinionsScreen} />
      </Tab.Navigator>
    
  );
}
