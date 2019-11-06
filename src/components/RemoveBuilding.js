import React from 'react';

class RemoveBuilding extends React.Component {

    deleteAction(){
        this.props.dataRemove(this.props.selectedBuilding);
    }

    render() {
        return (
            <div>
                <button onClick={this.deleteAction.bind(this)}>
                    Delete
                </button>
            </div>
        );
    }
}
export default RemoveBuilding;