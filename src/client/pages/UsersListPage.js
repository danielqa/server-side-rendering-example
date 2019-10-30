import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../actions';

class UsersListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    render() {
        return (
            <div>
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
                <Link to="/">Go Back</Link>
            </div>
        );
    }
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

function mapStateToProps(state) {
    return { users: state.users };
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
};