import React from 'react';
import { homeObjTwo  } from '../HomePage/Data';
import { InfoSection , Cards } from '../../components';

function EnglishTo() {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <Cards />
      

    </>
  );
}

export default EnglishTo;