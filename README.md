# Simple Node.js API That Returns Properties And A Fun Fact About A Number

## An Express.js API that takes a number and then returns some properties about the number, along with a fun fact.

This API takes a number as a parameter from the url and returns a mathematical fun fact about that number, along with 
the following properties:
1. Whether the number is prime or not
2. Whether the number is perfect number
3. The sum of its digits
4. Whether the number is armstrong and odd or even.

## Use Guide
1. Before cloning the project, ensure that you have Node.js installed on your system by running `node -v` in the command line. If Node.js is not installed, download and install it from their official site

2. Clone the repository `git clone https://github.com/Amaryllis750/Stage-1-Backend.git` and navigate into the project folder `cd Stage-1-Backend`

3. Run the following command to install dependencies `npm install`

4. Install nodemon globally `npm install -g nodemon` (If you have not already done so)

5. Start the server with the code `nodemon server.js`

## API Documentation
### Endpoint
`GET /api/classify-number`
#### Query Parameters
| Parameter | Type    | Required | Description             | Example|
|-----------|---------|----------|-------------------------|--------|
| number    | Integer | Yes      | The number to classify  | 344    |


### Request Format
No request body is needed 

### Reponse Format
#### ✅ Success (200 OK)
```
{
  "number": "31",
  "fun_fact": "31 is a centered triangular number, a centered pentagonal number and centered decagonal number.",
  "sum_of_digits": 4,
  "properties": [
    "odd"
  ],
  "is_prime": true,
  "is_perfect": false
}
```

#### ❌Invalid Query Parameter (400 Bad Request)
```
{
    "number": "alphabet",
    "error": true
}
```

#### ⚠ Unable to connect to the numbers API (500 Internal Server Error)
```
{
    "message": "Failed to get number facts"
}
```


## Example Usage
### Using Curl
To test the application using `curl`, you can use the following command:
`curl -X GET "http://localhost:7010/api/classify-number?number=343"`

### Using Postman, Thunder Client or any other API tester
1. Open Postman or Thunder Client
2. Select `GET` as the request method
3. Enter the following URL:&nbsp;&nbsp;&nbsp;http://localhost:7010/api/classify-number?number=343
4. Click **Send** To send the request.


## BackLinks
To Find and Hire Talented Node.js Developers:

[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)  