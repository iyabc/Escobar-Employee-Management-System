class Attendance {
    accountId: number;
    accountUsername: string;
    accountPassword: string;
    employeeName: string;
    accountId: number;
    accountUsername: string;
    accountPassword: password;
    employeeName: string;

    constructor (
        employeeAttendanceJoinId: number,
        employeeName: string,
        attendanceTime: Date,
        attendanceType: string
    ){
        this.employeeAttendanceJoinId = employeeAttendanceJoinId;
        this.employeeName = employeeName;
        this.attendanceTime = attendanceTime;
        this.attendanceType = attendanceType;
    }
}

export default Attendance;