import React from 'react';
import {SpringView, View} from '../../components';
import {useSpring} from '../../hooks';

export const CubePage = () => {
  const [styles1] = useSpring({
    from: {rotate: 0},
    to: {rotate: 360},
    config: {duration: 1000},
    loop: true,
  });

  const [styles2] = useSpring({
    from: {width: 120, height: 120},
    to: {width: 300, height: 300},
    config: {duration: 1000},
    loop: {reverse: true},
  });

  return (
    <View width="100%" height="100%" alignItems="center" justifyContent="center">
      <SpringView
        style={{...styles1, ...styles2}}
        width={400}
        height={400}
        backgroundColor="purple"
      />
    </View>
  );
};
