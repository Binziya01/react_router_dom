import React from 'react'
import Layout from '../components/Layout/Layout'

const Contacts = () => {
  return (
    <Layout>
        <div className="grid max-w-screen-2xl grid-cols-1 gap-8 px-8 py-32 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-[#ECFB5C] dark:text-gray-800">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			
		</div>
		<img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="border-black border-2 w-full p-3 rounded dark:bg-gray-100" fdprocessedid="0vaq6r" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="border-black border-2 w-full p-3 rounded dark:bg-gray-100" fdprocessedid="fl6tmy" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="border-black border-2 w-full p-3 rounded dark:bg-gray-100"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#58C4DC] dark:text-gray-50" fdprocessedid="f36kfw">Send Message</button>
	</form>
</div>
    </Layout>
  )
}

export default Contacts