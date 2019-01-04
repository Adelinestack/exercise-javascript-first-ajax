const axios = require('axios');

const TOKEN =
  '018809e4eb2119282f4ae5fede7e56d17914764f96667a5db0860dd6e16574d2';
const baseUrl = `https://www.jsonstore.io/${TOKEN}`;

function getUsers() {
  axios
    .get(`${baseUrl}/users`)
    .then(({ data }) => console.log(data))
    .catch(e => console.error(e));
}
//getUsers();
function addUser(user, id) {
  return axios
    .post(`${baseUrl}/users/${id}`, user)
    .catch(e => console.error(e));
}
// addUser({ name: 'Adeline' }, 2);

function addMultipleUsers(cpt) {
  if (cpt > 0) {
    return addUser({ name: `user-${cpt}` }, cpt)
      .then(addMultipleUsers(cpt - 1))
      .catch(e => console.error(e));
  }
}

// addMultipleUsers(8).then(getUsers());

function deleteUser(userId) {
  return axios
    .delete(`${baseUrl}/users/${userId}`)
    .catch(e => console.error(e));
}

// deleteUser(2);

function deleteUsers() {
  return axios.delete(`${baseUrl}/users/`).catch(e => console.error(e));
}

function updateUser(userId, fieldToUpdate, fieldValue) {
  return axios.put(`${baseUrl}/users/${userId}/${fieldToUpdate}`, fieldValue, {
    headers: { 'Content-Type': 'application/json' },
  });
}

// updateUser(6, 'name', '"userUpdated"').then(getUsers());

function updateUserByMerge(userId, fieldsToUpdate) {
  return axios
    .get(`${baseUrl}/users/${userId}`)
    .then(({ data: { result } }) => result)
    .then(result => ({ ...result, ...fieldsToUpdate }))
    .then(newFields =>
      axios.put(`${baseUrl}/users/${userId}`, newFields, {
        headers: { 'Content-Type': 'application/json' },
      })
    );
}
updateUserByMerge(2, { boisson: 'café' }).then(getUsers);
