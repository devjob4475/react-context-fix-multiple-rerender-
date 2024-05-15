import React from 'react'
import { useDataContext } from './context';

function App() {
  const { data, setData } = useDataContext();
  return (
    <div>App</div>
  )
}

export default App