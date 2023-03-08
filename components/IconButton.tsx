import { Pressable, StyleProp, ViewStyle } from "react-native";
import * as Haptics from "expo-haptics";
import { Image, ImageContentFit, ImageSource, ImageStyle } from "expo-image";

export type Props = {
  iconPath: ImageSource;
  iconStyle?: ImageStyle | Array<ImageStyle>;
  containerStyle?: ViewStyle | Array<ViewStyle>;
  contentFit: ImageContentFit;
};

const IconButton: React.FC<Props> = ({
  iconPath,
  iconStyle,
  containerStyle,
}) => {
  return (
    <Pressable
      style={containerStyle}
      onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
    >
      <Image style={iconStyle} source={iconPath} contentFit="contain"></Image>
    </Pressable>
  );
};

export default IconButton;
