import React from 'react'

export default function Heading({title}) {
    return (
        <div className="row">
            <div className="col text-center mb-4 text-white">
              <h1 className="display-3">{title}</h1>
              <hr className="text-center mx-auto text-info"/>
            </div>
        </div>
    )
}
