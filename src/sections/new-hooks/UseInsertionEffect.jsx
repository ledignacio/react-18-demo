import { useEffect, useInsertionEffect, useLayoutEffect, useState } from 'react';

import Box from '../../components/Box';
import Button from '../../components/Button';
import Code from '../../components/Code';
import Highlight from '../../components/Highlight';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';

import { preUseEffects } from '../../strings/UseInsertionEffect';

const EFFECT_ID = 'effect-demo';

const createDomElement = (id, text, className) => {
  const el = document.getElementById(id);
  if (el) {
    const p = document.createElement('p');
    const textNode = document.createTextNode(text);
    p.appendChild(textNode);
    p.className = className;
    el.appendChild(p);
  }
};

export default function UseInsertionEffect() {
  const [insert, setInsert] = useState(false);

  useEffect(() => {
    if (insert) {
      createDomElement(EFFECT_ID, 'Este nodo lo insertó useEffect.', 'text-white bg-indigo-500 rounded-md p-3');
    }
  }, [insert]);

  useLayoutEffect(() => {
    if (insert) {
      createDomElement(EFFECT_ID, 'Este nodo lo insertó useLayoutEffect.', 'text-white bg-orange-500 rounded-md p-3');
    }
  }, [insert]);

  useInsertionEffect(() => {
    if (insert) {
      createDomElement(EFFECT_ID, 'Este nodo lo insertó useInsertionEffect.', 'text-white bg-pink-500 rounded-md p-3');
    }
  }, [insert]);

  const handleClick = () => {
    setInsert(true);
  };

  return (
    <Section>
      <SectionHeader href="https://reactjs.org/blog/2022/03/29/react-v18.html#useInsertionEffect">
        useInsertionEffect
      </SectionHeader>
      
      <Box>
        <p>Si no tenes que interactuar con el DOM o los cambios que realizas sobre este no son observables, entonces 👉 <code>useEffect</code></p>
        <p>Si necesitas mutar el DOM y/o realizar mediciones, entonces 👉 <code>useLayoutEffect</code></p>
      </Box>

      <Box>
        <p>
          <u>🔁 useEffect life cycle</u>
        </p>
        <img src="/useEffectLifeCycle.png" alt="useEffect life cycle" />
        <p>
          <u>🔁 useLayoutEffect life cycle</u>
        </p>
        <img src="./useLayoutEffectLifeCycle.png" alt="useLayoutEffect life cycle" />
      </Box>

      <Code>
        {'useInsertionEffect(didUpdate);'}
      </Code>

      <Box>
        <p>Se ejecuta sincronicamente antes de que ocurran las mutaciones del DOM.</p>
        <p>Esto es para abordar problemas de rendimiento de la inyección de estilos en el renderizado.</p>
      </Box>

      <Box>
        <p>🚨 <u>¡Importante!</u></p>
        <p>Su uso <b>debería</b> estar limitado a librerias de tipo <Highlight>css-in-js</Highlight>.</p>
      </Box>

      <Code>
        {preUseEffects}
      </Code>

      <Box>
        <Button className='mt-4' onClick={handleClick} disabled={insert}>Insertar nodos</Button>
        <div id={EFFECT_ID}>
          <p>Nodos en orden de inserción:</p>
        </div>
      </Box>
    </Section>
  );
}
