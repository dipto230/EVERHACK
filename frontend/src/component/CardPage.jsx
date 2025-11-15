import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

function CardPage() {
    const { courseData } = useSelector(state => state.course)

    const [popularCourse, setPopularCourse] = useState([])
    useEffect(() => {
        setPopularCourse(courseData.slice(0, 6));
    }, [courseData])

    return (
        <div className="relative flex items-center justify-center flex-col 
            bg-[#020617] w-full">

            {/* Soft grid-like neon glow */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none"></div>

            {/* Glowing title */}
            <h1 className="md:text-[45px] text-[30px] font-semibold text-center mt-[30px] px-[20px]
                text-white drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]
                tracking-wide">
                Our Popular Courses
            </h1>

            {/* Subtitle with subtle glow */}
            <span className="lg:w-[50%] md:w-[80%] text-[15px] text-center mt-[20px] mb-[30px] px-[20px]
                text-gray-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.2)]">
                Explore top-rated courses designed to boost your skills, enhance careers,
                and unlock opportunities in tech, AI, business, and beyond.
            </span>

            {/* Card Wrapper */}
            <div className="w-[100%] min-h-[100vh] flex items-center justify-center flex-wrap 
                gap-[50px] lg:p-[50px] md:p-[30px] p-[10px] mb-[40px]">

                {popularCourse.map((course, index) => (
                    <Card
                        key={index}
                        thumbnail={course.thumbnail}
                        title={course.title}
                        category={course.category}
                        price={course.price}
                        id={course._id}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardPage
