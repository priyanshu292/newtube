import React from 'react'
import user from '../assets/user.png'

const Comment = ({data}) => {

    const {name, text, replies} = data;

  return (
    <div className='flex py-2 items-center bg-gray-100 rounded-lg my-2'>
      <img className='w-14 h-8' alt='user' src={user} />
      <div className='px-1'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Comment
