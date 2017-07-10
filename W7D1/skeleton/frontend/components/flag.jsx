import React from 'react';
const flagList = {
    'CNY': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png',
    'GBP': 'http://www.crwflags.com/fotw/images/g/gb.gif',
    'JPY': 'https://www.mapsofworld.com/images/world-countries-flags/japan-flag.gif',
    'CAD': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png',
    'EUR': 'https://www.looksharpstore.co.nz/media/catalog/product/e/u/euro-flag_gif.jpg',
    'USD': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png'
  };

export const Flag = ({name}) => {
  return (
    <div>
      <img className="flag" src={flagList[name]}></img>
    </div>
  );
};
