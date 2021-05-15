function TableBody ( props ) {
  return (
		<tbody>
			{props.rows.map((row, index) => (
				<tr key={index} className="py-0">
          <th scope="row" className="text-sm align-middle">
            <i className="text-xl text-secondary fas fa-user-tag"></i>
							<b className="text-secondary">{index + 1}</b>
					</th> 
					{Object.keys(row).map((key, idx) => {
						if (key === 'Picture') {
							return (
								<td
									key={idx}
									className="align-middle text-secondary py-1"
								>
									<img
										src={row[key]}
										alt="img"
										className="rounded-circle w-50 py-3"
									/>
								</td>
							);
						} else {
							return (
								<td
									key={idx}
									className="align-middle text-secondary py-1"
								>
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

