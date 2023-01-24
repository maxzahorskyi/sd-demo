import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from '@mantine/core';

import Layout from "./components/Layout";
import DictionaryPage from "./pages/DictionaryPage";
import FlashcardsPage from "./pages/FlashcardsPage";

import "./styles/index.css";
import mantineTheme from "./styles/mantineTheme";

import { store } from './store'
import { Provider } from 'react-redux'

export default function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={mantineTheme}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<DictionaryPage />} />
                <Route path='flashcards' element={<FlashcardsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MantineProvider>
      </QueryClientProvider>
    </Provider>
  );
}
