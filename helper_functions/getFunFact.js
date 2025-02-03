const getFunFact = async (num) => {
    try {
        const response = await fetch(`http://numbersapi.com/${num}/math`);
        const data = await response.text();
        return data;
    }
    catch (err) {
        throw Error("Failed to fetch number facts");
    }
}

module.exports = { getFunFact }