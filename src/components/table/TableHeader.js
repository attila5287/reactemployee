const TableHeader = ( props ) => {
  //  console.log(`props`, props)
   return (
			<thead className="table-primary">
				<tr className="py-0">
					<th className="align-middle">
						<i className="text-2xl text-secondary fab fa-react fa-spin bg-info p-1 rounded-3xl"></i>
					</th>

					{props.headings.map((th, index) => (
						<th className="align-middle" key={index}>
							<button
								className="btn btn-sm btn-outline-info px-4 py-0 add-anime my-0"
								type="button"
								data-sortby={th}
								onClick={props.handleSortBy}
							>
								<span
									data-sortby={th}
									className="text-2xl text-nowrap text-right  text-secondary py-0"
								>
									<i data-sortby={th} className={props.icons[th]}></i>
									<i
										data-sortby={th}
										className="fas fa-sort mx-2 text-reg text-secondary"
									></i>
								</span>
							</button>
							<br />
							<span className="d-none text-secondary opac-30">{th}</span>
						</th>
					))}
				</tr>
			</thead>
		);
}
export default TableHeader;
