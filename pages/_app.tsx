
import { AnimatePresence, motion } from "framer-motion"; 
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "../src/store"; 
import { CartProvider } from "../src/providers/CartContext"; 
import "../styles/globals.scss";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CartProvider>
          <AnimatePresence mode="wait"> {/* Corrigido aqui */}
            <motion.div
              key={pageProps.pageKey} // Assegura que a animação aconteça em cada página
              initial={{ opacity: 0 }} // Começa com opacidade 0
              animate={{ opacity: 1 }} // Transição de opacidade para 1
              exit={{ opacity: 0 }} // Fade out quando a página sair
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </CartProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;





