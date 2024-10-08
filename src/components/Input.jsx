/* eslint-disable react/prop-types */

function Input({labelName, inputType, inputName, placeholder,handleChange}) {
  return (
    <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={inputName}>
                {labelName}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={inputName} type={inputType} placeholder={placeholder} name={inputName} onChange={handleChange}/>
        </div>
  )
}

export default Input