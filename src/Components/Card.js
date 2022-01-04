import React, {useEffect, useState} from 'react';
import {Animated, Dimensions, Image, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const MARGIN = 16;
export const CARD_HEIGHT = CARD_WIDTH * ratio + MARGIN * 2;

function Card({index, y, item}) {
  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - 64 - CARD_HEIGHT;
  const isAppearing = height - 64;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: 'clamp',
    }),
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });
  return (
    <Animated.View
      style={[styles.card, {opacity, transform: [{translateY}, {scale}]}]}
      key={index}>
      <Image source={item} style={styles.card} />
    </Animated.View>
  );
}
export default Card;
const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: MARGIN,
    alignSelf: 'center',
  },
});
