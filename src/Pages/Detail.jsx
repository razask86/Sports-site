import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from '../Components/Footer';

function Detail() {
  const { name } = useParams()
  const [post, setPost] = useState()
  console.log(post, 'post')
  console.log

  useEffect(() => {
    getSingle()
  }, [name])

  const getSingle = async () => {
    const { data } = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${name}`)
    console.log(data.teams[0], 'data in single')
    setPost(data.teams[0])
  }

  return (
    <>
    <Header />
    <div className='px-6 md:px-20 lg:px-56 mt-10'>
      <h3 className='text-red-500 text-[40px] text-center'>{post?.strTeam}</h3>
      <h3 className='text-[23px] font-bold text-center'>{post?.strLeague}</h3>
      <div className='flex items-center mt-5'>
        <img src={`${post?.strTeamBanner}`}
          className='w-full rounded-sm' />
        {/* <div className='ml-2'>
          <h3 className='font-bold text-[12px]'>Tubeguruji</h3>
          <h3 className='text-gray-500 text-[10px]'>24 Sept 2024</h3>
        </div> */}
      </div>
      <p className='text-justify my-4'>{post?.strDescriptionEN}</p>
      {/* <img src={post.coverImage} className='rounded-2xl mt-5 mb-5 w-full' />
      <ReactMarkdown children={post.desc}
        escapeHtml={false} className='leading-9' /> */}
    </div>
    <Footer />
    </>
  )
}
export default Detail;