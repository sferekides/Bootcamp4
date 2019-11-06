import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {listData, buildinginfo} = this.props;
		if ((listData[buildinginfo - 1]) && (listData[buildinginfo - 1].coordinates)){
		return (
			<div>
				<p>
					{'Address: '}
					{listData[buildinginfo - 1].address}
					{', Latitude: '}
					{listData[buildinginfo - 1].coordinates.latitude.toString()}
					{', Longitude: '}
					{listData[buildinginfo - 1].coordinates.longitude.toString()}
				</p>
			</div>
		);
		}
		else if (listData[buildinginfo - 1]){
			return(
			<div>
				<p>
					{' '}
					{listData[buildinginfo - 1].address}
				</p>
			</div>
			);
		}
		else {
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
		}
	}
}
export default ViewBuilding;