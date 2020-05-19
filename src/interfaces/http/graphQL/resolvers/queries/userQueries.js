module.exports = () => ({
  users: () => {
    const users = [
      {
        name: 'Harry Potter',
        email: 'harry@potter.com',
        id: 23,
      },
      { name: 'Jurassic Park', email: 'michael@crichton.com', id: 34 },
    ];
    return users;
  },
});
