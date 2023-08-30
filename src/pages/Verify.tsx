import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Verify = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const query = useQuery();

  const verifyToken = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post('http://localhost:4000/api/v1/auth/verify-email', {
        verificationToken: query.get('token'),
        email: query.get('email'),
      });

      console.log(data)
    } catch (error) {
     console.log(error);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
   
      verifyToken();
    
  }, []);

  if (loading) {
    return (
      <div className='page'>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className='page'>
        <h4>There was an error, please double check your verification link </h4>
      </div>
    );
  }

  return (
    <div className='page'>
      <h2>Account Confirmed</h2>
      <Link to='/login' className='bg-purple-600 text-white rounded-lg px-4 py-3'>
        Please login
      </Link>
    </div>
  );
};

export default Verify