let http = require("http");
let fs = require("fs");
let url = require("url");

let server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/") {
        res.write("This is the Home Page");
        res.end();
    } else if (req.url === "/about") {
        res.write('This is the About Page');
        res.end();
    } else if (req.url === "/contact") {
        res.write('This is the Contact Page');
        res.end();
    } else if (req.url === "/file-write") {
        fs.writeFile("demo.txt", "hello world", (err) => {
            if (err) {
                res.write("Failed to write file");
            } else {
                res.write("File written successful");
            }
            res.end();
        });
    } else {
        res.write("The Requested URL Does Not Found");
        res.end();
    }
});

server.listen(5500, () => {
    console.log("Server is listening on port 5500");
});