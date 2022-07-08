const CategoryButtons = ({ categories = [] }) => {
  return (
    <div className="container flex flex-wrap mx-6 gap-2 mt-8">
      {categories.length &&
        categories.map((_category) => (
          <div key={_category.id} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            {_category.attributes.name}
          </div>
        ))}
    </div>
  )
}

export default CategoryButtons
