import React from "react";

import "../styles/global.scss";
// import "/styles/base.scss";
// import "../styles/base.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
