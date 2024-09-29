/* eslint-disable react/prop-types */

function Form({children,handleSubmit}) {



    return (
        <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit = {handleSubmit}>
            {children}
        </form>
    <p className="text-center text-gray-500 text-xs">
        &copy;2024 OBRE Blog Site.
    </p>
    </div>
    )
}

export default Form