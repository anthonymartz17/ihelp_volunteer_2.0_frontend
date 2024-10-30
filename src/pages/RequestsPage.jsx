import { useState, useEffect } from "react";

import RequestCard from "../componets/RequestCard";
import FiltersMenu from "../componets/FiltersMenu";
import blobShape from "../assets/graphics/bottom_blob_shape.svg";
import logo_white from "../assets/logo/white_bg_logo.svg";

import { useRequests } from "../hooks/useRequets";
/*
task status:
1. open
2. assigned
3. in progress
4. completed
5. cancelled
*/


export default function RequestsPage() {
	const { requests, isLoading, error } = useRequests();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className=" relative bg-primary">
			<div className="flex justify-between items-center  px-4 pb-2 ">
				<h1 className="title-heading text-lightest ">Requests</h1>
				{!isLoading && !error && (
					<div
						onClick={() => setIsOpen(true)}
						className=" text-dark flex  gap-1 items-center bg-light w-[6em] rounded-lg p-2 input-shadow cursor-pointer"
					>
						<span className="material-symbols-outlined ">tune</span>
						<span className="label-text ">Filters</span>
					</div>
				)}
			</div>
			{isLoading && (
				<div className="flex justify-center pt-40 h-screen">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-light"></div>
				</div>
			)}
			{error && (
				<div className="flex justify-center items-center h-screen">
					<div className="text-center">
						<p className="text-2xl font-bold mb-4">
							Oops! Something went wrong.
						</p>
						<p className="text-lg">
							Please try again later or contact support.
						</p>
					</div>
				</div>
			)}
			{!isLoading && !error && (
				<ul className="grid grid-cols-1 md:grid-cols-2  gap-4 overflow-y-auto rounded-lg p-4 h-[80vh] ">
					{requests.map((request, index) => (
						<li key={request.id}>
							<RequestCard request={request} index={index} />
						</li>
					))}
				</ul>
			)}
			<FiltersMenu isOpen={isOpen} onSetIsOpen={setIsOpen} />
			{/* <div className="relative"> */}
			<img src={blobShape} alt="graphic blob" className=" w-full" />
		</div>
	);
}
