import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';


const OpenWebsiteButton = () => {
  const handlePress = async () => {
    const url = 'https://vegarobotics.com.br/';
    const supported = await Linking.canOpenURL(url);
  
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`A operação não é suportada no dispositivo`);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Image source={require('./assets/VEGA_2.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 5,
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});


export default OpenWebsiteButton;
