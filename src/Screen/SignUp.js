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

function SignUp({navigation}) {
  const [mail, setmail] = useState('');
  const [password, setpassword] = useState('');
  const [fullName, setfullName] = useState('');
  const [comfirmPassword, setcomfirmPassword] = useState('');
  return (
    <ImageBackground
      source={Images.backgroundLogin}
      style={[{flex: 1}, ApplicationStyles.view]}>
      <Block flex={1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="black"
            style={{marginTop: '20%'}}
          />
        </TouchableOpacity>
      </Block>
      <Block flex={5}>
        <Text style={[globalStyles.sizeLogin, ApplicationStyles.textBold]}>
          Create Account
        </Text>
        <Block
          flex={false}
          style={{marginTop: '20%', paddingHorizontal: 5, borderBottomWidth: 1}}
          row>
          <Block middle>
            <Ionicons
              name="ios-person-outline"
              size={30}
              color="black"
              style={{marginTop: 20}}
            />
          </Block>
          <Block flex={9}>
            <Text style={[ApplicationStyles.textBold]}>Full Name</Text>
            <TextInput
              style={globalStyles.textInput}
              value={fullName}
              onChangeText={setfullName}
            />
          </Block>
        </Block>
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
            <Text style={[ApplicationStyles.textBold]}>Comfirm Password</Text>
            <TextInput
              style={globalStyles.textInput}
              secureTextEntry={true}
              value={comfirmPassword}
              onChangeText={setcomfirmPassword}
            />
          </Block>
        </Block>
        <Block flex={false} style={{alignItems: 'flex-end'}}>
          <TouchableOpacity style={globalStyles.buttonLogin}>
            <Block flex={false} row middle center>
              <Text style={[globalStyles.sizeText, ApplicationStyles.textBold]}>
                Sign up
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
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(Screens.LOGIN)}>
            <Text
              style={[ApplicationStyles.textNomal, globalStyles.textSignUp]}>
              Sign in
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </ImageBackground>
  );
}

export default SignUp;
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
