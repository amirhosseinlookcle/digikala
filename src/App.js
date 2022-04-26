import React from 'react';
import Header from './common/Header/Header';
import Body from './containers/mainBody/1.Body';
// import { getDirection } from './lang/direction';

import { injectIntl } from 'react-intl';
import { useSelector } from 'react-redux';



const App = ({intl}) => {
 
  if(intl.locale === 'en-US'){
    document.body.dir = "ltr"
  }else{
    document.body.dir = "rtl"
  }
  
 
  return (

    <div>
      
      <Header />
      <Body />
    </div>


  );
}

export default injectIntl(App);
