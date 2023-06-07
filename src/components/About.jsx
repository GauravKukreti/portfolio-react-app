import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>Hi. I'm Gaurav, nice to meet you. Please take a look around.</p>
					</div>
					<div>
						<p>
							I specialize in <b>C++ programming</b> and possess in-depth
							knowledge of its core concepts and best practices. In addition, my
							skill set extends to <b>full-stack development</b>, allowing me to
							handle both the frontend and backend aspects of web applications
						</p>
					</div>
				</div>
				<div className="lg:hidden">
					<div className="max-w-[1000px] w-full grid grid-cols-1 gap-8">
						<div className="pt-8 pt-10 pl-4">
							<p className="text-2xl flex justify-center items-center md:text-4xl font-bold inline border-b-4 border-pink-600">
								Profile Links
							</p>
						</div>
						<div></div>
					</div>
					<div className="max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4">
						<div className="text-2xl md:text-4xl font-bold">
							<div className="flex flex-col items-center justify-center">
								<a
									href="https://github.com/GauravKukreti"
									target="_blank"
									className=" flex flex-row pb-3 mb-3"
								>
									GitHub <FaGithub size={40} className="mx-4" />
								</a>
								<a
									href="https://www.linkedin.com/in/gauravkukreti02/"
									target="_blank"
									className=" flex flex-row pb-3 mb-3"
								>
									LinkedIn <FaLinkedin size={40} className="mx-4" />
								</a>
								<a
									href="https://drive.google.com/drive/folders/1n0nx7VFUgS6JOALm3JWkF-uhh_Rm6o2n?usp=sharing"
									target="_blank"
									className=" flex flex-row pb-3 mb-3"
								>
									Resume <BsFillPersonLinesFill size={40} className="mx-4" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
