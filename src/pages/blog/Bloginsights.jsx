import React from 'react';
// Assuming this path is correct for your blog posts data
import blogPosts from '@/components/layout/BlogPosts';
import Link from "next/link";

//  topicButtons array here
const topicButtons = ["All", "Electric Vehicles", "Design", "BIW", "CFD", "Engineering"];
const BlogInsights = () => {
    return (
        <section>
            <div className="flex flex-col justify-center items-center font-dm-sans py-3 px-4 md:px-8 lg:px-6">
                {/* Section Heading */}
                <span className="text-sm font-bold tracking-wide text-[#101359] mb-3">
                    OUR BLOG
                </span>
                <h1 className="text-[#101359] text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">
                    Insights,Trends & <span className="text-[#45D2FF]">Career Guidance</span>
                </h1>
                <p className="text-sm sm:text-base md:text-med font-medium leading-relaxed text-center lg:text-start max-w-3xl mx-auto text-[#8C8C8C] mb-6 sm:whitespace-nowrap px-4">
                    Explore the latest updates, expert tips, and industry insights to shape your learning journey in automotive and engineering fields.
                </p>
                {/* Search Bar */}
                <div className="w-full max-w-3xl mb-12">
                    <div className="flex items-center rounded-lg bg-gray-100 border border-gray-300 p-3 shadow-sm">
                        <svg
                            className="w-5 h-5 text-gray-500 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none"
                            aria-label="Search blog posts"
                        />
                    </div>
                </div>
                {/* TRENDING TOPICS SECTION */}
                <div className="w-full max-w-3xl px-4 sm:px-0 mb-8">
                    <h2 className="text-xl font-semibold text-blue-900 mb-6">
                        Trending Topics
                    </h2>

                    {/* Topic Filter Buttons  */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {topicButtons.map((topic, index) => (
                            <button // <--- The JSX button element is inserted here
                                key={index}
                                className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border-2
                    ${topic === 'All'
                                        ? ' bg-[#45D2FF] text-white'
                                        : 'border-gray-200 bg-white-200 text-gray-700 hover:bg-gray-200'}
                `}
                            >
                                {topic}
                            </button>
                        ))}
                    </div>

                    {/* Blog Post List  */}

                    <div className="space-y-8">
                        {blogPosts.map((post, index) => (
                            <div
                                key={index}
                                className="flex border-b border-gray-200 pb-8 last:border-b-0 last:pb-0"
                            >
                                {/* Post Content (Left side) */}
                                <div className="flex-grow pr-6">
                                    <div className="flex items-center text-sm mb-2">
                                        <div className="profile w-8 h-8 rounded-full bg-gray-300 mr-3" />
                                        <span className="font-medium text-[#101359] mr-2">
                                            {post.author}
                                        </span>
                                        <span className="text-gray-500 text-xs">{post.date}</span>
                                    </div>

                                    {/* 👇 Redirect link for the title */}
                                    <Link href={`/blog-details/${post.slug}`}>
                                        <h3 className="text-med font-semibold text-[#333333]] hover:text-[#45D2FF] cursor-pointer transition-colors">
                                            {post.title}
                                        </h3>
                                    </Link>

                                    <p className="text-[#8C8C8C] leading-relaxed text-sm mt-2 mb-4">{post.excerpt}</p>

                                    <div className="flex items-center space-x-4 text-xs font-medium text-gray-500">
                                        <span className="px-3 py-1 border-1 border-[#E5E5E5] text-xxs bg-white rounded-full text-[#808080]gap-8">
                                            {post.tag}
                                        </span>
                                        <span className="flex items-center text-[#101359]">
                                            <svg
                                                className="w-2 h-4 mr-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>

                                <div className="trending hidden sm:block w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-lg flex-shrink-0" />
                            </div>
                        ))}
                    </div>
                    {/* END*/}


                </div>
            </div>
        </section>
    )
}

export default BlogInsights;