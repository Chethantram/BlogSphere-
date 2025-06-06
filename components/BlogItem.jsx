import { FaAngleRight } from "react-icons/fa6";
import Image from 'next/image'
import Link from "next/link";

const BlogItem = ({image,title,description,category,_id}) => {
  return (
    
    <div>
        <div className='border-2 border-black flex overflow-hidden rounded-lg min-h-[400px] md:min-h-[400px]  lg:min-h-[450px]  flex-col gap-3 '>

            <Link href={`/blogs/${_id}`}>
                <Image
                src={image}
                width={400}
                height={450}
                alt='image'
                className=' w-full m-4 rounded-md object-cover max-w-[350px]  md:max-w-[300px] lg:max-w-[400px]  md:max-h-[280px] max-h-[280px] p-3 lg:mx-auto md:my-2 mx-auto'
                />
                {/*  */}
                </Link>
                <button className="h-6 mx-5  max-w-[120px] bg-black text-white">{category}</button>
                <h2 className='text-xl font-semibold mx-5 line-clamp-1' dangerouslySetInnerHTML={{__html:title.slice(0,75)}}></h2>
                <p className='text-gray-700 mx-5 line-clamp-1 ' dangerouslySetInnerHTML={{__html:description.slice(0,90)}}></p>
            
            <Link href={`/blogs/${_id}`} type='submit' className=' flex items-center justify-center gap-3 w-32 mb-3 mx-5 text-white h-10 bg-blue-500 rounded-lg'>Read More <FaAngleRight/> </Link>
            

        </div>
    </div>
  )
}

export default BlogItem