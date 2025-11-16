// import React from 'react'

interface Props {
  query : string,
  setQuery : (query : string) => void
}

const SearchBar:React.FC<Props> = ({query,setQuery}) => {
   const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
   }

  return (
    <div>
      <input type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for a mood..(eg:-happy)"
        className="w-full px-4 py-2 border rounded-md shadow-sm"
      />
    </div>
  )
}

export default SearchBar
