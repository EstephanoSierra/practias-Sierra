let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
//console.log(Boolean(user.data.friends[2]));
//console.log(user.data.friends.length);
//console.log(user.data.friends.push('xd'));
//console.log(user.data.friends)






function addFriend(userObj, friend) {
  // Cambia solo el código debajo de esta línea
userObj.data.friends.push(friend);
  return user.data.friends;

  // Cambia solo el código encima de esta línea
}

console.log(addFriend(user, 'Pete'));
