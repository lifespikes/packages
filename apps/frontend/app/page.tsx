import NextDatatableExample from './next-datatable-example';
import { Suspense } from 'react';

export default async function Index() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Suspense fallback="loading...">
        <NextDatatableExample />
      </Suspense>
    </div>
  );
}
