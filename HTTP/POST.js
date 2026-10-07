/*
THIS SCRIPT IS NOT FOR COMMERCIAL USE.
*/
async function createData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'New Post Title',
        body: 'This is the content of the new post.',
        userId: 1
      })
    });
    
    const data = await response.json();
    console.log('Success POST:', data); // Returns the newly created item with an ID
  } catch (error) {
    console.error('Error:', error);
  }
}
