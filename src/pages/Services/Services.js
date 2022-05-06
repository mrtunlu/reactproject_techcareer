import React from 'react';
import { InfoSection, Pricing ,Cards} from '../../components';
import { homeObjTwo } from './Data';

function Services() {
  return (
    <>
<Pricing />
<InfoSection {...homeObjTwo} />
<Cards/>
    </>
  );
}

export default Services;

