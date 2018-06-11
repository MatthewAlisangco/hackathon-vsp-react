import React from 'react';
import { AppRegistry, StyleSheet,Button, View, Text, TextInput, Image, Picker } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
// import { DetailsScreen } from './views/DetailsScreen';
// import {HomeScreen } from './views/HomeScreen';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Username' };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#8B3B96'}} >
        <Image style={{width: 300, height: 165}}  source={require('./vsp-logo.png')} />
        <Text></Text>
          </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
        style={{height: 50, width:300, alignItems: 'center', backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,margin: 15}}
        underlineColorAndroid = "transparent"
        placeholder = "Email"
      />

        <TextInput
        style={{height: 50, width:300, alignItems: 'center', backgroundColor: 'white', borderColor: 'gray', borderWidth: 1}}
        underlineColorAndroid = "transparent"
        placeholder = "Password"
      />
        </View>
        </View>
        
        <Button color= '#003046'
          title="Login"
          onPress={() => this.props.navigation.navigate('Details')}
        />

        </View>
    );
  }








}

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { PickerSelection: "default value" };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor:'#003046'}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8B3B96' }} >
        
        <Text>Recommend a Doctor</Text>
        </View>




      <View style={{ flex: 2, alignItems: 'center', }}>
        <Text>Details Screen</Text>

        <Picker
          color='white'
          selectedValue={this.state.PickerSelection}
          onValueChange={(itemValue, ItemIndex) => this.setState({ PickerSelection: itemValue })}
          style={{ width: 160 }}
          mode="dropdown">
          <Picker.Item label="News" value="News" />
          <Picker.Item label="Design" value="Design" />
        </Picker>

        <View style =  {{flexDirection: 'row'}}>
        <Button color= '#003046'
          title="Recommend Me"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button color= '#003046'
          title="Search Doctor"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        </View>
    
 
      </View>

      
      </View>
    );
  }
}




//Recommended Doctor
class RecommendedDoctorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { PickerSelection: "default value" };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor:'#003046'}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8B3B96' , marginBottom: 200}} >
        
        <Text>Recommend a Doctor</Text>
        </View>


      </View>
    );
  }


}
























const options = [
  {
    label: 'News'
  },
  {
    label: 'Design'
  },
  {
    label: 'Sales'
  },
  {
    label: 'Marketing'
  },
  {
    label: 'Customer Success'
  }
];


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


const styles = StyleSheet.create({
  PinContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  PinHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
    padding: 8
  },
  UtilityNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  PinButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'space-between',
    width: 60
  },
  PinButtonText: {
    color: 'white'
  },
  PinButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  PinContent: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    
  },
  ImagePlaceholder: {
    backgroundColor: '#1e1e1e',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 6,
  },
  PinMeta: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 16,
    paddingLeft: 8
  },
  PinMetaTextContainer: {

  },
  UtilityButton: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    justifyContent: 'center'
  },
  UtilityButtonText: {
    color: 'black',
    fontWeight: 'bold'
  },
  PinUser: {
    flex: 5,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8
  },
  PinUserAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    marginRight: 8
  },
  TextBold: {
    fontWeight: 'bold'
  }
});







export default class App extends React.Component {
  render() {
    return <RootStack />;
  }

  
}
