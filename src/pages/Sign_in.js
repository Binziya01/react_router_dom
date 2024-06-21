import React from 'react'
import Logo from '../components/Images/Logo.png'
import { Link } from 'react-router-dom'


const Sign_in = () => {
  return (
    <section>
        <div className="flex flex-col h-screen justify-center items-center p-6 rounded-md sm:p-10 dark:text-gray-50 dark:bg-gray-800">
		<Link to="/" className='absolute left-0 top-0'>
		<img src={Logo} alt="" className='w-56 h-56'/>
		</Link>
		<div className="mb-8 text-center">
	
	<h1 className="my-3 text-4xl font-bold">Sign in</h1>
	
		<p className="text-sm dark:text-gray-400">Sign in to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="q8kxqn" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#v" className="text-xs hover:underline dark:text-gray-4-00">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="ce7pk" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-full dark:bg-[#58C4DC] dark:text-gray-50" fdprocessedid="y7amz">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<Link to="/signup" rel="noopener noreferrer" href="#v" className="hover:underline dark:text-red-600">Sign up</Link>.
			</p>
		</div>
		
	</form>
		
		
</div>
    </section>
  )
}

export default Sign_in