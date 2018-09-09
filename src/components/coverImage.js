import React from 'react';

const coverImage = props => {
	console.log(props.currentRadio)
	return (
		<img className="coverImage" src={`/images/${props.currentRadio}.png`} alt="Radio Logo"/>);
};

export default coverImage;
