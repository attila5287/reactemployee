import React from 'react'



const TableHeader = ( props ) => {
  //  console.log(`props`, props)
   return (
			<thead>
				<tr>
					<th className="bg-info">
						<h3 className="fas fa-users m-0 text-light"></h3>
					</th>

					{props.headings.map((th, index) => (
						<th className="bg-info text-lg" key={index}>
							{th}
						</th>
					))}
				</tr>
			</thead>
		);
}
export default TableHeader;
