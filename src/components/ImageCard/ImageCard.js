import React from "react";
import "./ImageCard.css";

const ImageCard = (props) => (
	<div id="allImages">
		{props.images.map(item => (
			<div className='image-div' key={item.id}>
				<img 
					className="images"
					key={item.id} 
					src={item.link} 
				/>
			</div>
		))}
	</div>
);

export default ImageCard;