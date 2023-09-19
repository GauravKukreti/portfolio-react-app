import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import PHP from "../assets/php.png";
import ReactImg from "../assets/react.png";
import CPP from "../assets/cpp.png";
import SQL from "../assets/mysql.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/nodejs.png";
import Mongo from "../assets/mongodb.png";
import Express from "../assets/expressjs.png";

const Skills = () => {
	return (
		<div
			name="skills"
			className="w-full md:h-screen bg-[#0a192f] text-gray-300"
		>
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
						Skills
					</p>
					<p className="py-4">// These are the technologies I've worked with</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
						<p className="my-4">HTML</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
						<p className="my-4">CSS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={Javascript}
							alt="Javascript icon"
						/>
						<p className="my-4">JavaScript</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-[35px]">
						<img className="w-20 mx-auto" src={PHP} alt="PHP icon" />
						<p className="my-4">PHP</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
						<p className="my-4">GITHUB</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={CPP} alt="C++ icon" />
						<p className="my-4">C/C++</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Tailwind} alt="TailWind icon" />
						<p className="my-4">TAILWIND</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-[20px]">
						<img className="w-20 mx-auto" src={SQL} alt="MySQL icon" />
						<p className="my-4">MySQL</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-[20px]">
						<img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
						<p className="my-4">MONGO</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-[20px]">
						<img
							className="w-20 mx-auto my-7"
							src={Express}
							alt="Express icon"
						/>
						<p className="my-4">Express</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto my-5"
							src={ReactImg}
							alt="REACT icon"
						/>
						<p className="my-4">REACT JS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-[20px]">
						<img className="w-20 mx-auto" src={Node} alt="NodeJS icon" />
						<p className="my-4">NODE JS</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
