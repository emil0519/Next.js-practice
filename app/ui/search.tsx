'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export default function Search({ placeholder }: { placeholder: string }) {
  // when we need to use use clinet, use useSearchParams to get the url
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  // Concept: URL search params, the below function update url query string as user type, this allow shareable url, instant server response when url is read
  // and good for tracking
  const handleSearch = (input: string) =>{
    const params = new URLSearchParams(searchParams)
    if(input) {
      params.set("query", input)
    }
    else {
      params.delete("query")
    }
    replace(`${pathName}?${params.toString()}`)
  }
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e)=>handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
