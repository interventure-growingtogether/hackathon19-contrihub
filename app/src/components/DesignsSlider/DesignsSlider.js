import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

export default function DesignsSlider({ items }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{items.map(item => (
				<div key={item.id}>
					<img src={item.src}></img>
				</div>
			))}
		</Slider>
	);
}

DesignsSlider.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			src: PropTypes.string.isRequired,
		})
	).isRequired,
};
