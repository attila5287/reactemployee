function TableBody ( props ) {
  return (
		<tbody>
			{props.rows.map((row, index) => (
				<tr key={index}>
					<th scope="row" className="text-sm align-middle">
							<b className="px-2 py-1 rounded-3xl bg-secondary text-dark">{index + 1}</b>
					</th> 
					{Object.keys(row).map((key, idx) => {
						if (key == 'Picture') {
							return (
								<td
									key={idx}
									className="align-middle text-secondary text-sm py-1"
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
									className="align-middle text-secondary text-sm py-1"
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

