import { getCurrentYear } from "./getCurrentYear";

describe("testing getCurrentYear", () => {
	it("should return a number", () => {
		const currentDate = getCurrentYear();
		expect(typeof currentDate).toBe("number");
	});

	it("should return a value that is at least four digits long", () => {
		const currentDate = getCurrentYear();
		expect(currentDate.toString().length).toBeGreaterThanOrEqual(4);
	});

	it("should return a value that is at greater than 2021", () => {
		const currentDate = getCurrentYear();
		expect(currentDate).toBeGreaterThan(2021);
	});
});
