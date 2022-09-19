import SectionHeader from './components/SectionHeader';

import ConcurrentReact from './sections/concurrent-react';
import AutomaticBatching from './sections/automatic-batching';
import NewHooks from './sections/new-hooks';
import Transitions from './sections/transitions';
import Suspense from './sections/suspense';
import ClientServerRenderingApi from './sections/client-server-rendering-api';
import StrictModeBehavoirs from './sections/strict-mode-behaviors';

function App() {
  return (
    <main className='px-28 py-14 prose max-w-none'>
      <SectionHeader el='h1' href="https://reactjs.org/blog/2022/03/29/react-v18.html">
        React 18
      </SectionHeader>

      <ConcurrentReact />
      <AutomaticBatching />
      <Transitions />
      <Suspense />
      <ClientServerRenderingApi />
      <StrictModeBehavoirs />
      <NewHooks />
    </main>
  );
}

export default App;
