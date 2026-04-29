import { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import classNames from "classnames";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="padding-x w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt="logo" className="w-10 h-10 object-contain" />
					<p className="text-white-100 text-[18px] font-bold cursor-pointer flex">
						Joshua&nbsp;<span className="sm:block hidden">| Figueroa</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={classNames(
								"hover:text-white-100 text-[18px] font-medium cursor-pointer text-secondary",
								{
									"!text-white-100": active === link.title,
								}
							)}
							onClick={() => setActive(link.title)}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle((t) => !t)}
					/>
					<div
						className={classNames(
							"p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl hidden",
							{ "!flex": toggle }
						)}
					>
						<ul className="list-none flex justify-end items-start flex-col gap-4">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={classNames(
										"font-poppins font-medium cursor-pointer text-[1rem] text-secondary",
										{ "!text-white-100": active === link.title }
									)}
									onClick={() => {
										setActive(link.title);
										setToggle(false);
									}}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
