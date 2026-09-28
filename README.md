# Blooket APIs and Websockets
Contains Blooket APIs for manipulation of the quiz if you are not the host. Also includes bookmarklet for “Blooket Hacks” (keep in mind that this is not actual hacking)

One way you can use a GET request in JavaScript is through the `Fetch( );` script. the following source code block contains a function for GET requests.

```JAVASCRIPT
async function getData() {
  try {
    const response = await fetch('https://github.com');
    console.log(`Status: ${response.status}`
    if (response.ok) throw new Error("Status not okay!")
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
    return undefined
  }
}
```
check GET, POST, PUT, PATCH, DELETE files included in the HTTP folder

check WEBSOCKETS folder for README description.

check Bookmarklets folder for the “Blooket Hacks” Bookmarklets
