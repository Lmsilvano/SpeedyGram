'use client'

import React, { useState, useRef, ReactHTMLElement } from 'react'



function CreatePost() {


    const [value, setValue] = useState("")
    const [inputHeight, setInputHeight] = useState("auto")
    const [isDisabled, setIsDisabled] = useState(false)
    const textAreaRef = useRef<HTMLTextAreaElement>(null);


    function updateTextAreaHeight() {
        const element = textAreaRef.current;
        if (element) {
            element.style.height = "auto";
            element.style.height = `${element.scrollHeight}px`;
        }
    }
    const handleChange = (e: any) => {
        setValue(e.target.value);
        updateTextAreaHeight();
    };
    return (
        <form
            className='bg-white my-8 p-8 rounded-md'>
            <div className='flex flex-col my-4'>
                <textarea onChange={handleChange}
                    ref={textAreaRef}
                    name="title"
                    value={value}
                    style={inputHeight != 'auto' ? { height: `${inputHeight}px` } : {}}
                    placeholder="O que você está pensando?"
                    className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                ></textarea>
            </div>

            <div className='flex items-center justify-between gap-2'>
                <p className={`font-bold text-sm ${value.length > 300 ? "text-red-500" : "text-gray-700"}`}>{`${value.length}/300`}</p>
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