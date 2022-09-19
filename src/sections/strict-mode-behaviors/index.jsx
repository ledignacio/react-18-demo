import Article from '../../components/Article';
import Box from '../../components/Box';
import Code from '../../components/Code';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';

import { preAfterStrictMode, prePrevStrictMode } from '../../strings/StrictModeBehavoirs';

export default function StrictModeBehavoirs() {
  return (
    <Article>
      <SectionHeader el="h2">New Strict Mode Behavoirs</SectionHeader>
      
      <Section>
        <Box>
          <p>Se añadio un nuevo check al viejo confiable <code>StrictMode</code> (?), el cual automaticamente desmonta y monta cada componente, siempre y cuando dicho componente ya haya sido montado por primera vez, restaurando el state anterior en el segundo montaje.</p>
          <p>Esto es para comprobar la resilencia de los componentes al ser montados y destruidos multiples veces.</p>
        </Box>

        <p>⏪ <u>Antes</u>:</p>

        <Code>
          {prePrevStrictMode}
        </Code>

        <p>⏩ <u>Después</u>:</p>
        
        <Code>
          {preAfterStrictMode}
        </Code>
      </Section>
    </Article>
  );
}