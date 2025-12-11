'use client';
import React from 'react';
import blogPosts from '@/components/layout/BlogPosts';
import ArticleCourses from '@/pages/blog/Article';
import Partner from '@/pages/home/Partner';
import Banner from '@/pages/blogdetails/Banner';



export default function BlogPage() {
 
  return (
    <main>
      <Banner/>
      <ArticleCourses/>
      <Partner/>

    </main>

  );
}
