import Image from 'next/image'
import React from 'react'

const BlogTableItems = ({authorImg,author,title,date,mongoId,deleteBlog}) => {
    const BlogDate = new Date(date);
  return (
    
        <tr className='grid grid-cols-5  items-center p-2'>
            <td className='flex gap-3 mx-auto items-center'><Image src={'/profile_icon.png'} width={40} height={40} alt='img'/><p>{author}</p></td>
            <td className='col-span-2 max-w-[100%]'>{title?title:""}</td>
            <td className='mx-auto'>{BlogDate.toDateString()}</td>
            <td onClick={()=>deleteBlog(mongoId)} className='mx-auto w-6 h-6 text-center pb-1   text-white bg-black rounded-full cursor-pointer'>X</td>
        </tr>
        
   
  )
}

export default BlogTableItems