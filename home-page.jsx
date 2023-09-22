import React, { useState } from 'react';
import Game from './game';
import CountDown from './counter';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const HomePage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const insideItem = clicked ? (
    <React.Fragment>
      <CountDown />
      <Game />
    </React.Fragment>
  ) : (
    <Pressable onPress={handleClick}>
      <View
        type="button"
        value="Play"
        id="play-button"
        style={styles.playButton}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Start Game</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Match Colors</Text>
      {insideItem}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  heading: {
    fontSize: 25,
  },
  playButton: {
    height: 50,
    width: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
});

export default HomePage;
