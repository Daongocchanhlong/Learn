import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Block, Rating} from '../Components';
import ApplicationStyles from '../Theme/ApplicationStyles';
import Images from '../Theme/Images';
// import {SecondaryButton} from '../components/Button';

const ImforBlock = ({value, text, maxvalue}) => {
  return (
    <Block flex={false} row center>
      <Text
        style={[
          globalStyles.textsize15,
          ApplicationStyles.textBold,
          {width: 80},
        ]}>
        {text}:
      </Text>
      <Block
        flex={false}
        style={{
          width: (value / maxvalue) * 300,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'pink',
          marginTop: 7,
        }}
      />
    </Block>
  );
};

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;
  return (
    <Block style={{backgroundColor: 'white'}}>
      <ImageBackground source={item.image} style={{flex: 2, paddingTop: 40}}>
        <Block flex={false} row style={{marginHorizontal: 10}}>
          <Icon
            name="arrow-back"
            size={28}
            onPress={navigation.goBack}
            color="black"
          />
        </Block>
      </ImageBackground>
      <Block
        flex={3}
        style={{backgroundColor: 'white', borderRadius: 30, top: -30}}>
        <Block
          flex={false}
          style={{
            backgroundColor: '#add8e6',
            width: 250,
            alignSelf: 'center',
            height: 50,
            borderRadius: 20,
            elevation: 5,
            top: -20,
          }}
          center
          middle>
          <Text style={[globalStyles.textsize20, ApplicationStyles.textBold]}>
            {item.name}
          </Text>
        </Block>
        <Block
          flex={false}
          style={{
            paddingHorizontal: 10,
          }}>
          <ImforBlock value={item.hp} maxvalue={100} text="Hit point" />
          <ImforBlock value={item.atk} maxvalue={10} text="Attack" />
          <ImforBlock value={item.def} maxvalue={10} text="Defend" />
          <ImforBlock value={item.speech} maxvalue={10} text="Speech" />
          <ImforBlock value={item.regen} maxvalue={10} text="Regen" />
          <Block flex={false} row center>
            <Text
              style={[
                globalStyles.textsize15,
                ApplicationStyles.textBold,
                {width: 80},
              ]}>
              Rate:
            </Text>
            <Rating rating={item.rate} />
          </Block>
        </Block>
        <Block
          flex={false}
          style={{
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          <Text style={[globalStyles.textsize20, ApplicationStyles.textBold]}>
            Description:
          </Text>
          <ScrollView style={{height: 150}}>
            <Text style={[globalStyles.textsize15, ApplicationStyles.textBold]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              textLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy textLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text
            </Text>
          </ScrollView>
        </Block>
        <Block flex={false} center>
          <TouchableOpacity style={globalStyles.buttonLogin}>
            <Block flex={false} row middle center>
              <Text
                style={[globalStyles.textsize20, ApplicationStyles.textBold]}>
                Add To Cart
              </Text>
            </Block>
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
};

const globalStyles = StyleSheet.create({
  posterImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  textsize15: {
    fontSize: 15,
    marginTop: 10,
  },
  textsize20: {
    fontSize: 20,
  },
  textsize30: {
    fontSize: 30,
  },
  buttonLogin: {
    backgroundColor: '#add8e6',
    height: 50,
    borderRadius: 25,
    marginTop: 20,
    width: '50%',
    elevation: 5,
    justifyContent: 'center',
  },
});

export default DetailsScreen;
