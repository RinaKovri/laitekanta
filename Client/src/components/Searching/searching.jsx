import './searching.css'


const Searching = ({
  filterText,
  filterTextChange
}) => {
  return (
    <div>
        <input 
          type='search'
          // value={filterText} 
          placeholder="Hae laitetta"
          // onChange={(e) => filterTextChange(e.target.value)}
          className="search"
        />
    </div>
  )
}

export default Searching
