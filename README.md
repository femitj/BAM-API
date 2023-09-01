# BAM-API

The Basic Bank Account Management API is a simple RESTful API built with Node.js and Express, allowing users to create bank accounts, resolve account details, and fetch a list of all bank accounts.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
  - [Running test](#running-test)
- [Usage](#usage)
  - [Endpoint 1: Create a Bank Account](#endpoint-1-create-a-bank-account)
  - [Endpoint 2: Resolve a Bank Account](#endpoint-2-resolve-a-bank-account)
  - [Endpoint 3: Fetch All Bank Accounts](#endpoint-3-fetch-all-bank-accounts)
- [Production url](#production-url)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you can run the Bank Account Management API, make sure you have the following software installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm or Yarn

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/femitj/BAM-API.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bam-api
   ```

3. Install the required npm packages:

   ```bash
   npm install or yarn install
   ```

4. Running the server

   ```
   yarn dev
   ```

🎉 Mission Completes.

The backend will be accessible at http://localhost:8080.

### Running Test

```
   yarn test
```

## Usage

### Endpoint 1: Create a Bank Account

- **HTTP Method**: POST
- **URL**: \`/create-account\`
- **Request Payload**:
  - Account holder name
  - Account holder DOB
  - Account type (Savings, Checking, MMA, CDS.)
  - Initial balance
- **Response**:
  - A unique 10-digit account number with the holder's name, account type, and initial balance.

### Endpoint 2: Resolve a Bank Account

- **HTTP Method**: GET
- **URL**: \`/account/:accountNumber\`
- **Request Parameters**:
  - \`accountNumber\` (string): The account number to resolve.
- **Response**:
  - Account details if found, including holder name, DOB, account type, and balance.

### Endpoint 3: Fetch All Bank Accounts

- **HTTP Method**: GET
- **URL**: \`/accounts\`
- **Response**:
  - An array containing all account details, including account numbers, holder names, DOBs, account types, and balances.

## Production url

Visit on onrender [https://bam-api-p7g0.onrender.com/](https://bam-api-p7g0.onrender.com/)

## Documentation

Visit Production [Swagger](https://bam-api-p7g0.onrender.com/api/docs)

On [localhost Swagger](http://localhost:8080/api/docs)

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements, bug fixes, or new features.

## License

This project is licensed under the [MIT License](LICENSE).
