import type { NextPage } from 'next'


const Home: NextPage = () => {

  async function postData() {
    // Default options are marked with *
    const response = await fetch('/api/data', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  postData();

  return (
    <div >

    </div>
   
  )
}

export default Home
