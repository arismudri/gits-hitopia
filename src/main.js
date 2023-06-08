const express = require('express');

const { highestPalindrom } = require('./module/highest-palindrome');
const { balancedBracket } = require('./module/balanced-bracket');
const { weightedStrings } = require('./module/weighted-strings');

const app = express();
const port = 3000;

app.get('/weighted-strings', (req, res) => {
    try {

        let { string, queries } = req.query

        queries = queries.split(",")

        const result = weightedStrings(string, queries)

        res.send(result);

    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error.message });
    }
});

app.get('/highest-palindrom', (req, res) => {
    try {

        const { string, key } = req.query

        const result = highestPalindrom(string, key)

        res.send(result);

    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error.message });
    }

});

app.get('/balanced-bracket', (req, res) => {
    try {

        const { bracket_string } = req.query

        const result = balancedBracket(bracket_string)

        res.send(result);

    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error.message });
    }

});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});