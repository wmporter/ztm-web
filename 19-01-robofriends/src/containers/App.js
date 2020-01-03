import React, { Component } from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }))
    }
    render() {
        const filteredRobots = this.state.robots.filter(
            robot => robot.name.toLowerCase().includes(this.state.searchField))
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }
    onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase()
        this.setState({ searchField })
    }
}

export default App
