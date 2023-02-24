import '@/styles/main.css'
import 'swiper/css';
import 'mapbox-gl/dist/mapbox-gl.css';
import type { AppProps } from 'next/app';
// Providers
import MasterProvider from '@/providers/master.provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MasterProvider>
      <Component {...pageProps} />
    </MasterProvider>
  );
}

export default MyApp;
