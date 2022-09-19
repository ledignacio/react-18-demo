import Article from '../../components/Article';
import Box from '../../components/Box';
import Code from '../../components/Code';
import Highlight from '../../components/Highlight';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';

import { preBatching } from '../../strings/AutomaticBatching';

export default function AutomaticBatching() {
  return (
    <Article>
      <SectionHeader el="h2">Automatic Batching</SectionHeader>
      
      <Section>
        <Box>
          <p>¿Que es batching?</p>
          <p>Es cuando React agrupa multiples actualizaciones de state en un unico re-renderizado para un mejor rendimiento.</p>
        </Box>
        
        <Box>
          <p>⏪ <u>Antes</u>: </p>
          <p>Solo los eventos de React eran agrupados antes de procesarlos. En este caso 👇 React va a renderizar dos veces, una por cada actualización de state. <Highlight color="red">No hay batching</Highlight> 😔.</p>
        </Box>
        
        <Code>
          {preBatching}
        </Code>

        <Box>
          <p>⏩ <u>Después</u>: </p>
          <p>Actualizaciones dentro de timeouts, promises, native event handlers (ej: event listeners) o cualquier otro evento se agrupan al momento de procesarse. En este caso ☝️ React solo renderiza una única vez al final. <Highlight color="green">¡Ahora si hay batching!</Highlight> 😍.</p>
        </Box>
      </Section>
    </Article>
  );
}