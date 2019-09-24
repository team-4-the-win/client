'use strict'

const ui = require('./ui')

const onGetBooks = function (event) {
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.getBooksFailure)
}

module.exports = {
  onGetBooks
}
