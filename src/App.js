import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';
let buildNum = 148;

class App extends React.Component {
  listData = this.props.data;
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      listData: this.listData
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
})
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }
  addnewbuilding(newbuilding){
    buildNum = buildNum + 1;
  const newinput = {
    id: (buildNum),
    code: newbuilding[0],
    name: newbuilding[1],
    coordinates: {
      latitude: parseFloat(newbuilding[2]),
      longitude: parseFloat(newbuilding[3])
    },
    address: newbuilding[4]
  }
    this.listData.push(newinput);
      this.setState({
      newdata: this.listData
    })
  }
  dataRemove(id) {
    this.listData.splice(id - 1, 1);

    buildNum--;

    for(var i = id - 1; i < buildNum; i++){
      this.listData[i].id = this.listData[i].id - 1;
    }

    this.setState({data: this.listData});
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <AddBuilding
        addnewbuilding = {this.addnewbuilding.bind(this)}
        />
        <RemoveBuilding
        selectedBuilding = {this.state.selectedBuilding}
        dataRemove = {this.dataRemove.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
