
import React from 'react';
import { AppRegistry, StyleSheet,Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json



class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  
}