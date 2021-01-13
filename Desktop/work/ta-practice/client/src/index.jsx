import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import People from './components/People.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      people: []
    }
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.getFakeData = this.getFakeData.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  updateAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  addPerson(e) {
    $.ajax({
      method: 'POST',
      url: '/data',
      data: {
        name: this.state.name,
        age: this.state.age
      },
      success: (data) => {
        this.setState({
          people: data
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
    e.preventDefault();
  }

  getFakeData(e) {
    $.ajax({
      method: 'GET',
      url: '/fake_data',
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
    e.preventDefault();
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/data',
      success: (data) => {
        this.setState({
          people: data
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render () {
    return (
      <div>
        <h1>People Adder</h1>
        <button onClick={this.getFakeData}>Get Fake Data</button>
        <form id="person-submit-form">
          <p>
            <label id="name-label" htmlFor="name">Enter your name: </label>
            <input id="name" type="text" onChange={this.updateName}></input>
          </p>
          <p>
            <label id="age-label" htmlFor="age">Enter your age: </label>
            <input type="number" onChange={this.updateAge}></input>
          </p>
          <input type="submit" onClick={this.addPerson}></input>
        </form>
        <People people={this.state.people}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
