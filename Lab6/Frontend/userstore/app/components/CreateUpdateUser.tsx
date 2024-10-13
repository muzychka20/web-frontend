import { Input, Modal } from "antd";
import { UserRequest } from "../services/users";
import { title } from "process";
import { useEffect, useState } from "react";

interface Props {
  mode: Mode;
  values: User;
  isModalOpen: boolean;
  handleCancel: () => void;
  handleCreate: (request: UserRequest) => void;
  handleUpdate: (id: string, request: UserRequest) => void;
}

export enum Mode {
  Create,
  Edit,
}

export const CreateUpdateUser = ({
  mode,
  values,
  isModalOpen,
  handleCancel,
  handleCreate,
  handleUpdate,
}: Props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");

  useEffect(() => {
    setFirstName(values.firstName);
    setLastName(values.lastName);
    setEmail(values.email);
    setPhoto(values.photo);
  }, []);

  const handleOnOk = async () => {
    const userRequest = { firstName, lastName, email, photo };
    mode == Mode.Create
      ? handleCreate(userRequest)
      : handleUpdate(values.id, userRequest);
  };

  return (
    <Modal
      title={mode === Mode.Create ? "Add user" : "Edit user"}
      open={isModalOpen}
      onOk={handleOnOk}
      onCancel={handleCancel}
      cancelText={"Cancel"}
    >
      <div className="user__modal">
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Photo"
        />
      </div>
    </Modal>
  );
};
