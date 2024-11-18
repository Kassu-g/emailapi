document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    const response = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
    });
  
    const data = await response.json();
    alert(data.message);
  });
  