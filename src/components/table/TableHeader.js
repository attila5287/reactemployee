const TableHeader = ( props ) => {
  //  console.log(`props`, props)
   return (
			<thead>
				<tr>
					<th className="bg-info align-middle">
						<i className="text-4xl fab fa-react fa-spin m-0 text-light"></i>
					</th>

					{props.headings.map((th, index) => (
						<th className="bg-info text-light" key={index}>
							<button className="btn btn-primary py-2" type="button" name={th} onClick={props.handleSortBy}>
								<span className="text-nowrap text-right">
									<i className={props.icons[th]}></i>
									<i className="fas fa-sort text-lg mx-1"></i>
								</span>
							</button>
							<br />
							<span className="text-secondary opac-30">{th}</span>
						</th>
					))}
				</tr>
			</thead>
		);
}
export default TableHeader;
