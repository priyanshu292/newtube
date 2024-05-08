import React from 'react'
import Comment from './Comment'

const commentsData = [
    {
        name: "Ken Adams",
        text: "Lorem ipsum dolor sit amet consectetur  ",
        replies: []
    },
    {
        name: "Ken Adams",
        text: "Lorem ipsum dolor sit amet consectetur  ",
        replies: [
            {
                name: "Ken Adams",
                text: "Lorem ipsum dolor sit amet consectetur  ",
                replies: [
                    {
                        name: "Ken Adams",
                        text: "Lorem ipsum dolor sit amet consectetur  ",
                        replies: []
                    },
                ]
            },
            {
                name: "Ken Adams",
                text: "Lorem ipsum dolor sit amet consectetur  ",
                replies: [{
                    name: "Ken Adams",
                    text: "Lorem ipsum dolor sit amet consectetur  ",
                    replies: [{
                        name: "Ken Adams",
                        text: "Lorem ipsum dolor sit amet consectetur  ",
                        replies: [{
                            name: "Ken Adams",
                            text: "Lorem ipsum dolor sit amet consectetur  ",
                            replies: []
                        },]
                    },]
                },]
            },{
                name: "Ken Adams",
                text: "Lorem ipsum dolor sit amet consectetur  ",
                replies: []
            },
        ]
    },
    {
        name: "Ken Adams",
        text: "Lorem ipsum dolor sit amet consectetur  ",
        replies: []
    },
    {
        name: "Ken Adams",
        text: "Lorem ipsum dolor sit amet consectetur  ",
        replies: []
    },
    {
        name: "Ken Adams",
        text: "Lorem ipsum dolor sit amet consectetur  ",
        replies: []
    },
    {
        name: "Ken Adams",
        text: "Lorem ipsum dolor sit amet consectetur  ",
        replies: []
    },
]

// Recursion
const CommentsList = ({comments}) => {
    return (
        <div>
            {comments.map((c,index) => {
                return (
                    <div key={index}>
                        <Comment data={c} />
                        <div className='pl-5 border border-l-black ml-5'>
                            <CommentsList comments={c.replies} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const CommentsContainer = () => {
  return (
    <div className='mx-5 p-2'> 
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
