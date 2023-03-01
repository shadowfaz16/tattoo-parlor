import React from 'react'

const FormField = ({LabelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {

    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
                <label htmlFor={name} className='block font-medium text-gray-900 text-sm'>{LabelName}</label>
                {isSurpriseMe && (
                    <button type='button' className='text-xs font-semibold bg-[#ececf1] py-1 px-2 rounded-[5px] text-black' onClick={handleSurpriseMe}>Surprise me</button>
                )}
            </div>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className='w-full border bg-gray-50 text-gray-900 text-sm border-gray-300 rounded-lg p-3 outline-none focus:ring-emerald-300 focus:ring-2 focus:border-transparent'
                 />
        </div>
    )
}

export default FormField