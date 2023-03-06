import { StyleSheet, Text, View } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import { useState } from "react";
import { Colors, Spacing } from "../styles";

const CustomSlider = () => {
  const [volume, setVolume] = useState(0);

  return (
    <View style={styles.container}>
      <Slider
        value={volume}
        // TODO: Revisit Slider Value Implementation ( Number | Array<Number>)
        // @ts-ignore
        onSlidingComplete={(value: number) => {
          console.log(value);
          setVolume(value);
        }}
        animateTransitions={true}
        trackStyle={styles.trackStyle}
        minimumTrackTintColor={Colors.PRIMARY}
        maximumTrackTintColor={"#242424"}
        thumbStyle={styles.thumbStyle}
        minimumValue={0}
        maximumValue={10}
      />
      <Text>Value: {volume}</Text>
    </View>
  );
};

export default CustomSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: Spacing.SCALE_8,
    alignItems: "stretch",
    justifyContent: "center",
  },
  trackStyle: {
    height: 47,
    borderRadius: 12,
  },
  thumbStyle: {
    backgroundColor: "transparent",
  },
});
