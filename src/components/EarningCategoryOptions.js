import React from 'react';

const EarningCategoryOptions = ({handleChange, categories}) => {



  return (
  <select name='earning_category' onChange={handleChange}>
    {categories.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}
  </select>
  )
}

export default EarningCategoryOptions;
