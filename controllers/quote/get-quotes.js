const makeGetQuotes = function(listQuotes) {
  return async function getComments(httpRequest) {
    const headers = {
      'Content-Type': 'application/json'
    }

    try {
      let authorId = httpRequest.params.authorId;
      const quotes = await listQuotes(authorId);

      return {
        headers,
        statusCode: 200,
        body: quotes
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

module.exports = makeGetQuotes;