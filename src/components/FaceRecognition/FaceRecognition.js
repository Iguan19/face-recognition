import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, boxes }) => {
  let items = [];
  for (let i = 0; i < boxes.length; i++) {
     items.push(
     	<div 
     	className='bounding-box' 
     	key={i} 
     	style={{top: boxes[i].topRow, right: boxes[i].rightCol, bottom: boxes[i].bottomRow, left: boxes[i].leftCol}}
     	>
     	</div>)
   }

	return(
		<div className='center na'>
			<div className='absolute mt3'>
				<img id='inputimage' alt='' src={imgUrl} width='500px' height='auto' />
				<div>
					{items}
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;