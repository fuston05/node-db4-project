
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: "fakeUser1@email.com", name: "Jane Doe"},
        {email: "fakeUser2@email.com", name: "John Doe"},
        {email: "fakeUser3@email.com", name: "Jim Doe"}
      ]);
    });
};
