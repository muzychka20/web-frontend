import { Button, Card } from "antd";
import { CardTitle } from "./CardTitle";

interface Props {
  users: User[];
  handleDelete: (id: string) => void;
  handleOpen: (user: User) => void;
}

export const Users = ({ users, handleDelete, handleOpen }: Props) => {
  return (
    <div className="cards">
      {users.map((user: User) => (
        <Card
          key={user.id}
          title={
            <CardTitle FirstName={user.firstName} LastName={user.lastName} />
          }
          bordered={false}
        >
          <p>{user.email}</p>
          <img src={user.photo} alt={user.id} className="card__image"/>
          <div className="card__buttons">
            <Button onClick={() => handleOpen(user)} style={{ flex: 1 }}>
              Edit
            </Button>
            <Button
              onClick={() => handleDelete(user.id)}
              danger
              style={{ flex: 1 }}
            >
              Delete
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
