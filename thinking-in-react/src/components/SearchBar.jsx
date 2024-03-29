/* eslint-disable react/prop-types */


const SearchBar = ({searchText,onSearchTextChange,inStockOnly,onInStockChange}) => {
  return (

    <form>
      <input 
      type="text" 
      placeholder="Search...."
      value={searchText}
      onChange={(e)=>onSearchTextChange(e.target.value)}
      />
      
      <input 
      type="checkbox" 
      id="checkbox"
      value={inStockOnly}
      onChange={(e)=>onInStockChange(e.target.checked)}
       />
    </form>

  )
}

export default SearchBar
