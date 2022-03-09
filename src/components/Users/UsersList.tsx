import * as React from "react";
import { FC } from "react";
import UserItem from "./UserItem";
import UserProfileCard from "./UserProfileCard/UserProfileCard";
import UserHeader from "./UserHeader";
import { useListPostsQuery } from "../../Services/getUsersAPI";
import { useState } from "react";
import Pagination from "./Pagination";
import { Post } from "../../Services/types";

const UsersList: FC = () => {
  const [user, setUser] = React.useState(null);
  const [page, setPage] = useState(1);
  const { data: data, isLoading } = useListPostsQuery(page);
  if (isLoading) {
    return <div> Loading Screen, Please Wait!</div>;
  }

  const handleHover = (user: Post): void => {
    setUser(user);
  };
  return (
    <>
      <div className="d-flex flex-wrap align-items-center container bg-white mt-5">
        <div className="d-flex-column">
          <table
            className="table table-borderless bg-white mr-4"
            style={{ maxWidth: "50%" }}
          >
            <UserHeader />
            <tbody className="posts-list">
              {/* Maping users to table rows */}
              {data.data.map((person) => (
                <UserItem
                  key={person.id}
                  person={person}
                  handleHover={handleHover}
                />
              ))}
            </tbody>
          </table>
        </div>
        {user && <UserProfileCard user={user} />}
      </div>
      {Pagination(setPage, page)}
    </>
  );
};

export default UsersList;
