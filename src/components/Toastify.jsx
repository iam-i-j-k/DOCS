import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  const Toastify = () => {
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <ToastContainer />
      </div>
    );
  }

  export default Toastify