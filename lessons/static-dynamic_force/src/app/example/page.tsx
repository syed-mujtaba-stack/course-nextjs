export const dynamic = 'force-dynamic';

export default async function Example() {
  return (
    <div>
      The time at rendering is {new Date().toISOString()}.
    </div>
  );
}
