const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const secrets = {
  dbUri:
    process.env.DB_URI ||
    'mongodb+srv://Tanja:Tanjantiedot@cluster0-hldde.mongodb.net/test?retryWrites=true&w=majority',
};

const getSecret = (key) => secrets[key];

module.exports = { getSecret }