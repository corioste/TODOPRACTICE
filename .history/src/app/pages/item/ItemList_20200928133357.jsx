import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshList } from "./Item.actions";


class ItemList extends Component {
  componentDidMount(){
    this.props.refreshList()
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <label htmlFor="title">Todo App</label>
            </div>
            <input
              type="text"
              id="text"
              value={text}
              placeholder="Todo"
              onChange={this.handleChange}
            />
            <button type="submit">SAVE</button>
          </div>
        </form>
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.name}</li>
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
