class Position {
    employeePositionId: number;
    employeePositionName: string;
    isActive: boolean;

    constructor (
        employeePositionId: number,
        employeePositionName: string,
        isActive: boolean,
    ){
        this.employeeAttendanceJoinId = employeeAttendanceJoinId;
        this.employeeName = employeeName;
        this.attendanceTime = attendanceTime;
        this.attendanceType = attendanceType;
    }
}

export default Position;