import React from 'react';

export default function List(props) {
	return (
		<div className='mx-auto' style={{margin: '60px 0 0 0', width: '50%'}}>
			<div className='card'>
				{ props.items.map((item, index) => (
					<div key={index} className='card' style={{margin: '20px'}}>{item.name}</div>))} 
			</div>
		</div>
	)
}