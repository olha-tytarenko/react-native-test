export const USERS_URL = 'https://api.github.com/users';
export const fetchUserRepositoriesUrl = userLogin => `https://api.github.com/users/${userLogin}/repos`;
export const fetchUserGistsUrl = userLogin => `https://api.github.com/users/${userLogin}/gists`;
