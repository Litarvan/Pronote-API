const { login } = require('./src/auth');
const errors = require('./src/errors');

// -----------------------------------------------------------

const { createSession } = require('./src/session');
const { cipher, decipher } = require('./src/cipher');
const { getStart, auth } = require('./src/auth');

const getParams = require('./src/fetch/params');
const { getId, getAuthKey }  = require('./src/fetch/auth');
const getUser = require('./src/fetch/user');
const { getFilledDaysAndWeeks, getTimetable } = require('./src/fetch/timetable');

const navigate = require('./src/fetch/navigate');

const http = require('./src/http');
const request = require('./src/request');

module.exports = {
    // High-level API
    login,
    errors,

    // Low-level API (if you need to use this, you can, but it may mean I've forgotten a use case, please open an issue!)
    createSession,
    cipher, decipher,
    getStart, auth,

    fetchParams: getParams,
    fetchAuthId: getId,
    fetchAuthKey: getAuthKey,
    fetchUser: getUser,
    fetchTimetableDaysAndWeeks: getFilledDaysAndWeeks,
    fetchTimetable: getTimetable,

    navigate,

    http,
    request
};
