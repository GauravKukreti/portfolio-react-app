import React from "react";

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
		>
			<form
				action="https://getform.io/f/02700152-731b-47f1-9cfe-c81541a73142"
				method="POST"
				className="flex flex-col max-w-[1000px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
						Contact
					</p>
					<p className="text-gray-300 py-4">
						// Submit the form below or shoot me an email -{" "}
						<span className="text-[#b638b4] text-2xl">
							gauravkukreti02@gmail.com
						</span>
					</p>
				</div>
				<input
					className="bg-[#ccd6f6] p-2"
					type="text"
					name="name"
					placeholder="Name"
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					type="email"
					name="email"
					placeholder="Email"
				/>
				<textarea
					name="message"
					className="bg-[#ccd6f6] p-2"
					placeholder="Message"
					rows="10"
				></textarea>
				<button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Contact;
