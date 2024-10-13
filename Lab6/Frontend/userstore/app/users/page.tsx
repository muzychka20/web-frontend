"use client";

import { Button } from "antd";
import { Users } from "../components/User";
import { useEffect, useState } from "react";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
  UserRequest,
} from "../services/users";
import Title from "antd/es/typography/Title";
import { CreateUpdateUser, Mode } from "../components/CreateUpdateUser";

export default function UsersPage() {
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
  } as User;

  const [values, setValues] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
  } as User);

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState(Mode.Create);

  useEffect(() => {
    const getUsers = async () => {
      const users = await getAllUsers();
      setLoading(false);
      setUsers(users);
    };
    getUsers();
  }, []);

  const handleCreateUser = async (request: UserRequest) => {
    await createUser(request);
    closeModal();
    const users = await getAllUsers();
    setUsers(users);
  };

  const handleUpdateUser = async (id: string, request: UserRequest) => {
    await updateUser(id, request);
    closeModal();
    const users = await getAllUsers();
    setUsers(users);
  };

  const handleDeleteUser = async (id: string) => {
    await deleteUser(id);
    closeModal();
    const users = await getAllUsers();
    setUsers(users);
  };

  const openModal = () => {
    setMode(Mode.Create);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setValues(defaultValues);
    setIsModalOpen(false);
  };

  const openEditModal = async (user: User) => {
    setMode(Mode.Edit), setValues(user);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ marginTop: "30px" }}
        size="large"
        onClick={openModal}
      >
        Add user
      </Button>

      <CreateUpdateUser
        mode={mode}
        values={values}
        isModalOpen={isModalOpen}
        handleCreate={handleCreateUser}
        handleUpdate={handleUpdateUser}
        handleCancel={closeModal}
      />

      {loading ? (
        <Title>Loading...</Title>
      ) : (
        <Users
          users={users}
          handleOpen={openEditModal}
          handleDelete={handleDeleteUser}
        />
      )}
    </div>
  );
}
