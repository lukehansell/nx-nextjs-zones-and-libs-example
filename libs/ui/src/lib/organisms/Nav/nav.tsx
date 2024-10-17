import styles from './nav.module.css';

export function Nav() {
  return (
    <nav className={styles['container']}>
      <ul>
        <li><a href="/campaign-dashboard">Campaign Dashboard</a></li>
        <li><a href="/media-plan">Media Plan</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
