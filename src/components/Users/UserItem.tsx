import * as React from "react";
import { FC } from "react";
import { interfaceUser } from "../../userSlice/types";
import * as Icon from "react-feather";
import "./UserItem.css";

const UserItem: FC<{
  person: interfaceUser;
  handleHover: (user: interfaceUser | null) => void;
}> = ({ person, handleHover }) => {
  const [hovered, setHovered] = React.useState(false);

  const [user, setUser] = React.useState(null);

  const handleMouseEnter = React.useCallback(() => {
    setHovered(true);
    handleHover(person);
  }, [person, handleHover]);

  const handleMouseLeave = React.useCallback(() => {
    setHovered(false);
    handleHover(null);
  }, [handleHover]);

  return (
    <>
      <tr key={person.id} className="d-flex align-items-center">
        <td
          className="d-flex userDetails"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <picture>
            <img
              className="profileImg img-fluid img-thumbnail rounded-circle p-0"
              src={person.avatar}
              alt="owner_avatar"
            />
          </picture>
          <div className="row align-content-center ms-0">
            <p className="userName mb-0">
              {person.first_name} {person.last_name}
            </p>
            <p className="userEmail text-secondary mb-0">{person.email}</p>
          </div>
        </td>
        <td className="text-success" style={{ width: "14rem" }}>
          {person.id === 1 ? (
            "Active"
          ) : (
            <select className="selectMenu form-select">
              <option value="Inactive">Inactive</option>
              <option value="Active">Active</option>
            </select>
          )}
        </td>
        <td className="" style={{ width: "10rem" }}>
          {person.id === 1 ? (
            "Owner"
          ) : (
            <select className="selectMenu form-select">
              <option value="Inactive">Manager</option>
              <option value="Active">Read</option>
            </select>
          )}
        </td>
        <td>
          {person.id === 1 ? (
            <Icon.Lock size={18} style={{ color: "rgba(0, 0, 0, 0.6)" }} />
          ) : (
            <Icon.Trash2 size={18} style={{ color: "rgba(0, 0, 0, 0.6)" }} />
          )}
        </td>
      </tr>
    </>
  );
};

export default UserItem;
