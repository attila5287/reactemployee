import React from 'react';
function TableBody ( props ) {
  return (
		<tbody>
			{props.rows.map((row, index) => (
				<tr key={index}>
					<th scope="row" className="text-sm">
						<i>
							<b>{index + 1}</b>
						</i>
					</th>
          { Object.keys( row ).map( ( key, idx ) => {
            if ( key == 'Picture' )
            {
              return (
								<td key={idx} className="align-items-center">
									<img src={row[key]} alt="img" className="rounded-2xl" />
								</td>
							);
              
            } else
            {
              return (
								<td key={idx} className="align-items-center">
									{row[key]}
								</td>
							);
              
            }
          })}
				</tr>
			))}
		</tbody>
	);
}
export default TableBody;

