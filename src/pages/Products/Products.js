import React from 'react';
import { InfoSection, Pricing ,Cards} from '../../components';
import { homeObjTwo } from './Data';


function Products() {
  return (
    <>
        <Pricing />
        <InfoSection {...homeObjTwo} />
        <Cards/>
    </>
  );
}

export default Products;
