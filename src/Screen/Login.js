import React, {useEffect, useState} from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Block} from '../Components';
import ApplicationStyles from '../Theme/ApplicationStyles';
import Images from '../Theme/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Screens} from '../Utils/Screens';

function Login({navigation}) {
  const [mail, setmail] = useState('');
  const [password, setpassword] = useState('');
  const onpressLogin = () => {
    navigation.navigate(Screens.BOTTOMTAB);
  };
  return (
    <ImageBackground source={Images.backgroundLogin} style={{flex: 1}}>
      <Block flex={1}></Block>
      <Block flex={2} style={ApplicationStyles.view}>
        <Text style={[globalStyles.sizeLogin, ApplicationStyles.textBold]}>
          Login
        </Text>
        <Text
          style={[
            globalStyles.sizeText,
            ApplicationStyles.textNomal,
            ApplicationStyles.opacity,
          ]}>
          Please sign in to continue
        </Text>
        <Block
          flex={false}
          style={{marginTop: 15, paddingHorizontal: 5, borderBottomWidth: 1}}
          row>
          <Block middle>
            <Ionicons
              name="mail-outline"
              size={30}
              color="black"
              style={{marginTop: 20}}
            />
          </Block>
          <Block flex={9}>
            <Text style={[ApplicationStyles.textBold]}>Mail</Text>
            <TextInput
              style={globalStyles.textInput}
              value={mail}
              onChangeText={setmail}
            />
          </Block>
        </Block>
        <Block
          flex={false}
          style={{marginTop: 15, paddingHorizontal: 5, borderBottomWidth: 1}}
          row>
          <Block middle>
            <Ionicons
              name="lock-closed-outline"
              size={30}
              color="black"
              style={{marginTop: 10}}
            />
          </Block>
          <Block flex={9}>
            <Text style={[ApplicationStyles.textBold]}>Password</Text>
            <TextInput
              style={globalStyles.textInput}
              secureTextEntry={true}
              value={password}
              onChangeText={setpassword}
            />
          </Block>
        </Block>
        <Block flex={false}>
          <TouchableOpacity>
            <Text style={globalStyles.textForgot}>Forgot password</Text>
          </TouchableOpacity>
        </Block>
        <Block flex={false} style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={globalStyles.buttonLogin}
            onPress={onpressLogin}>
            <Block flex={false} row middle center>
              <Text style={[globalStyles.sizeText, ApplicationStyles.textBold]}>
                Login
              </Text>
              <Ionicons
                name="arrow-forward"
                size={20}
                color="black"
                style={{marginLeft: 10}}
              />
            </Block>
          </TouchableOpacity>
        </Block>
        <Block flex={false} middle center style={{marginTop: '35%'}} row>
          <Text style={[globalStyles.textsize15, ApplicationStyles.textNomal]}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(Screens.SIGNUP)}>
            <Text
              style={[ApplicationStyles.textNomal, globalStyles.textSignUp]}>
              Sign up
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </ImageBackground>
  );
}

export default Login;
const globalStyles = StyleSheet.create({
  sizeLogin: {
    fontSize: 40,
  },
  sizeText: {
    fontSize: 20,
  },
  textInput: {
    height: 40,
    fontSize: 20,
    padding: 0,
  },
  textForgot: {
    textAlign: 'right',
    ...ApplicationStyles.textBold,
    marginTop: 10,
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  buttonLogin: {
    backgroundColor: '#add8e6',
    height: 50,
    borderRadius: 25,
    marginTop: 50,
    width: '50%',
    elevation: 5,
    justifyContent: 'center',
  },
  textsize15: {
    fontSize: 15,
  },
  textSignUp: {
    textDecorationLine: 'underline',
    color: 'yellow',
    fontSize: 18,
    marginLeft: 10,
  },
});
