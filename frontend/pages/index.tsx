import type { NextPage } from "next";
import { CookieManager } from "../utils/CookieManager";
import { useState } from "react";

const Home: NextPage = () => {
  const [message, setMessage] = useState<string>();

  const handleSetCookieClick = () => {
    CookieManager.setCookie();
  };

  const handleExternalRequestClick = async () => {
    const res = await fetch("http://localhost:8082");
    if (res.ok) {
      const message = await res.text();
      setMessage(message);
    }
  };

  return (
    <div>
      <h2>Index Page</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", gap: 20 }}>
          <button onClick={handleSetCookieClick}>SetCookie</button>
          <button onClick={handleExternalRequestClick}>External Request</button>
        </div>
        {message && (
          <div style={{ padding: 10, border: "1px solid #333" }}>{message}</div>
        )}
      </div>
    </div>
  );
};

export default Home;
