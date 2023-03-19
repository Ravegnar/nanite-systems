import '@/styles/main.css'
import 'swiper/css';
import 'mapbox-gl/dist/mapbox-gl.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
// Providers
import MasterProvider from '@/providers/master.provider';

function MyApp({ Component, pageProps }: AppProps) {
  //at the first render initialRenderComplete is false
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;
  return (
    <MasterProvider>
      <Component {...pageProps} />
    </MasterProvider>
  );
}

export default MyApp;
