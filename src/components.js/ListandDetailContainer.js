import React, { Component } from 'react'

class ListandDetailContainer extends Component {

    state = {
        members: []
    }

    fetchData = async url => {
        const response = await fetch(url)
        return response.json()
    }

    async componentDidMount() {
        const members = await this.fetchData('')
        this.setState({ members })
    }

    render() {
        return (
            <div className="l-d-container">

            </div>
        )
    }
}

export default ListandDetailContainer
