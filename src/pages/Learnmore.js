import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Learnmore = () => {
  return (
    <Layout> 
        <section>
	<div className="bg-[#58C4DC] ">
		<div className="container flex flex-col items-center px-4 py-28 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-20 dark:text-gray-50">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">React Router Dom</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">The react-router-dom package contains bindings for using React Router in web applications. Please see the Getting Started guide for more information on how to get started with React Router</p>
			<div className="flex flex-wrap justify-center">
				<Link to="/getstarted" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-500 dark:text-white hover:bg-gray-300" fdprocessedid="1iwot">Get started</Link>
				
			</div>


            <div className='flex flex-col-reverse lg:flex-row gap-8 mt-16'>
        <div className='bg-white rounded-md w-[350px] py-4 px-2'>
        <h1 className='text-green-700 font-semibold text-xl mt-5'>NPM React Router Dom</h1>
            <p className='text-black text-lg mt-6'>React Router DOM is a powerful routing library for React applications that enables navigation and URL routing. In this article, we’ll explore React Router DOM in-depth, covering its installation, basic usage, advanced features, and best practices.</p>
        </div>
        <div className='bg-white rounded-md w-[350px] py-4 px-5'>
        <h1 className='text-green-700 font-semibold text-xl mt-5'>React Router DOM</h1>
            <p className='text-black text-lg mt-6'>React Router DOM is a collection of navigational components for React applications that allows developers to declaratively define the application’s UI based on the URL. It provides a way to synchronize the UI with the URL, enabling client-side routing in single-page applications (SPAs).</p>
        </div>
        <div className='bg-white rounded-md w-[350px] py-4 px-5'>
        <h1 className='text-green-700 font-semibold text-xl mt-5'>React Router</h1>
            <p className='text-black text-lg mt-6'>React Router, is your essential tool for building single-page applications (SPAs). Imagine users effortlessly transitioning between sections, experiencing your website like a fluid app and React Router makes it possible, paving the way for a delightful user experience and a modern web presence. A React website shouldn’t mean a Large page reloads every time users navigate. </p>
            
        </div>
    </div>
    <div className='mt-20 w-full flex justify-center'>
        <div className='flex flex-col gap-6'>
        <h1 className='text-white text-2xl font-semibold'>Steps to Implement React-router-dom</h1>
        <p className='text-lg text-white'>Step 1: Create a React application using the following command:</p>
        <pre className='bg-gray-200 rounded-md h-16 py-4'>
            <span className='text-black'>npx create-react-app foldername</span>
        </pre>
        <p className='text-lg text-white'>Step 2: After creating your project folder i.e. foldername, move to it using the following command:</p>
        <pre className='bg-gray-200 rounded-md h-16 py-4'>
            <span className='text-black'>cd foldername</span>
        </pre>
        <p className='text-lg text-white'>Step 3: Next, install react-router-dom using the following command</p>
        <pre className='bg-gray-200 rounded-md h-16 py-4'>
            <span className='text-black'>npm install react-router-dom</span>
        </pre>
        
        
        
        
        </div>
        
    </div>
		</div>
        
	</div>
   
	<img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
</section>
    </Layout>
  )
}

export default Learnmore