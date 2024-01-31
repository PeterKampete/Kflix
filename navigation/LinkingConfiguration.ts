import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        path: 'root',
        screens: {
          TabOne: {
            path: 'one',
            screens: {
              TabOneScreen: 'screen-one',
            },
          },
          TabTwo: {
            path: 'two',
            screens: {
              TabTwoScreen: 'screen-two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
