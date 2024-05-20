import React from 'react'
import { db } from '@/lib/database'

const CourseIdPage = async ({params}:{params:{courseId: string}}) => {

    const courseId = params.courseId
    const course = await db
  return (
    <div className="">

        {params.courseId}

    </div>
  )
}

export default CourseIdPage
