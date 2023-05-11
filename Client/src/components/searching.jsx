import './searching.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
