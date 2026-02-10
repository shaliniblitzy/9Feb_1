# 9Feb_1

A tutorial Node.js HTTP server built with [Express.js](https://expressjs.com/) that serves two endpoints. This project demonstrates how to set up a minimal Express.js application, define route handlers, and start a server — ideal for developers learning the fundamentals of Node.js web development.

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** >= 18 (recommended: **Node.js 24.13.0** LTS "Krypton")
- **npm** >= 11.6.2 (bundled with Node.js)

You can verify your installed versions by running:

```bash
node --version
npm --version
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd 9Feb_1
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   This installs Express.js 5.2.1 and all of its transitive dependencies as declared in `package.json`.

## Starting the Server

Start the server with the following command:

```bash
npm start
```

This executes `node index.js`, which launches the Express.js application. Once running, the server listens on **port 3000** and you will see a confirmation message in the terminal:

```
Server is listening on port 3000
```

## Endpoints

The server exposes the following HTTP endpoints:

| Method | Path       | Response       |
| ------ | ---------- | -------------- |
| GET    | `/`        | `Hello world`  |
| GET    | `/evening` | `Good evening` |

## Usage Examples

Once the server is running, you can test the endpoints using `curl` or any HTTP client:

```bash
curl http://localhost:3000/
```

Response:

```
Hello world
```

```bash
curl http://localhost:3000/evening
```

Response:

```
Good evening
```

## Dependencies

| Package                                      | Version | Purpose                                                        |
| -------------------------------------------- | ------- | -------------------------------------------------------------- |
| [express](https://www.npmjs.com/package/express) | 5.2.1   | Fast, unopinionated, minimalist web framework for Node.js |

Express.js is the sole runtime dependency for this project. The full dependency tree is locked in `package-lock.json` for reproducible installs.
