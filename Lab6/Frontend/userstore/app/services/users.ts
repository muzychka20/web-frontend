export interface UserRequest {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
}

export const getAllUsers = async () => {
  const response = await fetch("http://localhost:5291/User");
  return response.json();
};

export const createUser = async (userRequest: UserRequest) => {
  await fetch("http://localhost:5291/User", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userRequest),
  });
};

export const updateUser = async (id: string, userRequest: UserRequest) => {
  await fetch(`http://localhost:5291/User/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userRequest),
  });
};

export const deleteUser = async (id: string) => {
    await fetch(`http://localhost:5291/User/${id}`, {
      method: "DELETE",      
    });
  };