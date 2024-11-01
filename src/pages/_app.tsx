import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <header className="bg-zinc-200 m-2 rounded-md text-center align-middle">
                <p className="my-2">Header</p>
            </header>

            <Component {...pageProps} />
            <footer className="bg-zinc-200 m-2 rounded-md text-center align-middle">
                <p className="my-2">Footer</p>
            </footer>
        </QueryClientProvider>
    );
}
