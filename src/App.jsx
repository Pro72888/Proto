// Router component that manages page navigation between First and Second pages
import { useState } from 'react';
import First from './First'
import Second from './Second'
import Third from './Third'

function App() {
  const [currentPage, setCurrentPage] = useState('first')

  if (currentPage === 'second') {
    return <Second setCurrentPage={setCurrentPage} />
  } else if (currentPage === 'third') {
    return <Third setCurrentPage={setCurrentPage} />
  }
  // default (or 'first')
  else {
    return <First setCurrentPage={setCurrentPage} />
  }

}
export default App

