import Article from '../../components/Article';
import Box from '../../components/Box';
import Code from '../../components/Code';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';

import { preSuspense } from '../../strings/Suspense';

export default function Suspense() {
  return (
    <Article>
      <SectionHeader el="h2">New Suspense Features</SectionHeader>
      
      <Section>
        <Box>
          <p>Suspense permite especificar de forma declarativa un fallback (loading...) para una parte del arbol de componentes que aun no esta lista para mostrarse.</p>
          <p>Hasta el momento solo estaba soportado cuando se hacia code splitting con <code>React.lazy</code>.</p>
        </Box>

        <Code>
          {preSuspense}
        </Code>

        <Box>
          <p>Ahora se agregó soporte para server side y funciona a la par con las nuevas capabilities de renderizado concurrente agregadas en esta version de React.</p>
        </Box>
      </Section>
    </Article>
  );
}