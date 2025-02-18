import { BigBox } from '@/components/BigBox';

export default function Home() {
  return (
    <div>
      {[...Array(10)].map((_, i) => (
        <BigBox key={i} value={i} />
      ))}
    </div>
  );
}

