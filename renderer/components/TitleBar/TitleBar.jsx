import styles from './TitleBar.module.scss'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
import { close_app, minimize_app } from '../../../main/TitleFunctions';

const TitleBar = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.buttons}>
          <button id='minBtn' onClick={minimize_app} className={`${styles.button} ${styles.min_btn}`}>
            <MinimizeRoundedIcon fontSize='small'/>
          </button>
          <button id='closeBtn' onClick={close_app} className={`${styles.button} ${styles.exit_btn}`}>
            <CloseRoundedIcon fontSize='small'/>
          </button>
        </div>
      </div>   
    </div>
  );
}

export default TitleBar