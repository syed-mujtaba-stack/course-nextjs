import { use } from 'react';
import { sqrt } from './api';

export const SquareRootResult = ({ value }: { value: number }) => {
  console.log('call start');
  const result = use(sqrt(value));
  console.log('call end');
  
  return <div>{result}</div>;
}