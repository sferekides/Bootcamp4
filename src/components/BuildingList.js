import React from 'react';

function BuildingList(props) {
		
	//console.log('This is my directory file', this.props.data);
	const { data, filterText } = props;
	//set building list = to only select files that you want to look at
	const buildingList = data
	.filter(name =>
		{
			//removing buildings that are not within the search criteria
			return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
		})
	.map(directory => {
		return (
			<tr key={directory.id}>
				<td>{directory.code} </td>
				<td> {directory.name} </td>
			</tr>
		);
	});

	return <div>{buildingList}</div>;
	
}
export default BuildingList;
