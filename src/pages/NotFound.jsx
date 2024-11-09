import notFoundGraphic from "../assets/graphics/404.svg";
import blobShape from "../assets/graphics/bottom_blob_shape.svg";
export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-primary">
			<div>
				<img
					src={notFoundGraphic}
					alt="page not found graphic"
					className="w-1/2"
				/>
				<p className="title-heading text-light font-bold mb-4">
					Oops! Something went wrong.
				</p>
				<p className="body-text text-light">
					Please try again later or contact support.
				</p>
			</div>
			<img
				src={blobShape}
				alt="blob shape"
				className="absolute bottom-[-5em] left-0 w-full"
			/>
		</div>
	);
}
