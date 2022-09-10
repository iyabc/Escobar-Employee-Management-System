class Attendance {
    employeeAttendanceJoinId: number;
    employeeName: string;
    attendanceTime: string;
    attendanceType: string;

    constructor (
        employeeAttendanceJoinId: number,
        employeeName: string,
        attendanceTime: string,
        attendanceType: string
    ){
        this.employeeAttendanceJoinId = employeeAttendanceJoinId;
        this.employeeName = employeeName;
        this.attendanceTime = attendanceTime;
        this.attendanceType = attendanceType;
    }
}

export default Attendance;