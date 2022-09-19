import Article from '../../components/Article';
import SectionHeader from '../../components/SectionHeader';

import UseId from './UseId';
import UseTransition from './UseTransition';
import UseDeferredValue from './UseDeferredValue';
import UseInsertionEffect from './UseInsertionEffect';
import UseSyncExternalStore from './UseSyncExternalStore';

export default function NewHooks() {
  return (
    <Article>
      <SectionHeader el="h2">New Hooks</SectionHeader>
      <UseId />
      <UseTransition />
      <UseDeferredValue />
      <UseInsertionEffect />
      <UseSyncExternalStore />
    </Article>
  );
}
