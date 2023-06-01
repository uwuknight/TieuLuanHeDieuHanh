import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

/**
 * Home Component
 *
 * This component represents the home page of the application.
 * It fetches data from an API endpoint and displays it in a table.
 * The table is initially hidden, and when the "Click me" button is clicked,
 * it becomes visible.
 *
 * @returns {JSX.Element} The rendered Home component
 */

export default function Home() {
  // State variables
  const [data, setData] = useState([]);
  const [isShowing, setIsShowing] = useState(false);

  // Utility function to pause execution for a given time (in milliseconds)
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Fetch data from the API endpoint
  const fetchData = async () => {
    await sleep(1000); //sleep time
    try {
      const response = await fetch('/api/processes');
      const { data } = await response.json();
      setData(data.split('\n').slice(2, -1)); // Split the data by newlines and exclude header and footer
    } catch (error) {
      console.error(error);
    }
  };

  // Event handler for the "Click me" button
  const handleNextButtonClick = () => {
    setIsShowing(true)
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData()
  }, [])

  // Fetch data whenever isShowing changes (component update)
  useEffect(() => {
    fetchData()
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Retrieve and Export Progress Information</title>
        <link rel="icon" href="/logoDaiHocDaLat.jpg" />
      </Head>
      <main>
        {isShowing ? (
          <table className={styles.table}>
            <thead>
              <tr >
                <th>Name</th>
                <th>PID</th>
                <th>Session Name</th>
                <th>Session #</th>
                <th>Mem Usage</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {row.split(/\s{2,}/).map((cell, cellIndex) => (
                    <td key={cellIndex}> {cell} </td>

                  ))}
                </tr>
              ))}

              
            </tbody>
          </table>
        ) : (
        <div className={styles.loaderContainer}>
          <button className={styles.button} onClick={() => handleNextButtonClick()}>Click To Load Data</button>
          <div className={styles.loader}></div>
        </div>)}
      </main>
    </div>
  );
}
