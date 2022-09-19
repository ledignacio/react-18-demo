import Article from '../../components/Article';
import Box from '../../components/Box';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';

export default function Transitions() {
  return (
    <Article>
      <SectionHeader el="h2">Transitions</SectionHeader>
      
      <Section>
        <Box>
          <p>Una <u>transition</u> es un nuevo concepto en React para distinguir entre actualizaciones urgentes y no urgentes.</p>
          <p><b>Actualizaciones urgentes</b> reflejan interaccion directa, como typear o clickear.</p>
          <p><b>Actualizaciones no urgentes</b> (o de transición) normalmente se encargan que la UI pase de una vista a la siguiente.</p>
        </Box>
        
        <Box>
          <p>⭐️ Ver nuevo hook <code>useTransition</code>.</p>
        </Box>
      </Section>
    </Article>
  );
}