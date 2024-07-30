import React from 'react';

const HomePage = () => {
	return (
		<>
			<div className='min-h-screen flex flex-col'>
				<header className='bg-blue-600 text-white py-4'>
					<h1 className='text-3xl text-center'>My Portfolio</h1>
				</header>
				<main className='flex-grow container mx-auto p-4'>
					<section id='about' className='my-8'>
						<h2 className='text-2xl font-bold'>About Me</h2>
						<p className='mt-2'>This is a brief description about myself.</p>
					</section>
					<section id='projects' className='my-8'>
						<h2 className='text-2xl font-bold'>Projects</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
							<div className='bg-white p-4 shadow-lg'>
								<h3 className='text-xl font-semibold'>Project 1</h3>
								<p className='mt-2'>Description of Project 1.</p>
							</div>
							<div className='bg-white p-4 shadow-lg'>
								<h3 className='text-xl font-semibold'>Project 2</h3>
								<p className='mt-2'>Description of Project 2.</p>
							</div>
							<div className='bg-white p-4 shadow-lg'>
								<h3 className='text-xl font-semibold'>Project 3</h3>
								<p className='mt-2'>Description of Project 3.</p>
							</div>
						</div>
					</section>
					<section id='contact' className='my-8'>
						<h2 className='text-2xl font-bold'>Contact</h2>
						<form className='mt-4'>
							<div className='mb-4'>
								<label className='block text-gray-700'>Name</label>
								<input
									className='w-full p-2 border border-gray-300 rounded'
									type='text'
									placeholder='Your Name'
								/>
							</div>
							<div className='mb-4'>
								<label className='block text-gray-700'>Email</label>
								<input
									className='w-full p-2 border border-gray-300 rounded'
									type='email'
									placeholder='Your Email'
								/>
							</div>
							<div className='mb-4'>
								<label className='block text-gray-700'>Message</label>
								<textarea
									className='w-full p-2 border border-gray-300 rounded'
									placeholder='Your Message'
								></textarea>
							</div>
							<button
								className='bg-blue-600 text-white py-2 px-4 rounded'
								type='submit'
							>
								Send
							</button>
						</form>
					</section>
				</main>
				<footer className='bg-gray-800 text-white py-4 text-center'>
					<p>&copy; 2024 My Portfolio. All rights reserved.</p>
				</footer>
			</div>
		</>
	);
};

export default HomePage;
