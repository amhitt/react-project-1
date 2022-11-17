import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { usersAPI } from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() { 
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
          .then(data => {

              this.props.toggleIsFetching(false)  
              this.props.setUsers(data.items);
              this.props.setTotalUsersCount(data.totalCount);
          });
    }
  
    onPageChange = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true)

      usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then((data) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
        })
    }
  
    render() {
  
      return ( <>
      {this.props.isFetching ? <Preloader/> : null} 
        <Users
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          usersData={this.props.usersData}
        />
        </>
      );
    }
}
  
let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount, 
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}




export default connect (mapStateToProps,  {
        follow,
        unfollow,
        setUsers,
        setCurrentPage, 
        setTotalUsersCount, 
        toggleIsFetching, 
    }) (UsersContainer)