'use strict'

const ui = require('./ui')


const onGetBooks = function (event) {
  api.getWords()
    .then(ui.getWordsSuccess)
    .catch(ui.getWordsFailure)
}
