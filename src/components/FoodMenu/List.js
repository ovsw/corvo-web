import React from 'react'
import FoodMenuItem from './Item'

const FoodMenuList = ({ items }) => (
  <>
    <div className="flex flex-wrap pb-6 md:pb-12">
      {items.map((item, index) => (
        <FoodMenuItem key={index} item={item} />
      ))}
    </div>
  </>
)

export default FoodMenuList
