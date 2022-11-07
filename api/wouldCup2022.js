export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    console.log('=============POST============');
  } else {
    // Handle any other HTTP method
    console.log('=============fallback============');
  }
}