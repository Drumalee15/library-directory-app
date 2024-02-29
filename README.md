# ReactJS Library Directory Application

## Overview

This ReactJS application provides a dynamic library directory platform, enabling users to easily search, filter, and check the availability (in or out of stock) of books. Designed with an intuitive user interface, the application caters to libraries, bookstores, or personal collections looking for a modern solution to manage and navigate their inventory.

## Features

- **Search Functionality**: Quickly find books by title, author, or ISBN with our responsive search feature.
- **Filter Options**: Narrow down the search results using filters such as genre, publication year, and author.
- **Stock Management**: View the current stock status of books in real-time. Books are categorized as either "In Stock" or "Out of Stock."
- **Responsive Design**: A user-friendly interface that adapts to various screen sizes, ensuring a seamless experience on desktops, tablets, and smartphones.

## Getting Started

### Prerequisites

- Node.js (version 12.0.0 or later)
- npm (version 6.0.0 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Drumalee15/library-directory-app.git

## Navigate to the project directory:
   cd library-directory-app

## Install the required packages:
   npm install

## Start the application:
   npm start

## Start expressjs server:
   node ./server

   ## Junit Testing - Jest

Tests are located in the _/app/src/tests_ folder.

To run all test suites from VS Code Terminal:

```
npm test
```

To run a single test suite from VS Code Terminal:

```
npm test -- CommonForm.test
```

To run a test case from VS Code Terminal:

```
npm test -- -u -t="Mobile Number validated"
```

## Debugging in VS Code

When first running the VS Code Debugger you will be prompted for a launch.json file to be created:

```
{
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Debug Jest Tests",
        "type": "node",
        "request": "launch",
        "runtimeArgs": [
          "--inspect-brk",
          "${workspaceRoot}/app/node_modules/jest/bin/jest.js",
          // "--runInBand",
           "--testNamePattern=submits the form when the Pay button is enabled and can be clicked - failed payment"
        ],
        "cwd": "${workspaceRoot}/app",
        "console": "integratedTerminal",
        "internalConsoleOptions": "openOnSessionStart",
      },
      {
        "name": "Debug Dev Server",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:8081/processing",
        "webRoot": "${workspaceRoot}/app"
      },
      {
        "name": "Debug Tomcat Server",
        "type": "chrome",
        "request": "attach",
        "port": 9229
      }
    ]
  }
```

Note at "--testNamePattern=Mobile Number - Invalid" the testNamePattern is set to debug on a single test case. Change as appropriate.