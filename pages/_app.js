import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { createClient, Provider } from "urql";
import UserLayout from "../components/layouts/UserLayout";
import { ThemeProvider } from "next-themes";

const client = createClient({ url: "http://localhost:1337/graphql" });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <UserProvider>
        <Provider value={client}>
          <UserLayout>
            <Component {...pageProps} />
          </UserLayout>
        </Provider>
      </UserProvider>
    </ThemeProvider>
  );
}
