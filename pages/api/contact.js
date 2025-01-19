export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ msg: 'Only POST requests are allowed' });
    }
  
    try {
      const { name, email, subject, message } = JSON.parse(req.body);
  
      // Send data to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: "a2da6472-fd9e-46ed-8eb9-c44daa5ff27b",  // from .env.local
          subject: subject,
          from_name: name,
          from_email: email,
          message: message,
          // Optionally add more fields if your Web3Forms setup requires them
        }),
      });
  
      const data = await response.json();
  
      // If Web3Forms returns an error or success: false, handle it
      if (!response.ok || data.success === false) {
        return res.status(500).json({ msg: 'Web3Forms submission failed', data });
      }
  
      // If successful
      return res.status(201).json({ msg: 'Success', data });
    } catch (error) {
      console.error('Error submitting to Web3Forms:', error);
      return res.status(500).json({ msg: 'Failed', error: error.message });
    }
  }
  