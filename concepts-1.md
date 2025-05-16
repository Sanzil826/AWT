## HTTP methods

HTTP methods define the types of requests a client can send to a server, indicating the desired action.

### 1. GET
Fetches data from a specified resource.

Example: GET /users retrieves a list of users.

### 2. POST
Sends data to create a new resource.

Example: POST /users with a request body containing user details

### 3. PUT
Updates an existing resource with new data.

Example: PUT /users/{id} modifies a specific user’s information.

### 4. DELETE
Removes a specified resource.

Example: DELETE /users/{id} deletes a user (or DELETE /users with IDs in the body).

---

## HTTP Status codes

Numeric responses indicating the outcome of a request.

### 1. 2xx: Success
200 OK: The request succeeded.

201 Created: A resource was successfully created.

### 2. 4xx: Client Error
400 Bad Request: Invalid input or validation failed.

401 Unauthorized: Authentication is missing or invalid.

404 Not Found: The requested resource does not exist.

### 3. 5xx: Server Error
500 Internal Server Error: A generic server-side error occurred.

503 Service Unavailable: The server is temporarily unable to handle requests.

## CSS selectors
These are used to add styling to the selected tags.
1.  **Universal selector (*)**: Selects all elements:

    ```css
    *{
        margin: 0;
        padding: 0;
    }
    ```

2. **Type selector**: Selects all the elements of given type.
    ```css
    p{
        color: blue;
    }
    ```

3. **Class selector**: Selects all the elements of specified class.
    ```css
    .operator-button{
        background-color: red;
    }
    ```

4. **ID selector**: Selects the element with the given id.
    ```css
    #scaffold{
        font-size: 2em;
    }
    ```

## Git Basics
1. **init**: This command is used at the beginning of the project. This is neccessary because this command creates a hidden file `.git` which helps in tracking changes.
    ```bash
    git init
    ```

2. **add**: This command is used to add changed files and folders. `git add .` adds all changed files or mentioning file names will only add specfic files.
    ```bash
    git add fileName
    ```

3. **commit**: This command saves a permanent snapshot with a message. It lets Git know what changed and when.
    ```bash
    git commmit -m "commit message"
    ```

4. **push**: This command sends the local commit to a remote repository. It uploads the changes to the git repository.
    ```bash
    git push
    ```

5. **pull**: This command is use to fetch changes from the the git repository. 
    ```bash
    git pull origin branch-name
    ```

6. **clone**: This command is used when creating a copy of an existing repository.
    ```bash
    git clone repository-url
    ```

7. **branch**: In Git, branches are the copies of a project where multiple people can work together without affecting one another. `git branch` is used to create a new branch.
    ```bash
    git branch branch-name
    ```

## Callback Function
A function passed as an argument to another function for later execution.

## Higher Order Function
A function that either:
    Accepts another function as an argument, or
    Returns a function.

## Array Methods
1. **filter()**: Returns a new array with elements that meet a condition

2. **map()**: Transforms each element and returns a new array

3. **forEach()**: Executes a function for each element (no return value)

4. **push()**: Adds an element to the end of an array.

5. **pop()**: Removes and returns the last element of an array.