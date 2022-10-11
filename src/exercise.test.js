import { sortWords } from "./exercise";

describe("tests", () => {
  it("should return ['a','bb','ccc','dddd']", () => {
    const array = ['dddd', 'a', 'bb','ccc'];
    const rta = sortWords(array);
    expect(rta).toEqual(['a','bb','ccc','dddd']);
  });

  it("should return []", () => {
    const array = [];
    const rta = sortWords(array);
    expect(rta).toEqual([]);
  });

  it("should return ['aaa', 'bbb']", () => {
    const array = ['aaa', 'bbb'];
    const rta = sortWords(array);
    expect(rta).toEqual(['aaa', 'bbb']);
  });
});
