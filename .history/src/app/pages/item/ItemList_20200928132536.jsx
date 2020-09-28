import React, { Components } from "react";
import { connect } from "react-redux";
import { refreshList } from "./Item.actions";

class ItemList extends Components {

  constructor(props){
    super(props);
   
  }
  render(){
    return (
      <div>
        <button>Refresh</button>
        <ul>
          {this.props.items.map(item => (
            // <li key={item.id}>{item.name}</li>
          ))}
        </ul>
    </div>
    );
  }
}
const mapStateToProps = state => ({
  items: state.items.items
});

const mapDispatchToProps = dispatch => ({
  refreshList: () => dispatch(refreshList)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
