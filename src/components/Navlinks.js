import React from 'react'

const Navlinks = () => {
    const links = [
        {name: 'Şalt Malzeme'},
        {name: 'Aydınlatma'},
        {name: 'Kablo'},
        {name: 'Sarf Malzeme'},
        {name: 'Anahtar Priz'}
    ]
  return (
    <>
    {
        links.map(link=>(
            <div>
                <div>
                    <h1>
                    {link.name}
                    </h1>   
                </div>
            </div>
        ))
    }
    </>
  )
}

export default Navlinks