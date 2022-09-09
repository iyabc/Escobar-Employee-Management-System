import React from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ values }) {
    const [arr, setArr] = useState([]);
    setArr(values);
    console.log(arr);
  return (
    <div className={styles.container}>
        <form>
            <div className={styles.header}>
                Confirm Attendance
            </div>
            <div className={styles.content}>
                {/* {Object.values(values).map((item) => {
                    console.log(item)
                })} */}
            </div>
            <div type="submit">

            </div>
        </form>
    </div>
  )
}
