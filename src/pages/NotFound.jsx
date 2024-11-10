import notFoundGraphic from "../assets/graphics/404.svg";
import blobShape from "../assets/graphics/bottom_blob_shape.svg";
import { Link } from "react-router-dom";
export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-primary ">
			<div className="flex flex-col items-center justify-center h-screen bg-primary ">
				<p className="title-heading text-light font-bold mb-4">
					Oops! Wrong turn.
				</p>
				<p className="body-text text-light mb-3">
					The page you are looking for does not exist.
				</p>
				<img
					src={notFoundGraphic}
					alt="page not found graphic"
					className="w-1/2"
				/>
				<Link
					to="/account"
					className=" mt-3 label-text bg-secondary py-2 rounded px-6 text-lightest card-shadow "
				>
					Back to Site
				</Link>
			</div>
			<img
				src={blobShape}
				alt="blob shape"
				className="absolute bottom-[-5em] left-0 w-full"
			/>
		</div>
	);
}
