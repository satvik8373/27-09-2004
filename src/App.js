import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !age.trim()) return;
    setPeople([{ name: name.trim(), age: age.trim() }, ...people]);
    setName('');
    setAge('');
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Student Directory</h1>
        <p className={styles.subtitle}>Add entries and manage your list</p>
      </header>

      <section className={styles.card}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className={styles.input}
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                min="0"
                className={styles.input}
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.actions}>
            <button type="submit" className={styles.buttonPrimary}>Add</button>
          </div>
        </form>
      </section>

      <section>
        {people.length === 0 ? (
          <p className={styles.empty}>No data available</p>
        ) : (
          <div className={styles.grid}>
            {people.map((person, index) => (
              <div key={index} className={styles.itemCard}>
                <div className={styles.itemHeader}>
                  <span className={styles.itemName}>{person.name}</span>
                  <span className={styles.itemAge}>{person.age} yrs</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
