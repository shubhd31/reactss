import * as React from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FC } from "react";
import { getUsers, reset } from "../../userSlice/userSlice";
import { RootState } from "../../app/store";
import UserItem from "./UserItem";
import UserProfileCard from "./UserProfileCard/UserProfileCard";
import UserHeader from "./UserHeader";
import { interfaceUser } from "../../userSlice/types";

const UsersList: FC = () => {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState(null);

  //get users from the store
  const { users, isLoading, isSuccess } = useSelector(
    (state: RootState) => state.users
  );

  //Use the dispatch function to dispatch our getUsers action
  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  //Use the dispatch function to dispatch our reset action
  React.useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  //memorize the handleHover function

  const handleHover = (user: any) => {
    setUser(user);
  };
  return (
    <div className="d-flex flex-wrap align-items-center container bg-white mt-5">
      <table
        className="table table-borderless bg-white mr-4"
        style={{ maxWidth: "50%" }}
      >
        <UserHeader />
        <tbody className="posts-list">
          {/* Maping users to table rows */}
          {users.map((person) => (
            <UserItem
              key={person.id}
              person={person}
              handleHover={handleHover}
            />
          ))}
        </tbody>
      </table>
      {user && <UserProfileCard user={user} />}
    </div>
  );
};

export default UsersList;
