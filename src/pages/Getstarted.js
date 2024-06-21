import React from 'react'
import Layout from '../components/Layout/Layout'

const Getstarted = () => {
  return (
    <Layout>
    <div className="max-w-screen-2xl px-5 py-32 mx-auto rounded-lg lg:h-[800px] md:px-12 lg:px-16 xl:px-32 dark:bg-[#111111]">
    <h1 className='text-5xl text-[#58C4DC] font-semibold flex justify-center'>React Router DOM</h1>
    <p className='text-white text-xl tracking-wider mt-7'>React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.

<br/>The major advantage of react-router is that the page does not have to be refreshed when a link to another page is clicked, for example. Moreover, it is fast, very fast compared to traditional page navigation. This means that the user experience is better and the app has overall better performance.<br/>The Route component takes 2 parameters. The first one is the path that will be in the url and the second is the component that will be displayed if the current URL matches the path in the first parameter.</p>
	<h2 className='text-2xl font-bold text-[#F9F4DA] mt-5'>What is React Router?</h2>
  <p className='text-xl text-white tracking-wider mt-4'>First created in 2014, React Router is a declarative, component based, client and server-side routing library for React. Just as React gives you a declarative and composable API for adding to and updating application state, React Router gives you a declarative and composable API for adding to and updating the user's navigation history.

If you're new to React, it may come as a surprise to know that a router isn't baked into the library itself, but that's foundational to React's ethos. React focuses on giving you UI primitives for building your application, and nothing more.

Poetically, React Router follows a similar ethos, except instead of UI primitives, they give you routing primitives. To align with React, naturally, these "routing primitives" are really just a collection of React components and Hooks.</p>
</div>

    </Layout>
  )
}

export default Getstarted