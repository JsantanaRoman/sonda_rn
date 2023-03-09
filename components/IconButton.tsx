import { Pressable, StyleProp, ViewStyle } from "react-native";
import * as Haptics from "expo-haptics";
import { Image, ImageContentFit, ImageSource, ImageStyle } from "expo-image";

export type Props = {
  iconPath: ImageSource;
  iconStyle?: ImageStyle | Array<ImageStyle>;
  containerStyle?: ViewStyle | Array<ViewStyle>;
  contentFit: ImageContentFit;
  onPress?: any;
};

const IconButton: React.FC<Props> = ({
  iconPath,
  iconStyle,
  containerStyle,
  onPress,
}) => {
  return (
    <Pressable style={containerStyle} onPress={onPress}>
      <Image style={iconStyle} source={iconPath} contentFit="contain"></Image>
    </Pressable>
  );
};

export default IconButton;
