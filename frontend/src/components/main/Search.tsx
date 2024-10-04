// components/Search.tsx
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import DropSearch from '../sub/DropSearch';
import { Context } from '@/context/ContextProvider';
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";

interface SearchProps {
    handlClick?: () => void; // Optional function prop
    bool : boolean;
  }

const Search = ({bool, handlClick} : SearchProps) => {
  const context = useContext(Context)
  const router = useRouter();
    const pathName = usePathname();
  
  return (
    
    <div className='flex items-center gap-2'>
        
        <div className={` border flex  justify-between  rounded-lg ${bool ? 'border-white w-[200px] md:w-[400px]' : 'border-primary w-[200px] md:w-[300px]'}` }>
  
  <input
    type="text"
    placeholder="Search..."
    value={context?.searchInput}
    onChange={(e) => context?.setSearchInput(e.target.value)}
    
    className={`px-2 py-[9px] bg-inherit flex-1   outline-none ${bool ? 'text-white placeholder:text-white' : 'text-gray placeholder:text-gray'} text-sm font-Poppins`}
  />
  {bool && <DropSearch bool={bool}/>}
  
</div>
<div className=' '>
    <button type='button' onClick={() => {
        if(!pathName.includes('search')) router.push('/search')
        context?.setCoursesList(null);
        context?.setStartIndex(0);
        if(handlClick) handlClick()
    } }  className={`px-4  py-[9px] ${bool ? 'bg-white text-gray hover:bg-white hover:text-white' : 'bg-primary hover:text-gray hover:bg-secondary text-white'} transition-all duration-500  rounded-md text-sm font-Poppins tracking-wide`}>search</button>
</div>
    </div>
  );
};

export default Search;
