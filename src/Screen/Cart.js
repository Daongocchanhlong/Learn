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
import Icon from 'react-native-vector-icons/MaterialIcons';
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

const Cart = ({navigation}) => {
  const [selectedProgressBarIndex, setSelectedProgressBarIndex] = useState(0);
  const ProgressBar = () => {
    return (
      <Block flex={false} row center>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setSelectedProgressBarIndex(1)}>
          <Block
            flex={false}
            style={[
              style.circle,
              {
                backgroundColor:
                  selectedProgressBarIndex >= 1 ? 'pink' : 'white',
              },
            ]}
          />
        </TouchableOpacity>
        <Block
          flex={false}
          style={[
            style.line,
            {
              backgroundColor: selectedProgressBarIndex >= 2 ? 'pink' : 'white',
            },
          ]}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setSelectedProgressBarIndex(2)}>
          <Block
            flex={false}
            style={[
              style.circle,
              {
                backgroundColor:
                  selectedProgressBarIndex >= 2 ? 'pink' : 'white',
              },
            ]}
          />
        </TouchableOpacity>
        <Block
          flex={false}
          style={[
            style.line,
            {
              backgroundColor: selectedProgressBarIndex >= 3 ? 'pink' : 'white',
            },
          ]}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setSelectedProgressBarIndex(3)}>
          <Block
            flex={false}
            style={[
              style.circle,
              {
                backgroundColor:
                  selectedProgressBarIndex >= 3 ? 'pink' : 'white',
              },
            ]}
          />
        </TouchableOpacity>
      </Block>
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
  return (
    <ImageBackground
      source={Images.backgroundLogin}
      style={{flex: 1, paddingTop: 40}}>
      <Block flex={false} center middle>
        <ProgressBar />
      </Block>
      <Block flex={false} center middle>
        <Text style={[{fontSize: 30}, ApplicationStyles.textBold]}>
          Your Cart
        </Text>
      </Block>
      <Block flex={false} style={{height: height * 0.5, marginBottom: 20}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={foods}
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
      <View style={{width, height: 120}} />
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
});

export default Cart;
