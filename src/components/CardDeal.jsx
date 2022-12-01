import React from 'react';
import { card } from '../img';
import styles, { layout } from '../css/tailwind';
import Button from './Button';

function CardDeal({ space }) {
	return (
		<section className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Find a better card deal { space }
					in few easy steps.
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet 	eget mauris tortor.ç Aliquet ultrices ac, ametau.
				</p>
				<Button styles="mt-10"/>
			</div>

			<div className={layout.sectionImg}>
				<img src={card} alt="Card" className="w-[100%] h-[100%]"/>
			</div>
		</section>
	)
}
export default CardDeal;