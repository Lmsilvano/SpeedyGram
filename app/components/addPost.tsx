'use client'

import React, { useState } from 'react'



function CreatePost() {


    const [title, setTitle] = useState("")
    const [inputHeight, setInputHeight] = useState("auto")
    const [isDisabled, setIsDisabled] = useState(false)
    const handleChange = (e: any) => {
        setInputHeight(e.target.scrollHeight)
        setTitle(e.target.value)
        if (e.target.value.length === 0) {
            setInputHeight('auto')
        }
    };
    return (
        <form
            className='bg-white my-8 p-8 rounded-md'>
            <div className='flex flex-col my-4'>
                <textarea onChange={handleChange}
                    name="title"
                    value={title}
                    style={inputHeight != 'auto' ? { height: `${inputHeight}px` } : {}}
                    placeholder="O que você está pensando?"
                    className='p-4 text-lg rounded-md bg-gray-200 my-2 resize-none '
                ></textarea>
            </div>

            <div className='flex items-center justify-between gap-2'>
                <p className={`font-bold text-sm ${title.length > 300 ? "text-red-500" : "text-gray-700"}`}>{`${title.length}/300`}</p>
                <button
                    disabled={isDisabled}
                    className='text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25'
                    type="submit"
                >Publicar</button>
            </div>

        </form>
    )
}

export default CreatePost