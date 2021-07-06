import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import data from '../utils/data.json'

const Pages = () => {

  let { id } = useParams();

  const [dataPages, setDataPages] = useState(null);

  useEffect(() => {
    setDataPages(data[id])
  }, [id])




  return (
    <section id="page">
      <div className="content-wrapper">
        <div className="in-section">
          Page {id}
        </div>
      </div>
    </section>
  )
}

export default Pages