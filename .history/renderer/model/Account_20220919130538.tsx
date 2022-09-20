class Attendance {
    accountId: number;
    accountUsername: string;
    accountPassword: string;
    employeeName: string;
    accessInventoryManagementSystem: boolean;
    accessEmployeeManagementSystem: boolean;
    accessIncomeAndExpenseSystem: boolean;
    accessOrderingSystem: boolean;
    isActive: boolean

    constructor (
        accountId: number,
        accountUsername: string,
        accountPassword: string,
        employeeName: string,
        accessInventoryManagementSystem: boolean,
        accessEmployeeManagementSystem: boolean,
        accessIncomeAndExpenseSystem: boolean,
        accessOrderingSystem: boolean,
        isActive: boolean
    ){
        this.employeeAttendanceJoinId = employeeAttendanceJoinId;
        this.employeeName = employeeName;
        this.attendanceTime = attendanceTime;
        this.attendanceType = attendanceType;
    }
}

export default Attendance;