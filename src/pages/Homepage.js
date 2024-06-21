import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import image7 from '../images/image7.avif'
const Homepage = () => {
  return (
    <Layout> 
        <section>
	<div className="bg-[#58C4DC]">
		<div className="container flex flex-col items-center px-4 py-28 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">React Router DOM</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">The react-router-dom package contains bindings for using React Router in web applications. Please see the Getting Started guide for more information on how to get started with React Router</p>
			<div className="flex flex-wrap justify-center">
				<Link to="/getstarted" type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-300" fdprocessedid="1iwot">Get started</Link>
				<Link to="/learnmore" type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50" fdprocessedid="9uod8a">Learn more</Link>
			</div>
		</div>
	</div>
	<img src={image7} alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
</section>
    </Layout>
  )
}

export default Homepage