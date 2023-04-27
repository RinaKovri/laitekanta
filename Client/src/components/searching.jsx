import './searching.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Searching = ({
  filterText,
  filterTextChange
}) => {
  return (
    <form className='form'>
        <input 
          type='text'
          value={filterText} 
          placeholder="Hae laitetta"
          onChange={(e) => filterTextChange(e.target.value)}
          className="search"
          style={{height:'35px'}}
        />
    </form>
  )
}

export default Searching
