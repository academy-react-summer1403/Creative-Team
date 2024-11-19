import React from 'react'

export const index = () => {
  return (
    <>
    <div className="w-11/12 mx-auto mt-6">
          <div className="flex flex-row justify-end gap-2">
            <span className="text-lg font-serif text-black dark:text-white">
              جستجو
            </span>
            <img
              className="size-5 mt-2"
              src="\imgLand\search-01-stroke-rounded 1.png"
            ></img>
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-200 w-full p-3 rounded-xl"
              type="text"
            ></input>
            <img
              className="bg-blue-600 rounded-xl -mt-10 ml-1 p-2"
              src="\imgLand\search-01-stroke-rounded 2.png"
            ></img>
          </div>
        </div>
    </>
  )
}
