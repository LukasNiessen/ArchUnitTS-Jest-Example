import { projectFiles } from 'archunit';

describe('No cyclic dependencies', () => {
	it('should not have cycles', async () => {
		const rule = projectFiles().inFolder('src').should().haveNoCycles();

		// This will fail, as its supposed to!
		//await expect(rule).toPassAsync();

		const violations = await rule.check();
		expect(violations).toHaveLength(1);
	});
});
