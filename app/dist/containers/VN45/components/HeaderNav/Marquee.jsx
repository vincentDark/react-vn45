import React from 'react';
import { withStyle, withStore } from '~/core/container';

const Marquee = ({ storeData = {} }) => {
  return (
    <marquee styleName="marquee-text" id="marquee">
      {Object.keys(storeData).map((key, i) => (
        <span key={`marquee${i}`}>{storeData[key].MESSAGE}</span>
      ))}
    </marquee>
  );
};

export default withStore('member.data.marquee')(withStyle()(Marquee));
