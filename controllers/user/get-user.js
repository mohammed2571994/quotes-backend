const makeGetUser = function (listUsers) {
  return async function getUser(httpRequest) {
    let userId = httpRequest.params.userId;
    let users = await listUsers(userId);

    return {
      statusCode: 200,
      body: users
    }
  }
}

module.exports = makeGetUser;