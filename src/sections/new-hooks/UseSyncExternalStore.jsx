import { useState } from 'react';

import useMediaQuery from '../../hooks/useMediaQuery';
import useWindowInnerWidth from '../../hooks/useWindowInnerWidth';

import Box from '../../components/Box';
import Code from '../../components/Code';
import Input from '../../components/Input';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';

import { preSelectedField, preUseMediaQuery, preUseWindowInnerWidth } from '../../strings/UseSyncExternalStore';
import Highlight from '../../components/Highlight';

const WindowInnerWidth = () => {
  const windowWidth = useWindowInnerWidth(-1);

  return (
    <p>Window width: {windowWidth}px</p>
  );
};

const MediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState('(min-width: 1000px)');
  const mediaQueryMatches = useMediaQuery(mediaQuery, false);

  const handleChange = (e) => {
    setMediaQuery(e.target.value);
  };

  return (
    <>
      <p>Media query:</p>
      <Input onChange={handleChange} value={mediaQuery} />
      <p>Media query match window width? <Highlight color={mediaQueryMatches ? 'green' : 'red'}>{String(mediaQueryMatches)}</Highlight></p>
    </>
  );
};

export default function UseSyncExternalStore() {
  return (
    <Section>
      <SectionHeader href="https://reactjs.org/blog/2022/03/29/react-v18.html#useSyncExternalStore">
        useSyncExternalStore
      </SectionHeader>

      <Code>
        {'const state = useSyncExternalStore(subscribe, getSnapshot[, getServerSnapshot]);'}
      </Code>

      <Box>
        <p>Recomendado para leer y suscribirse desde fuentes de datos externas de forma que sea compatible con las características de renderizado concurrente como <code>selective hydration</code> and <code>time slicing</code>.</p>
      </Box>

      <Box>
        <p>El hook retorna el valor de la store y recibe tres argumentos:</p>
        <p><u>subscribe</u>: función para registrar un callback que es llamado cada vez que el store cambia.</p>
        <p><u>getSnapshot</u>: función que retorna el valor actual del store.</p>
        <p><u>getServerSnapshot</u>: función que retorna el snapshot utilizado durante server rendering.</p>
      </Box>

      <p>⚙️ Para suscribirse al store completo:</p>

      <Code>
        const state = useSyncExternalStore(store.subscribe, store.getSnapshot);
      </Code>

      <p>⚙️ Para suscribirse a un campo especifico:</p>

      <Code>
        {preSelectedField}
      </Code>

      <Box>
        <p>🚨 <u>¡Importante!</u></p>
        <p>Pensado para ser utilizado en librerias.</p>
      </Box>

      <SectionHeader el='h4'>
        useWindowInnerWidth
      </SectionHeader>

      <Code>
        {preUseWindowInnerWidth}
      </Code>

      <Box>
        <WindowInnerWidth />
      </Box>

      <SectionHeader el='h4'>
        useMediaQuery
      </SectionHeader>

      <Code>
        {preUseMediaQuery}
      </Code>

      <Box>
        <MediaQuery />
      </Box>
    </Section>
  );
}
