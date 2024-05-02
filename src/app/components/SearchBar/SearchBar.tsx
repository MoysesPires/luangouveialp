import React from "react";

interface SearchBarComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const SearchBarComponent: React.FC<SearchBarComponentProps> = ({
  placeholder,
  ...props
}) => {
  return (
    <div className="w-[497px] h-[42px] justify-between items-start inline-flex">
      <input 
        className="w-[455px] h-[42px] p-3 bg-zinc-100 rounded-tl-sm rounded-bl-sm outline-0 justify-start items-center gap-3 inline-flex placeholder:text-base-gray text-base-black"
        placeholder={placeholder}
        
        {...props}
      />
      <button  className="w-[55px] h-[42px] p-[21px] bg-primary-200 hover:bg-emerald-600 disabled:bg-emerald-100 disabled:text-slate-100 rounded-tr-sm rounded-br-sm justify-center items-center gap-[9px] inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9433 15.9428C16.3338 15.5523 16.967 15.5523 17.3575 15.9428L21.7075 20.2928C22.098 20.6833 22.098 21.3165 21.7075 21.707C21.317 22.0975 20.6838 22.0975 20.2933 21.707L15.9433 17.357C15.5528 16.9665 15.5528 16.3333 15.9433 15.9428Z" fill="white"/>
        </svg>
      </button>
    </div>
  );
};

export default SearchBarComponent;

