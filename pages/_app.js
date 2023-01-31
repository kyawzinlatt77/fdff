import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { createClient, Provider } from "urql";
import UserLayout from "../components/layouts/UserLayout";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const client = createClient({
  url: "https://strapi-production-0fb7.up.railway.app/graphql",
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <UserProvider>
        <Provider value={client}>
          <Toaster />
            <UserLayout>
              <Component {...pageProps} />
            </UserLayout>
        </Provider>
      </UserProvider>
    </ThemeProvider>
  );
}
