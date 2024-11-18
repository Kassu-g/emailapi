document.getElementById('getUsers').addEventListener('click', function() {
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
