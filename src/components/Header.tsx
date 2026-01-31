import React from "react";
import type { ReactNode } from "react";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			[elemName: string]: any;
		}
	}
}

interface Props {
	title: string;
}

const Header = ({ title }: Props) => {
	return (
		<div className="mx-auto max-w-7xl p-4 py-8">
			<a href="/">
				<h1 className="mb-4">
					<span className="font-extrabold text-transparent text-4xl bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
						{title}
					</span>
				</h1>
			</a>
		</div>
	);
};

export default Header;
