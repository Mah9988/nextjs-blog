import Root from "@/layouts/Root";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}
