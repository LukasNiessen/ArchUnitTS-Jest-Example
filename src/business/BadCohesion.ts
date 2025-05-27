class BadCohesion {
	private userData: string = 'User data';
	private filePath: string = '/tmp/data.txt';
	private isAuthenticated: boolean = false;

	authenticate(): void {
		this.isAuthenticated = true;
	}

	saveToFile(): void {
		console.log(`Saving data to ${this.filePath}`);
	}

	printUserData(): void {
		console.log(this.userData);
	}
}
