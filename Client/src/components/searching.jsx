const Searching = ({
  filterText,
  filterTextChange
}) => {
  return (
    <form className='form'>
      <input 
      type='text'
      value={filterText} 
      placeholder='Hae laitetta' 
      onChange={(e) => filterTextChange(e.target.value)}/>
    </form>
  )
}

export default Searching
