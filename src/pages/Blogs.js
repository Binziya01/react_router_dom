import React from 'react'
import Layout from '../components/Layout/Layout'
import image8 from '../images/image8.gif'
import image9 from '../images/image9.png'
import image10 from '../images/image10.png'
import image11 from '../images/image11.png'
import image12 from '../images/image12.jpeg'
import image13 from '../images/image13.jpg'
import image14 from '../images/image14.avif'

const Blogs = () => {
  return (
    <Layout>
        <section className="bg-cyan-200 dark:text-gray-800 py-24">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#v" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={image8} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">React Router</h3>
				<span className="text-xs dark:text-gray-600">February 19, 2021</span>
				<p>The react-router package is the heart of React Router and provides all the core functionality for both react-router-dom and react-router-native.</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#v" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={image9} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">React-Router Hooks</h3>
					<span className="text-xs dark:text-gray-600">January 21, 2021</span>
					<p>React-Router is a popular React library that is heavily used for client-side routing and offers single-page routing. It provides various Component APIs( like Route, Link, Switch, etc.) that you can use in your React application to render different components based on the URL pathnames on a single page.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#v" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={image10} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">React useState Hook</h3>
					<span className="text-xs dark:text-gray-600">January 22, 2021</span>
					<p>The useState hook is a powerful addition to React, introduced in version 16.8. It allows you to manage state within functional components without the need for class-based components</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#v" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={image11} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">ReactJS useEffect Hook</h3>
					<span className="text-xs dark:text-gray-600">January 23, 2021</span>
					<p>React useEffect hook handles the effects of the dependency array. The useEffect Hook allows us to perform side effects on the components. fetching data, directly updating the DOM and timers are some side effects. It is called every time any state if the dependency array is modified or updated.

</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#v" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={image12}/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">ReactJS useReducer Hook</h3>
					<span className="text-xs dark:text-gray-600">January 24, 2021</span>
					<p>The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.

The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#v" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={image13} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">ReactJS useLayoutEffect Hook</h3>
					<span className="text-xs dark:text-gray-600">January 25, 2021</span>
					<p>The React JS useLayoutEffect works similarly to useEffect but rather works asynchronously like the useEffect hook, it fires synchronously after all DOM loading is done loading. This is useful for synchronously re-rendering the DOM and also to read the layout from the DOM. But to prevent blocking the page loading, we should always use the useEffect hook.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#v" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={image14} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">ReactJS useContext Hook</h3>
					<span className="text-xs dark:text-gray-600">January 26, 2021</span>
					<p>Context provides a way to pass data or state through the component tree without having to pass props down manually through each nested component. It is designed to share data that can be considered as global data for a tree of React components, such as the current authenticated user or theme(e.g. color, paddings, margins, font-sizes).</p>
				</div>
			</a>
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600" fdprocessedid="hxbsbo">Load more posts...</button>
		</div>
	</div>
</section>
    </Layout>
  )
}

export default Blogs