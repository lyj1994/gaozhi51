import type { AppProps } from "next/app";
import BasicLayout from "../components/BasicLayout";
import "../styles/globals.css";
import "../styles/layout.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
}
