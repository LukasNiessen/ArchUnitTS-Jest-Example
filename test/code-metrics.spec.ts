import { metrics } from 'archunit';

describe('metrics', () => {
	it('lcom should be below 0.5 in business', async () => {
		const rule = metrics().inFolder('business').lcom().lcom96b().shouldBeBelow(0.5);
		await expect(rule).toPassAsync();
	});

	it('lcom should be below 0.5 ui', async () => {
		const rule = metrics().inFolder('ui').lcom().lcom96b().shouldBeBelow(0.5);
		await expect(rule).toPassAsync();
	});
});
