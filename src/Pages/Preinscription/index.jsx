import { useEffect, useState } from 'react'
import Axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/preinscriptions/'
export default function Preinscription() {
  const [preins, setPreins] = useState([])
  useEffect(() => {
    Axios.get(baseURL).then((response) => {
      setPreins(response.data)
      console.log(response.data)
    })
  }, [])
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        {/* <h1>Preinscription</h1> */}
        <div>
          {preins.map((preins) => (
            <div key={preins.id}>
              <h1>{preins.name}</h1>
              <p>{preins.email}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
