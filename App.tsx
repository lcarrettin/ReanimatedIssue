/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState}  from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  FadeInUp,
  FadeOutUp,
  Layout,
} from 'react-native-reanimated';

function Item(props: any) {
  return (
    <Animated.View style={[styles.item, props.style]}
                   layout={Layout.duration(100)}
                   >
      <Text style={styles.itemText}>Text</Text>
      {props.extraText &&
        <Animated.View style={styles.extra}
                       entering={FadeInUp.duration(100)}
                       exiting={FadeOutUp.duration(100)}>
          <Text style={styles.extraText}>Sub text</Text>
        </Animated.View>
      }
    </Animated.View>
  );
}

function App(): JSX.Element {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);

  const slide:any = toggle2 ? {left: '100%'} : {left: 0};

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title='Toggle expand'
                onPress={() => setToggle1(!toggle1)}/>
        <Button title='Toggle slide'
                onPress={() => setToggle2(!toggle2)}/> 
      </View>
      <Animated.View style={styles.halfContainer}
                     layout={Layout}>
        <Animated.View style={[styles.topContent, slide]}
                       layout={Layout}>
          <Animated.View style={styles.itemsContainer}
                         layout={Layout.duration(100)}>
            <Item style={{backgroundColor: 'yellow'}}
                  extraText={toggle1}/>
            <Item style={{backgroundColor: 'steelblue'}}/>

            <Item style={{backgroundColor: 'red'}}/>
          </Animated.View>
        </Animated.View>
      </Animated.View>
      <Animated.View style={styles.halfContainer}
                     layout={Layout}>
        <Animated.View style={[styles.bottomContent, slide]}
                       layout={Layout}>
          {toggle1 &&
            <Animated.View style={styles.square}
                           entering={FadeIn.duration(100)}
                           exiting={FadeOut.duration(100)} />
          }    
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    flex: 1,
  },
  buttonsContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 6,
    justifyContent: 'space-evenly'
  },
  halfContainer: {
    flex: 1,
  },
  row: {
    height: 100,
  },
  topContent: {
    backgroundColor: 'green',
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 16
  },
  itemsContainer: {
    backgroundColor: 'lightgrey',
    width: '100%',
    padding: 8
  },
  item: {
    width: '100%',
  },
  itemText: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  extra: {
    width: '100%',
    paddingLeft: 30
  },
  extraText: {
    fontSize: 46,
    fontWeight: 'bold',
  },
  bottomContent: {
    backgroundColor: 'gold',
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  square: {
    backgroundColor: 'red',
    flex: 1,
    alignSelf: 'stretch'
  }
});

export default App;
