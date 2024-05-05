import React from 'react'

function SearchInput() {
  return (
        <form className=" relative w-full mb-4">   
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-[#191C1F]  cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="search" id="default-search" className=" w-full rounded-[2px] !ps-10 text-sm text-[#77878F] border border-[var(--tes-light-gry-color)]" placeholder="بحث" required />
        </form>
  )
}

export default SearchInput