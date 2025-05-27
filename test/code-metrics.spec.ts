import { metrics } from 'archunit';

describe('architecture', () => {
	// architecture tests can take a while to finish
	jest.setTimeout(60000);

	it('lcom should be below 0.5 in business', async () => {
		const rule = metrics().inFolder('business').lcom().lcom96b().shouldBeBelow(0.5);
		await expect(rule).toPassAsync();
	});

	it('lcom should be below 0.5 ui', async () => {
		const rule = metrics().inFolder('ui').lcom().lcom96b().shouldBeBelow(0.5);
		await expect(rule).toPassAsync();
	});

	it('project summary', async () => {
		const projectSummaryDistances = await metrics().distance().getProjectSummary();
		const projectSummaryLCOM = await metrics().lcom().getProjectSummary();

		console.log(projectSummaryDistances);
		console.log(projectSummaryLCOM);
	});
});
