# User Management System

This repository provides a full-stack application for managing users, developed with a **React** frontend and **ASP.NET Core** backend. It supports features like user creation, updating, deletion, and display of user data.

![Image1](../lab6/docs/image1.png)

## Features

### Frontend:
- Built with **React** and **Ant Design** components for UI.
- A card-based display of users with the ability to **edit** or **delete** each user.
- **Modal form** for adding new users or updating existing user information.
- Users are displayed in a list, each showing their **first name**, **last name**, **email**, and **photo**.
- **Props-based Components**: Modular React components such as `CardTitle`, `Users`, and `CreateUpdateUser` ensure reusability and clarity.

![Image2](../lab6/docs/image2.png)

### Backend:
- Developed using **ASP.NET Core** with **Entity Framework Core** for database operations.
- **RESTful API** for managing users with **Create, Read, Update, and Delete (CRUD)** operations.
- **PostgreSQL** as the database provider, with **Dockerized PostgreSQL** setup for easy environment configuration.
- Implements the **Repository Pattern** for database interaction and **Service Layer** to handle business logic.

### Data Model:
- Users are represented by the `User` model, with fields for **Id**, **FirstName**, **LastName**, **Email**, and **Photo**.
- **Validation** ensures no empty fields, and max length constraints on user properties are enforced.

## Technologies Used

- **Frontend**: React, TypeScript, Ant Design
- **Backend**: ASP.NET Core, Entity Framework Core, PostgreSQL, Docker
- **Data Access**: Repository pattern, Service layer architecture
- **Database**: PostgreSQL
