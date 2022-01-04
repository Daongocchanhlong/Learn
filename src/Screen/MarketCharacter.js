import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Touchable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Block} from '../Components';
import Images from '../Theme/Images';
import {Screens} from '../Utils/Screens';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
const categories = [
  {id: '1', name: 'All'},
  {id: '2', name: 'Hit Point'},
  {id: '3', name: 'Attack'},
  {id: '4', name: 'Defend'},
  {id: '5', name: 'Speech'},
  {id: '6', name: 'Regen'},
];
const items = [
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

function MarketCharacter({navigation}) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const ListCategories = () => {
    return (
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={style.categoriesListContainer}
        scrollEnabled
        initialScrollIndex={
          selectedCategoryIndex - 1 > 0 ? selectedCategoryIndex - 1 : 0
        }
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index ? '#F9813A' : '#fedac5',
                ...style.categoryBtn,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: selectedCategoryIndex == index ? 'white' : '#F9813A',
                }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };

  const Card = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate(Screens.DETAIL, item)}>
        <View style={style.card}>
          <View style={{alignItems: 'center', marginBottom: 10}}>
            <Image source={item.image} style={{height: 150, width: 150}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{fontSize: 14, color: 'black', marginTop: 2}}>
              {item.saleBy}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${item.price}
            </Text>
            <View style={style.addToCartBtn}>
              <Icon
                name="add"
                size={20}
                color="white"
                onPress={() => {
                  console.log(1);
                }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground source={Images.backgroundLogin} style={{flex: 1}}>
        <View style={style.header}>
          <Block flex={false}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 28}}>Hello,</Text>
              <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
                Ariz
              </Text>
            </View>
            <Text style={{marginTop: 5, fontSize: 22, color: 'black'}}>
              What do you want today
            </Text>
          </Block>
          <Image
            source={Images.lavarHulk}
            style={{height: 50, width: 50, borderRadius: 25}}
          />
        </View>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <View style={style.inputContainer}>
            <Icon name="search" size={28} />
            <TextInput
              style={{flex: 1, fontSize: 18}}
              placeholder="Search for item"
            />
          </View>
          <View style={style.sortBtn}>
            <Icon name="tune" size={28} color="white" />
          </View>
        </View>
        <View>
          <ListCategories />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={items}
          renderItem={({item}) => <Card item={item} />}
        />
        <View style={{width, height: 120}} />
      </ImageBackground>
    </SafeAreaView>
  );
}

export default MarketCharacter;
const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: '#F9813A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: 'white',
    paddingVertical: 30,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: '#F9813A',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
