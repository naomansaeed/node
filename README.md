# 🌐 Node.js Core HTTP Workshop

A structured, step-by-step learning repository for mastering vanilla Node.js HTTP servers, request/response lifecycle, routing, query parsing, and data filtering. Built alongside a comprehensive full-stack roadmap.

## 📌 Progress Tracker
- [x] `01-minimal-server.js` → Creating a server with `http.createServer()`
- [x] `02-status-codes-headers.js` → Setting HTTP status codes & response headers
- [x] `03-req-res-lifecycle.js` → Handling request methods & streaming responses
- [x] `04-query-params.js` → Extracting & validating URL query parameters
- [ ] `05-filtering-data.js` → Applying array methods to filter mock datasets
- [x] `06-routing-challenge.js` → Multi-endpoint routing with path matching

## 🚀 How to Run Any Lesson
```bash
# Navigate to the repo
cd node-http-workshop

# Run a specific lesson
node 01-minimal-server.js

# Test with curl
curl http://localhost:3000
```
## Project Defaults

- name: wild-horizons
- version: default
- description: a dataset of planet's most interesting places
- entrypoint: server.js
- test command: default
- git repository: default
- keywords: default
- author: Naoman Saeed
- license: mit

## Possible Stretch Goals

- Gentler error handling (instead of sending empty array when nothing found)
- handle POST requests (ignore authentication for now)
- better filtering (search description using keywords)
- expand into full fledged api worth selling? (would require a lot more data)