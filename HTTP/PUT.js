/*
THIS SCRIPT IS NOT FOR COMMERCIAL USE.
*/
async function replaceData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 1,
        title: 'Completely Overwritten Title',
        body: 'Completely overwritten body content.',
        userId: 1
      })
    });
    
    const data = await response.json();
    console.log('Success PUT:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
