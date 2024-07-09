
import React from 'react'

function Demo() {
  return (
    <>
      <div className="flex flex-row h-20 w-full">
        <div className="basis-[25%] bg-red-500">hi</div>
        <div className="basis-[50%] bg-green-500">hi</div>
        <div className="basis-[25%] bg-blue-500">hi</div>
      </div>
      <div className="flex flex-row h-60 w-full">
        <div className="basis-1/6 bg-red-700">hi</div>
        <div className="basis-2/6 bg-green-800">hi</div>
        <div className="basis-3/6 bg-blue-800">hi</div>
      </div>
      <div className="flex flex-row h-20 bg-red-900">hi</div>
    </>
  )
}

export default Demo