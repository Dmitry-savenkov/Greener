// Lib
import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-react-native';
import LottieView from 'lottie-react-native';

const LottieAnimation = ({ width, height, lottieJSON, autoPlay, loop }) => {
  const animationRef = useRef<Lottie>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <LottieView
      ref={animationRef}
      style={{ width, height }}
      source={lottieJSON}
      autoPlay={autoPlay}
      loop={loop}
    />
  );
};

export default LottieAnimation;
