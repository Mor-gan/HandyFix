import React, {useState} from 'react'
import "../styles/homepage.css";

const Searchbar = () => {
 const [searchInput, setSearchInput] = useState("");
const artisans=[
    { name: "Chike", state: "Europe" },
    { name: "Tayo", state: "Asia" },
] 
const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};
if (searchInput.length > 0) {
    artisans.filter((artisan) => {
    return artisan.name.match(searchInput);
});
}
return <div>
<input
className="searchBar"
   type="search"
   placeholder="Search by category, name,..."
   onChange={handleChange}
   value={searchInput} />
</div>
};
export default Searchbar;