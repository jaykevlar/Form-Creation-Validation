async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear loading message
    dataContainer.innerHTML = '';

    // Create a list element
    const userList = document.createElement('ul');

    // Loop through users and create list items
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    // Append the user list to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    dataContainer.innerHTML = ''; // Clear existing content
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// Run fetchUserData when DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
