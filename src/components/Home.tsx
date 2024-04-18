import React from 'react';
import './Home.css';

import { Sidebar } from './Sidebar';

import { getUserDetails } from '../UserDetails';
import { useQuery } from 'react-query';
import Centent from './Centent';

function Home() {

  const { data: userDetails} = useQuery(
    ['userDetails'],
    () => getUserDetails(),
    
  );
  return (
    <div className="Home">
      <Sidebar/>
    
        <div className='body__contents'>
        <Centent/>
        </div>
      
      <div className='footer'></div>
    </div>
   
  );
}

export default Home;
