import React from 'react';
import { AppRegistry, StyleSheet,Button, View, Text, TextInput, Image, Picker, CheckBox } from 'react-native';
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8B3B96'}} >
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
    this.state = { PickerSelection: "default value",
                  typeofdoctor: "default value",
                  gender: "default value",
                  language: "default value",
                  distance: "default value",
                  usstate: "default value"
   };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor:'#003046',}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8B3B96', }} >
        
        <Text>Recommend a Doctor</Text>



        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginVertical:200 }}>
        
        
        
        <Text style={{marginBottom:390, marginLeft: 20, marginRight:20 }}> Network: </Text> 

        <Picker
       
          color='white'
          selectedValue={this.state.PickerSelection}
          onValueChange={(itemValue, ItemIndex) => this.setState({ PickerSelection: itemValue })}
          style={{ marginBottom:590, width: 160, marginTop: 200}}
          mode="dropdown">
          <Picker.Item label="Choice" value="Choice" />
          <Picker.Item label="Signature" value="Signature" />
          <Picker.Item label="Advantage" value="Advantage" />
          <Picker.Item label="Medicaid" value="Medicaid" />

        </Picker>

      </View>

      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',}}>
        <Text style={{marginBottom:700, marginLeft: 20, marginRight:20 }}> Type of Doctor: </Text> 
        <Picker
          color='white'
          selectedValue={this.state.typeofdoctor}
          onValueChange={(itemValue, ItemIndex) => this.setState({ typeofdoctor: itemValue })}
          style={{ marginBottom:800, width: 160, marginTop: 100}}
          mode="dropdown">
          <Picker.Item label= "Optometrists" value="Optometrists" />
          <Picker.Item label="ophthalmologist" value="ophthalmologist" />
        </Picker>
      </View>


      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',}}>
        <Text style={{marginBottom:600, marginLeft: 20, marginRight:20 }}> Gender </Text> 
        <Picker
          color='white'
          selectedValue={this.state.gender}
          onValueChange={(itemValue, ItemIndex) => this.setState({ gender: itemValue })}
          style={{ marginBottom:700, width: 160, marginTop: 100}}
          mode="dropdown">
          <Picker.Item label= "male" value="male" />
          <Picker.Item label="female" value="female" />
        </Picker>
      </View>


      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',}}>
        <Text style={{marginBottom:800, marginLeft: 20, marginRight:20 }}> Preferred Language</Text> 
        <Picker
          color='white'
          selectedValue={this.state.language}
          onValueChange={(itemValue, ItemIndex) => this.setState({ language: itemValue })}
          style={{ marginBottom:900, width: 160, marginTop: 100}}
          mode="dropdown">
          <Picker.Item label= "English" value="English" />
          <Picker.Item label="Spanish" value="Spanish" />
        </Picker>
      </View>



      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',}}>
        <Text style={{marginBottom:700, marginLeft: 20, marginRight:20 }}> Show results within</Text> 
        <Picker
          color='white'
          selectedValue={this.state.distance}
          onValueChange={(itemValue, ItemIndex) => this.setState({ distance: itemValue })}
          style={{ marginBottom:800, width: 160, marginTop: 100}}
          mode="dropdown">
          <Picker.Item label= "5 miles" value="5" />
          <Picker.Item label="25 miles" value="25" />
          <Picker.Item label= "50 miles" value="50" />
          <Picker.Item label="100 miles" value="100" />
        </Picker>
      </View>

      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',}}>
        <Text style={{marginBottom:600, marginLeft: 20, marginRight:20 }}> State</Text> 
        <Picker
          color='white'
          selectedValue={this.state.usstate}
          onValueChange={(itemValue, ItemIndex) => this.setState({ usstate: itemValue })}
          style={{ marginBottom:700, width: 160, marginTop: 100}}
          mode="dropdown">
          <Picker.Item label= "CA" value="CA" />
          <Picker.Item label="AZ" value="AZ" />
          <Picker.Item label= "NY" value="NY" />
          <Picker.Item label="FL" value="FL" />
        </Picker>
      </View>


      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',}}>
        <Text style={{marginBottom:550, marginLeft: 20, marginRight:20 }}> Zipcode </Text> 
      <TextInput
        style={{marginBottom:550, height: 20, width:100, alignItems: 'center', backgroundColor: 'white', borderColor: 'gray', borderWidth: 1}}
        underlineColorAndroid = "transparent"
        placeholder = " "
      />
         </View>



         <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',}}>
        <Text style={{marginBottom:350, marginLeft: 20, marginRight:20 }}> Eye Exam </Text> 
      <CheckBox
        style={{marginBottom:350,  alignItems: 'center', backgroundColor: 'white', borderColor: 'gray', borderWidth: 1}}
        underlineColorAndroid = "transparent"
        placeholder = " "
      />
         </View>

         <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',}}>
        <Text style={{marginBottom:250, marginLeft: 20, marginRight:20 }}> Extended Hours </Text> 
      <CheckBox
        style={{marginBottom:250,  alignItems: 'center', backgroundColor: 'white', borderColor: 'gray', borderWidth: 1}}
        underlineColorAndroid = "transparent"
        placeholder = " "
      />
         </View>


        </View>








      <Button color= '#003046'
          title="Recommend Me"
          onPress={() => this.props.navigation.navigate('RecommendDoctor')}
        />

    </View>
    );
  }
}






// <View style =  {{flexDirection: 'row'}}>
// <Button color= '#003046'
//   title="Recommend Me"
//   onPress={() => this.props.navigation.navigate('Details')}
// />
// <Button color= '#003046'
//   title="Search Doctor"
//   onPress={() => this.props.navigation.navigate('Details')}
// />
// </View>



//Recommended Doctor
class RecommendedDoctorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { PickerSelection: "default value",
                   typeofdoctor: "default value",
                   gender: "default value",
                   Language: "default value" };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor:'#003046'}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8B3B96' }} >
        
        <Text>Recommended Doctor</Text>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',}}>
       <Image style={{width: 100, height: 100, marginRight: 5}}  source={require('./no-photo-graphic.png')} />
        
        </View>
        </View>
        <View style={{ flex: 2,  backgroundColor: 'white' }} >
        <View style={{ flex: 2,  flexDirection: 'row',}}>
        <Text style={{ marginRight: 10,}} >Service&Products
       
       </Text  >
       <Text  style={{ marginRight: 10,}}>Map
       
       </Text>
       <Text style={{ marginRight: 10,}} >Location 
       
       </Text>
      
       <Text style={{ marginRight: 20,}} >Special/Bonus Offers
       
       </Text>
       </View>
       <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',}}>

<Text style={{marginBottom:350}} >Loading...
</Text>
</View> 
        </View>

        

      </View>
    );
  }

}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    RecommendDoctor: RecommendedDoctorScreen 
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }

  
}
