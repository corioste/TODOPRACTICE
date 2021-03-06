import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshList, addTodo } from "./Item.actions";


class ItemList extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      text: "TRY",
      id: null
    };
    
  }

  componentDidMount() {
    this.props.refreshList()
    this.setState({id: this.props.items.length})
   
    
  }
  onChange = event => {
    this.setState({ text: event.target.value });
  }
  addClick = event => {
    this.setState({id: this.props.items.length})
    var data = {
      id: this.state.id,
      text: this.state.text
    }
    addTodo(data)
    this.props.refreshList()
    
    console.log(this.state.id)
   
  }
  getTodoID(){
    
  }
  render() {
    return (
      <div>
  
          <div>
            <div>
              <label htmlFor="title">CRUD</label>
            </div>
            <input
              type="text"
              id="text"
              value={this.text}
              onChange={this.onChange}
            />
            <button onClick = {this.addClick}>ADD TODO</button>
          </div>
   
        <ul>
          {this.props.items.map(item => (
          
              <div key={item.id}>
                {item.name}
                <button onClick = { ()=>{console.log(item)} }>Delete</button> 
                <button onClick = { ()=>{console.log(item.id)} }>Update</button> 
              </div>
              
            
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
