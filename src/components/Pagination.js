import React, { useContext } from 'react'
import {AppContext} from "../context/AppContext"

function Pagination() {
  const {page, totalPages, handlePageChange} = useContext(AppContext);
  return (
    <div>
      <div>
        {
          page > 1 ? <button onClick={() => handlePageChange(page - 1)}>Previous</button> : null
        }
        {
          page < totalPages ? <button onClick={() => handlePageChange(page + 1)}>Next</button> : null
        }
      </div>
      <p>
        Page {page} of {totalPages}
      </p>
    </div>
  )
}

export default Pagination
