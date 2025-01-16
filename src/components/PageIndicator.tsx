import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

type Props = {
    count:number;
    currentIndex:number;
    dotSize?:number;
    spacing?:number;
    activeColor?:string;
    inactiveColor?:string;
}

const PageIndicator = ({ count, currentIndex, dotSize = 6, spacing = 8, activeColor = '#1a73e8', inactiveColor = '#e0e0e0' }:Props) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              width: index === currentIndex ? (dotSize*3) : dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
              marginHorizontal: spacing / 2,
              backgroundColor: index === currentIndex ? activeColor : inactiveColor,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: '#e0e0e0',
  },
});

export default PageIndicator;