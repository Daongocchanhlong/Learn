import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Block} from '../Components';
import Images from '../Theme/Images';
import ApplicationStyles from '../Theme/ApplicationStyles';
import {Screens} from '../Utils/Screens';

const {width, height} = Dimensions.get('screen');
const foods = [
  {
    image: Images.lavarHulk,
    name: 'Lavar Hulk',
    atk: 9,
    def: 9,
    hp: 90,
    speech: 4,
    rate: 4,
    regen: 5,
    price: '8.30',
    saleBy: 'Lavar',
  },
  {
    image: Images.minionCaptan,
    name: 'Captain Minion',
    atk: 9,
    def: 9,
    hp: 100,
    speech: 4,
    rate: 5,
    regen: 5,
    price: '8.30',
    saleBy: 'Lavar',
  },
  {
    image: Images.minionDracula,
    name: 'Dracula Minion',
    atk: 9,
    def: 9,
    hp: 100,
    speech: 4,
    rate: 5,
    regen: 5,
    price: '8.30',
    saleBy: 'Lavar',
  },
  {
    image: Images.golem,
    name: 'Iron Golem',
    atk: 9,
    def: 9,
    hp: 100,
    speech: 4,
    rate: 5,
    regen: 5,
    price: '8.30',
    saleBy: 'Clash of clan',
  },
  {
    image: Images.lavarHulk,
    name: 'Lavar Hulk',
    atk: 9,
    def: 9,
    hp: 90,
    speech: 4,
    rate: 4,
    regen: 5,
    price: '8.30',
    saleBy: 'Lavar',
  },
  {
    image: Images.minionCaptan,
    name: 'Captain Minion',
    atk: 9,
    def: 9,
    hp: 100,
    speech: 4,
    rate: 5,
    regen: 5,
    price: '8.30',
    saleBy: 'Lavar',
  },
  {
    image: Images.minionDracula,
    name: 'Dracula Minion',
    atk: 9,
    def: 9,
    hp: 100,
    speech: 4,
    rate: 5,
    regen: 5,
    price: '8.30',
    saleBy: 'Lavar',
  },
  {
    image: Images.golem,
    name: 'Iron Golem',
    atk: 9,
    def: 9,
    hp: 100,
    speech: 4,
    rate: 5,
    regen: 5,
    price: '8.30',
    saleBy: 'Clash of clan',
  },
];

const STEP1 = 1;
const STEP2 = 2;
const STEP3 = 3;

const Step1 = ({data, setSelectedProgressBarIndex}) => {
  return (
    <>
      <Block flex={false} center middle>
        <Text style={[{fontSize: 30}, ApplicationStyles.textBold]}>
          Your Cart
        </Text>
      </Block>
      <Block flex={false} style={{height: height * 0.6, marginBottom: 20}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => <CartCard item={item} />}
        />
      </Block>
      <Block
        flex={false}
        row
        style={{paddingHorizontal: 20, justifyContent: 'space-between'}}>
        <Text style={[{fontSize: 20}, ApplicationStyles.textBold]}>Total</Text>
        <Text style={[{fontSize: 20}, ApplicationStyles.textBold]}>$300</Text>
      </Block>
      <Block flex={false}>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            setSelectedProgressBarIndex(STEP2);
          }}>
          <Block flex={false} center middle row>
            <Text
              style={[
                {fontSize: 20, marginRight: 10},
                ApplicationStyles.textBold,
              ]}>
              Check out
            </Text>
            <AntDesign name="arrowright" color="black" size={20} />
          </Block>
        </TouchableOpacity>
      </Block>
    </>
  );
};

const CartCard = ({item}) => {
  return (
    <View style={style.cartCard}>
      <Image source={item.image} style={{height: 80, width: 80}} />
      <View
        style={{
          height: 100,
          marginLeft: 10,
          paddingVertical: 10,
          flex: 1,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>
          {item.name}
        </Text>
        <Text style={{fontSize: 13, color: 'black', color: 'black'}}>
          {item.saleBy}
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 10,
          }}>
          ${item.price}
        </Text>
      </View>
      <View style={{marginRight: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: 'black'}}>
            x
          </Text>
          1
        </Text>
      </View>
    </View>
  );
};

const Step2 = ({setSelectedProgressBarIndex}) => {
  return (
    <>
      <Block flex={false} center middle>
        <Text style={[{fontSize: 30}, ApplicationStyles.textBold]}>
          Your Information
        </Text>
      </Block>
      <Block flex={false} style={{paddingHorizontal: 10, marginTop: 20}}>
        <Block flex={false} row>
          <Text
            style={[
              {fontSize: 15, marginRight: 10, width: '30%'},
              ApplicationStyles.textBold,
            ]}>
            Name
          </Text>
          <Text
            style={[{fontSize: 15, width: '70%'}, ApplicationStyles.textBold]}>
            Ariz
          </Text>
        </Block>
        <Block flex={false} row>
          <Text
            style={[
              {fontSize: 15, marginRight: 10, width: '30%'},
              ApplicationStyles.textBold,
            ]}>
            Phone
          </Text>
          <Text
            style={[{fontSize: 15, width: '70%'}, ApplicationStyles.textBold]}>
            077385212
          </Text>
        </Block>
        <Block flex={false} row>
          <Text
            style={[
              {fontSize: 15, marginRight: 10, width: '30%'},
              ApplicationStyles.textBold,
            ]}>
            Address
          </Text>
          <Text
            style={[{fontSize: 15, width: '70%'}, ApplicationStyles.textBold]}>
            123 Animation Street, Ohio city , America
          </Text>
        </Block>
      </Block>
      
    </>
  );
};

const Cart = ({navigation}) => {
  const [selectedProgressBarIndex, setSelectedProgressBarIndex] =
    useState(STEP1);
  const ProgressBar = () => {
    return (
      <Block flex={false} row center>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setSelectedProgressBarIndex(STEP1)}>
          <Block
            flex={false}
            style={[
              style.circle,
              {
                backgroundColor:
                  selectedProgressBarIndex >= STEP1 ? 'pink' : 'white',
              },
            ]}
          />
        </TouchableOpacity>
        <Block
          flex={false}
          style={[
            style.line,
            {
              backgroundColor:
                selectedProgressBarIndex >= STEP2 ? 'pink' : 'white',
            },
          ]}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setSelectedProgressBarIndex(STEP2)}>
          <Block
            flex={false}
            style={[
              style.circle,
              {
                backgroundColor:
                  selectedProgressBarIndex >= STEP2 ? 'pink' : 'white',
              },
            ]}
          />
        </TouchableOpacity>
        <Block
          flex={false}
          style={[
            style.line,
            {
              backgroundColor:
                selectedProgressBarIndex >= STEP3 ? 'pink' : 'white',
            },
          ]}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setSelectedProgressBarIndex(STEP3)}>
          <Block
            flex={false}
            style={[
              style.circle,
              {
                backgroundColor:
                  selectedProgressBarIndex >= STEP3 ? 'pink' : 'white',
              },
            ]}
          />
        </TouchableOpacity>
      </Block>
    );
  };
  return (
    <ImageBackground
      source={Images.backgroundLogin}
      style={{flex: 1, paddingTop: 40}}>
      <Block flex={false} center middle>
        <ProgressBar />
      </Block>
      {selectedProgressBarIndex == STEP1 ? (
        <Step1
          data={foods}
          setSelectedProgressBarIndex={setSelectedProgressBarIndex}
        />
      ) : (
        <Step2 setSelectedProgressBarIndex={setSelectedProgressBarIndex} />
      )}
    </ImageBackground>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: '#fedac5',
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  line: {
    width: 30,
    height: 4,
  },
  button: {
    backgroundColor: 'pink',
    marginTop: 30,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 5,
  },
});

export default Cart;
