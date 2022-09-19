import Article from '../../components/Article';
import Box from '../../components/Box';
import Link from '../../components/Link';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';

const migrationUrl = 'https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html';

export default function ClientServerRenderingApi() {
  return (
    <Article>
      <SectionHeader el="h2">New Client and Server Rendering APIs</SectionHeader>
      
      <Section>
        <Box>
          <p>✨ Se rediseñaron las APIs que expone React para renderizar en cliente y servidor.</p>
          <p>Para más info, ver la <Link href={migrationUrl}>guía de migracion a React 18</Link>.</p>
        </Box>

        <Box>
          <p>⚙️ React DOM Client</p>
          <p>Las nuevas APIs ahora son exportadas desde <code>react-dom/client</code>.</p>
          <p><code>createRoot</code> es el nuevo método que reemplaza a <code>ReactDOM.render</code>.</p>
          <p><code>hydrateRoot</code> es el nuevo método que reemplaza a <code>ReactDOM.hydrate</code>.</p>
        </Box>

        <Box>
          <p>⚙️ React DOM Server</p>
          <p>Las nuevas APIs ahora son exportadas desde <code>react-dom/server</code> y tienen soporte completo para el streaming de Suspense en el server.</p>
        </Box>
      </Section>
    </Article>
  );
}