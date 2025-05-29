import { metrics, projectFiles } from 'archunit';

describe('architecture rules', () => {
	it('should not have cyclic dependencies', async () => {
		const rule = projectFiles().inFolder('src').should().haveNoCycles();
		await expect(rule).toPassAsync();
	});

	describe('layered architecture rules', () => {
		it('should not have dependencies from business to database', async () => {
			const rule = projectFiles()
				.inFolder('src/business')
				.shouldNot()
				.dependOnFiles()
				.inFolder('src/database');

			await expect(rule).toPassAsync();
		});

		// TODO: add more layers
	});

	describe('code metric rules', () => {
		it('should not have huge files', async () => {
			const rule = metrics().count().linesOfCode().shouldBeBelow(1000);
			await expect(rule).toPassAsync();
		});

		// TODO: add more metric rules
	});
});
