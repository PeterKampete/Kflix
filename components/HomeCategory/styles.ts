import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/Sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: DEVICE_WIDTH * 0.3,
    height: DEVICE_HEIGHT * 0.22,
    resizeMode: 'cover',
    borderRadius: 5,
    margin: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 14
  },
});

export default styles;
