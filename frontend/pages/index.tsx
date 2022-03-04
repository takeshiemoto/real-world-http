import type { NextPage } from 'next';
import { CookieManager } from '../utils/CookieManager';

const Home: NextPage = () => {
  const handleSet3rdPartyCookieClick = () => {
    CookieManager.set3erPartyCookie();
  };

  const handleSet1rdPartyCookieClick = () => {
    CookieManager.set1erPartyCookie();
  };

  return (
    <div>
      <h2>Index Page</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', gap: 20 }}>
          <button onClick={handleSet1rdPartyCookieClick}>1st</button>
          <button onClick={handleSet3rdPartyCookieClick}>3rd</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
