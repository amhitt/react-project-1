import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/userPhoto.png";

class Users extends React.Component {
  componentDidMount() { 
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    let currentPage = this.props.currentPage
    let currentPageF = ((currentPage - 5) < 0) ? 0 : currentPage - 5
    let currentPageL = currentPageF + 5
    let slicedPages = pages.slice(currentPageF, currentPageL + 2)

    return (
      <div >
       
      <div className={classes.pagination}>    
        {slicedPages.map(p => 
          <span className={this.props.currentPage === p && classes.selectedPage}
          onClick={() => {this.onPageChange(p)}}>{p}</span> 
         )}

      </div>
        {this.props.usersData.map((u) => (
          <div key={u.id}>
            <div className={classes.container}>
              <div className={classes.basic}>
                <div className={classes.photo}>
                  <img
                    src={u.small != null ? u.photos.small : userPhoto} alt=""/>
                </div>
                <div className={classes.description}>
                  <div className={classes.name}> {u.name} </div>
                  {/* <div className={classes.location}>
                  {" "}
                  {u.location.country}, {u.location.city}{" "}
                </div> */}
                  <div className={classes.status}>{u.status}</div>
                </div>
                <div className={classes.button}>
                  {u.isFollowed 
                  ? (<button className={classes.btn} onClick={() => { this.props.unfollow(u.id) }}>{" "}Unfollow{" "}</button>) 
                  : (<button className={classes.btn} onClick={() => { this.props.follow(u.id) }}> {" "} Follow{" "}</button>
                  )}
                </div>
              </div>
            </div>
          </div>

        ))}
       
      </div>
    );
  }
}

export default Users;
