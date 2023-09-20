import React, { useState } from 'react';
import Game from './game';
import CountDown from './counter';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Pressable,
} from 'react-native';

const HomePage = () => {
  const [clicked, setClicked] = useState(false);
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

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
          <Text>Play</Text>
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
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  heading: {
    fontSize: 25,
  },
  playButton: {
    height: 50,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
});

export default HomePage;
