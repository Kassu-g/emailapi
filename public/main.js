document.addEventListener('DOMContentLoaded', () => {
  const getUsersButton = document.getElementById('getUsers');
  
  getUsersButton.addEventListener('click', () => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(users => {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';  // Clear previous list

        if (users.length === 0) {
          const noUsersMessage = document.createElement('li');
          noUsersMessage.textContent = "No users available";
          userList.appendChild(noUsersMessage);
        } else {
          users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(listItem);
          });
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  });
});
