import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

function Block({flex, children, style, center, middle, row, column}) {
  const blockStyles = [
    styles.block,
    flex && {flex},
    flex === false && {flex: 0}, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    style, // rewrite predefined styles
  ];
  return <View style={blockStyles}>{children}</View>;
}
export default Block;
const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
});
