'use client'

import React, { useState, useRef } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
//import axios from 'axios'

async function CreatePost() {


    const [textValue, setTextValue] = useState("")
    const [inputHeight, setInputHeight] = useState("auto")
    const [isDisabled, setIsDisabled] = useState(false)
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    //Criar postagem
    const { mutate } = useMutation(
        async (textValue) => await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ textValue }),
        }))

    function updateTextAreaHeight() {
        const element = textAreaRef.current;
        if (element) {
            element.style.height = "auto";
            element.style.height = `${element.scrollHeight}px`;
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value)
        // setTextValue(e.target.value);
        // updateTextAreaHeight();
        // setTextValue(e.target.value)
        // if (e.target.value.length === 0 || e.target.value.replace(/\s/g, '') === '') {
        //     setTextValue('')
        //     updateTextAreaHeight();
        // }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsDisabled(true)
        {/* @ts-expect-error */ }
        mutate(textValue)
    }
    return (
        <form
            onSubmit={handleSubmit}
            className='bg-white my-8 p-8 rounded-md'>
            <div className='flex flex-col my-4'>
                <textarea onChange={handleChange}
                    ref={textAreaRef}
                    name="title"
                    value={textValue}
                    placeholder="O que você está pensando?"
                    className='block w-full p-4 text-lg rounded-md bg-gray-200 my-2 resize-none focus:outline-none'
                ></textarea>
            </div>

            <div className='flex items-center justify-between gap-2'>
                <p className={`font-bold text-sm ${textValue.length > 300 ? "text-red-500" : "text-gray-700"}`}>{`${textValue.length}/300`}</p>
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