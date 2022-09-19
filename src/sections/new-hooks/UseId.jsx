import { useState } from 'react';

import Box from '../../components/Box';
import Button from '../../components/Button';
import Code from '../../components/Code';
import Counter from '../../components/Counter';
import Id from '../../components/Id';
import Input from '../../components/Input';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';

import { getRandomHexColor } from '../../utils/utils';

export default function UseId() {
  const [quantity, setQuantity] = useState(0);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#ffffff');

  const handleChangeQuantity = (e) => {
    const { target: { value } } = e;
    const numericValue = Number(value);

    if(!isNaN(numericValue) && typeof numericValue === 'number' && numericValue <= 30) {
      setQuantity(numericValue);
    }
  };

  const showIds = () => {
    setShow(true);
  };

  const reset = () => {
    setQuantity(0);
    setShow(false);
  };

  const handleClick = () => {
    setCount((count) => count + 1);
    setColor(getRandomHexColor());
  };

  return (
    <Section>
      <SectionHeader href="https://reactjs.org/blog/2022/03/29/react-v18.html#useid">
        useId
      </SectionHeader>

      <Code>
        {'const id = useId();'}
      </Code>

      <Box>
        <p>✅ Es único</p>
        <Input type="text" onChange={handleChangeQuantity} value={quantity} />
        <span className='text-gray-600 float-right'>(Max. 30)</span>
        <div className='my-6'>
          <Button className="mr-4" onClick={showIds} disabled={show}>Mostrar ids</Button>
          <Button onClick={reset}>Reset</Button>
        </div>
        {quantity > 0 && show && (
          <ul className='grid grid-cols-3 mt-4'>
            {Array(quantity).fill().map((_, i) => (
              <Id key={i}/>
            ))}
          </ul>
        )}
      </Box>

      <Box style={{ background: color }}>
        <p>✅  <span className='bg-white rounded px-1'>Se mantiene entre renderizados</span></p>
        <div className='flex mb-6'>
          <Button className="mr-4" onClick={handleClick}>+1</Button>
          <Counter count={count} />
        </div>
      </Box>

      <Box>
        <p>🚨 <u>¡Importante!</u></p>
        <p>Principalmente útil para componentes que se integran con las APIs de accesibilidad que requieren IDs únicos.</p>
        <p>¡No usar como keys en listas!</p>
      </Box>
    </Section>
  );
}
