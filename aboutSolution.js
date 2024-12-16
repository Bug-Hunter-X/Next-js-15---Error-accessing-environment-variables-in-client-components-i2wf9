```javascript
// pages/about.js

export default function About() {
  const myVariable = process.env.NEXT_PUBLIC_MY_VARIABLE || 'Default Value';
  console.log(myVariable); 
  return (
    <div>
      <h1>About Page</h1>
      <p>My variable: {myVariable}</p>
    </div>
  );
}
```