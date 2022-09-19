import { useDeferredValue, useState } from 'react';

import Box from '../../components/Box';
import Button from '../../components/Button';
import Code from '../../components/Code';
import Input from '../../components/Input';
import List from '../../components/List';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';

import { names } from '../../utils/mocks';
import { preDeferredValue } from '../../strings/UseDeferredValue';
import { filterNames } from '../../utils/utils';

const WithDeferredValue = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <p>query: </p>
      <Input className={`${!query && 'mb-4'}`} onChange={handleChange} value={query} />
      {query && (
        <>
          <p>deferredQuery: </p>
          <p className={`rounded p-2 break-words ${deferredQuery !== query ? 'bg-red-400' : 'bg-green-400'}`}>{deferredQuery}</p>
        </>
      )}
    </>
  );
};

const FilterDeferredValue = ({ showWithDeferredValue }) => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const filteredNames = filterNames(showWithDeferredValue ? deferredQuery : query, names);
  
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className='px-2 pt-2'>
      <Input className={!(filteredNames.length > 0) && 'mb-4'} onChange={handleChange} value={query} />
      <List data={filteredNames} />
    </div>
  );
};

export default function UseDeferredValue() {
  const [showFilter, setShowFilter] = useState(false);
  const [showWithDeferredValue, setShowWithDeferredValue] = useState(false);

  return (
    <Section>
      <SectionHeader href="https://reactjs.org/blog/2022/03/29/react-v18.html#useDeferredValue">
        useDeferredValue
      </SectionHeader>

      <Code>
        {'const deferredValue = useDeferredValue(value);'}
      </Code>

      <Box>
        <p>Recibe un valor y retorna una nueva copia del valor que se pospondrá a actualizaciones más urgentes.</p>
        <p>Si el render actual es el resultado de una actualización urgente, como podría ser el input de un usuario, React retornará el valor anterior y luego renderizara el nuevo valor despues de que el render urgente se haya completado.</p>
      </Box>

      <Code>
        {preDeferredValue}
      </Code>

      <Box>
        <p>🟩 deferredQuery === query</p>
        <p>🟥 deferredQuery !== query</p>
        <WithDeferredValue />
      </Box>

      <Box>
        <p>🧑‍💻 Probar con Performance/CPU/throttling (?)</p>
        <Button className="my-4 mr-4" onClick={() => setShowFilter((show) => !show)}>{showFilter ? 'Cerrar' : 'Abrir'}</Button>
        <Button className="my-4" onClick={() => setShowWithDeferredValue((show) => !show)} disabled={!showFilter}>{showWithDeferredValue ? 'WithDeferredValue' : 'WithoutDeferredValue'}</Button>

        <div className='max-h-screen overflow-x-hidden overflow-y-auto'>
          {
            showFilter && (
              <FilterDeferredValue showWithDeferredValue={showWithDeferredValue} />
            )
          }
        </div>
      </Box>

      <Box>
        <p>⭐️ Resultado similar a useTransition. <code>useTransition</code> envuelve el código que realiza la actualización del state. <code>useDeferredValue</code> envuelve el valor afectado por la actualización de state.</p>
        <p>Cuando tenes acceso al código de actualizacion de state: </p>
        <p>✔️ useTransition</p>
        <p>Cuando tenes acceso solo al valor retornado: </p>
        <p>✔️ useDeferredValue</p>
      </Box>
    </Section>
  );
}
