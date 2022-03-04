import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link href={"/sub1"}>Sub 1</Link>
      </li>
      <li>
        <Link href={"/sub2"}>Sub 2</Link>
      </li>
    </ul>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ padding: 20 }}>
      <h1>
        <Link href={"/"}>Frontend App</Link>
      </h1>
      <Nav />
      <div style={{ padding: 20, border: "1px solid #333" }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
