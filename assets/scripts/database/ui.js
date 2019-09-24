'use strict'

const showBooksTemplate = require('../templates/book-listing.handlebars')

const getBooksSuccess = function (data) {
  if (data.books.length === 0) {
    $('#content').text("you haven't entered any books")
  } else {
    const showBooksHtml = showBooksTemplate({ books: data.books })
    $('#content').html(showBooksHtml)
  }
}

const getBooksFailure = function () {
  $('#content').text('something\'s gone wrong')
}

module.exports = {
  getBooksSuccess,
  getBooksFailure
}
