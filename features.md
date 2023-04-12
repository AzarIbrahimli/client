An Express server that listens on port 3001.

CORS middleware that enables Cross-Origin Resource Sharing.

A MongoDB connection using Mongoose library.

A Mongoose schema that defines the structure of a user object with three properties: name, age, and username.

A Mongoose model based on the user schema that can interact with the users collection in the connected MongoDB database.

An API endpoint that returns all users from the MongoDB database with a GET request to /getUsers.

An API endpoint that adds a new user to the MongoDB database with a POST request to /createUser.

An API endpoint that deletes a user from the MongoDB database by their ID with a DELETE request to /deleteUser/:id.