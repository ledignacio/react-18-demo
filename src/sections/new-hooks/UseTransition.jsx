import { useState, useTransition } from 'react';

import Box from '../../components/Box';
import Button from '../../components/Button';
import Code from '../../components/Code';
import HighlightedList from '../../components/HighlightedList';
import Input from '../../components/Input';
import List from '../../components/List';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';

import { names } from '../../utils/mocks';
import { preWithoutTransition, preWithTransition } from '../../strings/UseTransition';
import { filterNames } from '../../utils/utils';


const HighlightTransition = ({ showWithTransition }) => {
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (showWithTransition) {
      startTransition(() => {
        setHighlight(e.target.value);
      });
    } else {
      setHighlight(e.target.value);
    }
  };

  return (
    <div className='px-2 pt-2'>
      <Input onChange={handleChange} value={query} />
      <HighlightedList data={names} highlight={highlight}/>
    </div>
  );
};

const FilterTransition = ({ showWithTransition }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [isPending, startTransition] = useTransition();
  const filteredNames = filterNames(filter, names);
  
  const handleChange = (e) => {
    setQuery(e.target.value);
    if (showWithTransition) {
      startTransition(() => {
        setFilter(e.target.value);
      });
    } else {
      setFilter(e.target.value);
    }
  };

  return (
    <div className='px-2 pt-2'>
      <Input className={!(filteredNames.length > 0) && 'mb-4'} onChange={handleChange} value={query} />
      {isPending && <p>Actualizando lista...</p>}
      <List data={filteredNames} />
    </div>
  );
};

export default function UseTransition() {
  const [showHighlight, setShowHighlight] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showWithTransition, setShowWithTransition] = useState(false);

  return (
    <Section>
      <SectionHeader href="https://reactjs.org/blog/2022/03/29/react-v18.html#usetransition">
        useTransition
      </SectionHeader>

      <Box>
        <p>Permite marcar algunas actualizaciones de <code>state</code> como <b>no</b> urgentes. Otras actualizaciones de state se consideran urgentes por defecto. Se denominan transiciones.</p>
        <p>Las actualizaciones de state urgentes interrumpiran a las actualizaciones no urgentes.</p>
        <p>Hay jerarquia dentro de las transiciones (?).</p>
      </Box>

      <Code>
        {'const [isPending, startTransition] = useTransition();'}
      </Code>

      <Box>
        <p><code>startTransition: function</code> marca las actualizaciones de state como transiciones.</p>
        <p><code>isPending: boolean</code> indica cuando una transición está activa.</p>
      </Box>

      <p>🔎 Sin useTransition:</p>

      <Code>
        {preWithoutTransition}
      </Code>

      <p>🔎 Con useTransition:</p>

      <Code>
        {preWithTransition}
      </Code>

      <Box>
        <Button className="my-4 mr-4" onClick={() => setShowHighlight((show) => !show)}>{showHighlight ? 'Cerrar' : 'Abrir'}</Button>
        <Button className="my-4" onClick={() => setShowWithTransition((show) => !show)} disabled={!showHighlight}>{showWithTransition ? 'WithTransition' : 'WithoutTransition'}</Button>

        <div className='max-h-screen overflow-x-hidden overflow-y-auto'>
          {
            showHighlight && (
              <HighlightTransition showWithTransition={showWithTransition} />
            )
          }
        </div>
      </Box>
          
      <Box>
        <p>🧑‍💻 Probar con Performance/CPU/throttling (?)</p>
        <Button className="my-4 mr-4" onClick={() => setShowFilter((show) => !show)}>{showFilter ? 'Cerrar' : 'Abrir'}</Button>
        <Button className="my-4" onClick={() => setShowWithTransition((show) => !show)} disabled={!showFilter}>{showWithTransition ? 'WithTransition' : 'WithoutTransition'}</Button>

        <div className='max-h-screen overflow-x-hidden overflow-y-auto'>
          {
            showFilter && (
              <FilterTransition showWithTransition={showWithTransition} />
            )
          }
        </div>
      </Box>
    </Section>
  );
}
