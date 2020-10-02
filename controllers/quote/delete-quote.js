const makeDeleteQuote = function(removeQuote) {
  return async function deleteQuote(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }

    try {
      let quoteId = httpRequest.params.quoteId;
      await removeQuote(quoteId);
      return {
        headers,
        statusCode: 200,
        body: {}
      }

    } catch (e) {
      return {
        headers,
        statusCode: 500,
        body: {
          error: e.message
        }
      }
    }
  }
}

module.exports = makeDeleteQuote;