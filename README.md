# Static File Server

This project aims to help me understand the **fundamentals of backend development with Node.js**, focusing on how to serve static files like HTML and CSS using core Node.js modules.

## Node.js Concepts Used

### 1. `http` Module
The `http` module is used to create a basic web server with `http.createServer()`. It listens for incoming requests and sends responses without relying on any external framework like Express.

### 2. `fs` Module (`fs.createReadStream()`)
The `fs` (File System) module allows the server to access and read files from the local filesystem.  
In this project, `fs.createReadStream()` is used to **stream HTML and CSS files directly to the client**, which is efficient for serving larger files without loading them entirely into memory.

### 3. `path` Module (`path.join()`)
The `path` module is used to safely and dynamically build file paths using `path.join()`. This ensures the server correctly locates files regardless of the operating system or directory structure.

Example:
```js
path.join(__dirname, 'public', 'index.html')

```
### 4. `___dirname`
This is a global Node.js variable representing the absolute path of the directory containing the current script file.
It is used in combination with path.join() to build reliable file paths

### 5.  Basic Static File Routing
The server reads the requested URL (req.url) and maps it to a file in the public/ directory:

* / → index.html

* /about → about.html

* /style.css → style.css

If a route does not match one of the predefined paths, a 404.html file is served with an appropriate error code.

### 6. `res.writeHead()` and `Content-Type`
This sets the HTTP status code and response headers, especially the `Content-Type` (e.g., `text/html`, `text/css`), to inform the browser how to interpret the response content.

### 7. `readStream.pipe(res)`
This streams the file content directly to the response object (`res`) using .`pipe()`, enabling efficient, non-blocking data transfer from the server to the client.



