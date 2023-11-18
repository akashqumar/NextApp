import React from 'react';
import Link from 'next/link';

const ErrorPage = ({ statusCode }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        {statusCode ? `Error ${statusCode}` : 'An error occurred on client'}
      </h1>
      <p style={styles.message}>
        {statusCode
          ? 'Sorry, an error occurred on the server.'
          : 'Sorry, an error occurred on the client side.'}
      </p>
      <Link href="/">
        <button style={styles.button}>Go to Home</button>
      </Link>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    color: '#FF0000', // Red color for error indication
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '2rem',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default ErrorPage;
