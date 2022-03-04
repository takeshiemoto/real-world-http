import type { NextPage } from 'next';
import { useEffect } from 'react';
import { CookieManager } from '../utils/CookieManager';

const Sub2: NextPage = () => {
  useEffect(() => {
    CookieManager.read1stPartyCookies();
  }, []);

  return <h2>Sub2</h2>;
};

export default Sub2;
