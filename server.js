// import libraries
const express = require('express');
const cors = require('cors');
const helpers = require('./helper_functions');

const app = express();
const PORT = process.env.PORT || 7010;

// middlewares...
app.use(express.json());
app.use(cors());

app.get('/api/classify-number', async (req, res) => {
    const number = req.query.number;
    if(Number.isInteger(number)){
        return res.status(400).json({
            "number": "alphabet", 
            "error": "true"
        })
    }
    const sum = helpers.sumOfDigits(number);
    const properties = helpers.returnProperties(number);
    const is_prime = helpers.checkPrime(number);
    const is_perfect = helpers.isPerfect(number);
    try {
        const data = await helpers.getFunFact(number);
        return res.status(200).json({ "number": number, "fun_fact": data, "sum_of_digits": sum, "properties": properties, "is_prime": is_prime, "is_perfect": is_perfect});
    }
    catch (err) {
        return res.status(500).json({
            "message": "Failed to get number facts"
        })
    }
})


// let the app listen on that port
app.listen(PORT, () => {
    console.log(`Server is listening on the port ${PORT}...`);
})