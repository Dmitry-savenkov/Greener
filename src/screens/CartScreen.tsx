// Lib
import React, { useState, useRef, useCallback, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useSelector } from 'react-redux';

// Components
import BackIcon from '../components/icons/BackIcon';
import CartItem from '../components/CartItem';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';
import { PanGestureHandler } from 'react-native-gesture-handler';
const TITLES = [
  'Record the dismissible tutorial 🎥',
  'Leave 👍🏼 to the video',
  'Check YouTube comments',
  'Subscribe to the channel 🚀',
  'Leave a ⭐️ on the GitHub Repo',
];

const TASKS = TITLES.map((title, index) => ({ title, index }));

const CartScreen = ({ navigation }) => {
  const { items } = useSelector((state: any) => ({
    items: state?.Cart?.items,
  }));
  const [tasks, setTasks] = useState(TASKS);

  const onDismiss = useCallback((task) => {}, []);

  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const scrollRef = useRef(null);

  return (
    <ScrollView style={[styles.container]} ref={scrollRef}>
      {items.map((task) => (
        <CartItem simultaneousHandlers={scrollRef} key={task.index} task={task} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: height * 0.07,
  },
});

export default CartScreen;
