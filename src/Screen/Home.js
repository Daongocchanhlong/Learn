import React, {useEffect, useState} from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  View,
  Animated,
} from 'react-native';
import {Block, Rating} from '../Components';
import ApplicationStyles from '../Theme/ApplicationStyles';
import Images from '../Theme/Images';
import {Screens} from '../Utils/Screens';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;

const temps = [
  {
    image: Images.lavarHulk,
    name: 'Lavar Hulk',
    atk: 9,
    def: 9,
    hp: 90,
    speech: 4,
    rate: 4,
    regen: 5,
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
  },
];

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
          width: (value / maxvalue) * 100,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'pink',
          marginTop: 7,
        }}
      />
    </Block>
  );
};

const Backdrop = ({data, scrollX}) => {
  return (
    <>
      <View style={{height: BACKDROP_HEIGHT, width, position: 'absolute'}}>
        <FlatList
          data={data.reverse()}
          keyExtractor={(item, index) => `${index}`}
          removeClippedSubviews={false}
          contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
          renderItem={({item, index}) => {
            if (item.key) {
              return null;
            }
            const translateX = scrollX.interpolate({
              inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
              outputRange: [0, width],
              // extrapolate:'clamp'
            });
            return (
              <Animated.View
                removeClippedSubviews={false}
                style={{
                  position: 'absolute',
                  width: translateX,
                  height,
                  overflow: 'hidden',
                }}>
                <Image
                  source={item.image}
                  style={{
                    width,
                    height: BACKDROP_HEIGHT,
                    position: 'absolute',
                  }}
                />
              </Animated.View>
            );
          }}
        />
        <LinearGradient
          colors={['transparent', '#add8e6']}
          style={{
            height: BACKDROP_HEIGHT,
            width,
            position: 'absolute',
          }}
        />
      </View>
    </>
  );
};

function Home({navigation}) {
  const [character, setcharacter] = useState([]);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setcharacter([{key: 'empty-left'}, ...temps, {key: 'empty-right'}]);
  }, []);
  return (
    <ImageBackground source={Images.backgroundLogin} style={{flex: 1}}>
      <Block flex={1}>
        <Backdrop data={character} scrollX={scrollX} />
        <Animated.FlatList
          data={character}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `${index}`}
          horizontal
          bounces={false}
          decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
          renderToHardwareTextureAndroid
          contentContainerStyle={{
            alignItems: 'center',
          }}
          snapToInterval={ITEM_SIZE}
          snapToAlignment="start"
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}
          renderItem={({item, index}) => {
            if (item.key) {
              return <View style={{width: EMPTY_ITEM_SIZE}} />;
            }
            const inputRange = [
              (index - 2) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
            ];

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [100, 50, 100],
              extrapolate: 'clamp',
            });
            return (
              <Block flex={false} style={{width: ITEM_SIZE}}>
                <Animated.View
                  style={{
                    marginHorizontal: SPACING * 1.2,
                    paddingHorizontal: SPACING * 1.5,
                    paddingVertical: SPACING * 2,
                    // alignItems: 'center',
                    transform: [{translateY}],
                    borderRadius: 20,
                    backgroundColor: 'white',
                    elevation: 5,
                  }}>
                  <Text
                    style={[
                      globalStyles.textsize20,
                      ApplicationStyles.textBold,
                    ]}>
                    {item.name}
                  </Text>
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
                </Animated.View>
              </Block>
            );
          }}
        />
      </Block>
    </ImageBackground>
  );
}

export default Home;
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
  sloganContain: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
    position: 'absolute',
    bottom: '10%',
  },
});
