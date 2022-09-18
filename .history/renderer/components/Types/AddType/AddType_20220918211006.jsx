import React from 'react';

export default function AddType({ addSuccessAction }) {
  const rest = new Rest();
  const [newType, setnewType] = useState('');
  const handleChange = (e) => {
    setnewType(capitalizeData(e.target.value));
  }
  const handleSubmit = () => {
    const addedCategory = (
      new ExpenseCategory(
        1,
        newType,
        true
      )
    )
    rest.add(
      `${INITIAL_URL}/expense-category/add`,
      addedCategory,
      addSuccessAction,
      `Successfully added expense category name '${newType}'`
    )
  }

  return (
    <div>AddType</div>
  )
}
