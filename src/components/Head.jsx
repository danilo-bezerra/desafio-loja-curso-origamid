import React from 'react'
import { useLocation } from 'react-router-dom'

const Head = ({title}) => {
    const location = useLocation()

    React.useEffect(() => {
        document.title = 'Loja | ' + title
    }, [location])


  return (
    <></>
  )
}

export default Head