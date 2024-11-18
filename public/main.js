document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  
  userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('User successfully added');
      userForm.reset();
    })
    .catch(error => console.error('Error:', error));
  });

  const getUsersButton = document.getElementById('getUsers');
  
  getUsersButton.addEventListener('click', () => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(users => {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';

        users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = `${user.name} - ${user.email}`;
          userList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching users:', error));
  });
});

