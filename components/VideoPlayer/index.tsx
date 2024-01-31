import React, { useRef, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import { Episode } from '../../types';
import styles from './styles';
import { Playback } from 'expo-av/build/AV';

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;

  const [status, setStatus] = useState({});
  const video = useRef<Playback | any>(null);

  useEffect(() => {
    if (!video) {
      return;
    }
    (async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: episode.video }, {}, false);
    })();
  }, [episode]);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        posterSource={{
          uri: episode.poster,
        }}
        posterStyle={{
          resizeMode: 'cover',
        }}
        usePoster={true}
        useNativeControls
        resizeMode={ResizeMode.COVER} // Set resizeMode to cover the entire container
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;
