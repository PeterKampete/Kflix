import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/Sizes';

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
  container: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.3,
    borderWidth: 1,
    backgroundColor: 'red',
  },
});

export default styles;
