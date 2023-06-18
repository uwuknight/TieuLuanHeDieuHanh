import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [isShowing, setIsShowing] = useState(false);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const fetchData = async () => {
    await sleep(500);
    try {
      const response = await fetch('/api/processes');
      const { data } = await response.json();

      const sortedData = data
        .split('\n')
        .slice(2, -1)
        .map((row) => row.split(/\s{2,}/))
        .sort((a, b) => parseFloat(b[4]) - parseFloat(a[4]))
        .map((row) => row.join('  '));

      setData(sortedData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextButtonClick = () => {
    setIsShowing(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
              <tr>
                <th>Name</th>
                <th>PID</th>
                <th>Session Name</th>
                <th>Session #</th>
                <th className={styles.memUsageHeader}>Mem Usage</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {row.split(/\s{2,}/).map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.loaderContainer}>
            <button className={styles.button} onClick={() => handleNextButtonClick()}>
              Click To Load Data
            </button>
            <div className={styles.loader}></div>
          </div>
        )}
      </main>
    </div>
  );
}
