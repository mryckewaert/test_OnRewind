import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
