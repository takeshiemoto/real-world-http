import type { NextPage } from "next";
import { useEffect } from "react";
import { CookieManager } from "../utils/CookieManager";

const Sub1: NextPage = () => {
  useEffect(() => {
    CookieManager.readCookie();
  }, []);

  return <h2>Sub1</h2>;
};

export default Sub1;
