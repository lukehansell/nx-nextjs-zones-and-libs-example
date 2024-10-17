import Nav from '../../organisms/Nav/nav';
import styles from './FullWidth.module.css';

export function FullWidth({ children }: React.PropsWithChildren) {
  return (
    <div className={styles['container']}>
      <aside>
        <Nav />
      </aside>
      <main>
        {children}
      </main>
    </div>
  );
}

export default FullWidth;
