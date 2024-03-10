import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, ImageBackground,StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground imageStyle={{
        resizeMode: "cover",
        alignSelf: "flex-end",
        top: undefined
      }} source={require('./assets/head.jpg')} style={styles.image}>
      </ImageBackground>
      <Text style={styles.name}>Hannah Vooght</Text>
      <Text style={styles.name2}> (She/Her)  1st degree connection1st</Text>
      <Text>Helping CTOs, Software Engineering Managers, and Talent Partners find skilled Software Developers for their teams | Software Development | .Net | C# | Python | PHP | JavaScript</Text>
      <Text style={styles.name3}>Worthing, England, United Kingdom  <Text style={styles.contact}>Contact info</Text></Text>
      <Button
        onPress={onPressLearnMore}
        title="Message"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const onPressLearnMore = () => {
  Alert.alert('hannah@stratospherec.com');
}

const image = {uri: 'head.jpg'};

const styles = StyleSheet.create({

  contact: {
    color: '#0a66c2'
  },
  name3: {
    color: 'grey',
    fontSize: 14
  },
  name2: {
    color: 'grey',
  },
  name: {
    fontSize: 30,
    fontWeight: 200
  },
  image: {
      height: 100,
      padding: 20,
      paddingVertical: 40,
      overflow: 'hidden',
  },
  
  container: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 15
  },


});
