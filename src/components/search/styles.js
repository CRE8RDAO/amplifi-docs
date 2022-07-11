import * as React from 'react';
import { Algolia } from '@styled-icons/fa-brands/Algolia';

export const PoweredBy = () => (
  <span className="poweredBy">
    Powered by{` `}
    <a href="https://cre8r.vip">
      <Algolia size="1em" /> CRE8R CMS
    </a>
  </span>
);
