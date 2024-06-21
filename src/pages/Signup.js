import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Images/Logo.png'

const Signup = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center rounded-md sm:p-10 dark:text-gray-50 dark:bg-gray-800">
	  <Link to="/" className='absolute left-0 top-0'>
		<img src={Logo} alt="" className='w-56 h-56'/>
		</Link>
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign up</h1>
		<p className="text-sm dark:text-gray-400">Create your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
    <div>
				<label htmlFor="email" className="block mb-2 text-sm">Username</label>
				<input type="email" name="email" id="email" placeholder="leroy" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="bonlr" />
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="bonlr" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="gel1yj" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Confirm Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="gel1yj" />
		
		</div>
		</div>
		
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-full dark:bg-[#58C4DC] dark:text-gray-50" fdprocessedid="taabys">Sign up</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
				<Link to="/signin" rel="noopener noreferrer" href="#v" className="hover:underline dark:text-red-600">Sign in</Link>.
			</p>
			
		</div>
	</form>
</div>
    </section>
  )
}

export default Signup