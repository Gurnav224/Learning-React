/* eslint-disable react/prop-types */

import { useState } from "react"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"


const FilterableProductTable = ({products}) => {
    console.log(products)
    const [searchText,setSearchText] = useState('')
    const [inStockOnly,setInStockOnly] = useState(false)
  return (
    <>
      <SearchBar 
        searchText={searchText}
        onSearchTextChange={setSearchText}
        onInStockChange={setInStockOnly}
      />
<ProductTable searchText={searchText} inStockOnly={inStockOnly} products={products}/>

    </>
  )
}

export default FilterableProductTable
