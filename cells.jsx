import { Pressable, StyleSheet, View } from 'react-native';

const colors = {
  done: 'gray',
  closed: 'oldlace',
};

const findBGColor = (color, status) =>
  status === 'clicked' ? color : colors[status];

const Cell = ({ cellDetail: { color, status }, handleClick, index }) => {
  const backgroundColor = findBGColor(color, status);
  return (
    <Pressable
      key={index}
      onPress={status === 'done' ? () => {} : () => handleClick(index, color)}
    >
      <View style={[styles.cell, { backgroundColor }]} key={index}></View>
    </Pressable>
  );
};

const Cells = ({ cellDetails, handleClick }) => {
  const cells = cellDetails.map((cellDetail, index) => {
    return (
      <Cell
        style={styles.cells}
        key={index}
        cellDetail={cellDetail}
        index={index}
        handleClick={handleClick}
      />
    );
  });

  return <View style={styles.cells}>{cells}</View>;
};

const styles = StyleSheet.create({
  cells: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },
  cell: {
    width: 90,
    aspectRatio: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 50,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    textAlign: 'center',
  },
});

export default Cells;
