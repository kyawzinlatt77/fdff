import '../styles/globals.css'
import Head from "next/head";
import { createClient, Provider} from 'urql'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const client = createClient({ url: 'http://localhost:1337/graphql' })

export default function App({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
 
