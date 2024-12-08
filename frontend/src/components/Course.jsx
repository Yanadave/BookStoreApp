import React, { useEffect, useState } from 'react'
import Cards from "./Cards"
import axios from "axios"
import {Link} from "react-router-dom"
function Course() {
    const [book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])
  return (
    <>
    <div className='max-w-screen-2xl w-screen container mx-auto md:px-20 px-4'>
        <div className='mt-16 items-center justify-center text-center'>
            <h1 className='text-xl font-medium md:text-4xl'>We're delighted to have you <span className='text-violet-800'>Here! :)</span></h1>
            <p className='mt-12'>Welcome to our bookstore, a haven for book lovers and curious minds alike! Here, every shelf holds a story waiting to be discovered, and every page is a doorway to a new world. Whether you're looking for a timeless classic, a thought-provoking read, or the perfect gift, we’re here to help you find it.<br/>
            Take your time to explore, enjoy the journey, and let us be part of your story.</p>
           <Link to="/">
                <button className=' mt-6 bg-violet-700 text-white px-4 py-2 rounded-lg hover:bg-violet-900 duration-300'>Back</button>
           </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item) => (
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course