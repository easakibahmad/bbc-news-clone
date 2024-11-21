'use client';

import { useParams } from 'next/navigation';

export default function Category() {
  const {slug} = useParams();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">{slug} news</h1>
    </div>
  );
}

