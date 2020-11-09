import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers, setCurrentPage,
    toggleFollowingProgress, unfollow
} from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";
import Paginator from "../common/Paginator/Paginator";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            <Paginator currentPage={this.props.currentPage}
                       totalItemsCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}/>

            { this.props.isFetching ? <Preloader /> :
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPag={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }

}


export default compose(
    connect(mapStateToProps,
        {follow, unfollow,
            setCurrentPage,toggleFollowingProgress, requestUsers})
    //withAuthRedirect
)(UsersContainer)