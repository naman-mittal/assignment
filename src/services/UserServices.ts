import {User} from '../constants/interfaces';

export const fetchUsers = async () => {
  return fetch('https://gorest.co.in/public/v2/users', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer 9198353b37c3a891b40d57bfd3608a14b8d23de71ca656992e5a7fe7f1ac8f29',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(users => {
      return users;
    })
    .catch(err => Promise.reject('error fetching users'));
};

export const addUser = async (user: User) => {
  return fetch('https://gorest.co.in/public/v2/users', {
    method: 'POST',
    headers: {
      Authorization:
        'Bearer 9198353b37c3a891b40d57bfd3608a14b8d23de71ca656992e5a7fe7f1ac8f29',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(res => res.json())
    .then(user => user)
    .catch(err => Promise.reject('error in adding user'));
};

export const updateUser = async (user: User, userId: number) => {
  return fetch('https://gorest.co.in/public/v2/users/' + userId, {
    method: 'PUT',
    headers: {
      Authorization:
        'Bearer 9198353b37c3a891b40d57bfd3608a14b8d23de71ca656992e5a7fe7f1ac8f29',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(res => res.json())
    .then(user => user)
    .catch(err => Promise.reject('error in updating user'));
};
