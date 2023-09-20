import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const CountDown = () => {
  const vals = ['Ready', 'Set', 'Go', ''];
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === 2 && started === false) {
        setCount(0);
        setStarted(true);
        return;
      }
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count, started]);

  return (
    <View className="counter">
      <Text>{started ? `Time: ${count}` : vals[count]}</Text>
    </View>
  );
};

export default CountDown;
