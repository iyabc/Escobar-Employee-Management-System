class Account {
  accountUsername: string;
  accountPassword: string;
  employeeName: string;

  constructor(accountUsername: string, accountPassword: string, employeeName: string) {
    this.accountUsername = accountUsername;
    this.accountPassword = accountPassword;
    this.employeeName = employeeName
  }
}

export default Account;