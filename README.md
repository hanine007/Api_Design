# Api_Design

Design and build APIs from the ground up in Node.js!We  Use Express to handle routes and create your REST API. You'll read and update from a Postgres database using Prisma and TypeScript. Then add authentication to lock down your API with JWTs

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Development Mode](#development-mode)
  - [Local](#local)
  - [Testing](#testing)
  - [Production](#production)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Database](#database)
- [Test](#Test)
- [Logging](#logging)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Welcome to Api_Design ! This project focuses on designing and building robust APIs using Node.js. It leverages Express.js for handling routes and creating a RESTful API. Data persistence is managed through a PostgreSQL database using Prisma ORM, ensuring efficient and scalable data operations. Authentication is implemented to secure the API endpoints using JSON Web Tokens (JWTs), providing a reliable method for user authorization
## Technologies Used

List of technologies and tools used in the project:

- Node.js
- Express.js
- Prisma
- CORS
- Morgan
- JWT (JSON Web Tokens)


## Setup

### Prerequisites

- Node.js installed
- Database (e.g., PostgreSQL, MySQL) installed and running

### Installation

1. Clone the repository:

   ```bash
   $ git clone 
   $ cd your-project
   ```

2. Install dependencies:

   ```bash
   $ npm install
   ```

## Local



```bash
$ npm run dev
```

## Production 

```bash
$  npm run prod
```
## Testing 
```bash
$  npm run testing

```
## Authentication

authentication is handled in this project:

- JWT (JSON Web Tokens) are used for authentication.
- Endpoints are secured using JWT middleware.

Include any relevant code snippets or configuration details.

## Database

 Prisma is used for interacting with the database:

- Prisma is used as an ORM to interact with the PostgreSQL database.
- Database schema defined in `schema.prisma`.

Provide an overview of your database schema if necessary.

## Test 
Unit tests are written using Jest. Unit tests focus on testing individual functions or modules in isolation.
```bash
$  npm test

```

## Logging

 logging is implemented in your project:

- Morgan middleware is used for HTTP request logging.
- Logs are output to the console in a specified format.




## License
 MIT License



