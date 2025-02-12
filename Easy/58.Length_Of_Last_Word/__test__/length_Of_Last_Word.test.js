import { lengthOfLastWord } from "../length_Of_Last_Word";

describe("Length of Last Word", () => {
  
  test("Basic case: 'Hello World'", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });

  test("String with extra spaces: '   fly me   to   the moon  '", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });

  test("Normal sentence: 'luffy is still joyboy'", () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });

  test("Single word: 'hello'", () => {
    expect(lengthOfLastWord("hello")).toBe(5);
  });

  test("String with only spaces: '      '", () => {
    expect(lengthOfLastWord("      ")).toBe(0);
  });

  test("String with one word and spaces before it: '    world'", () => {
    expect(lengthOfLastWord("    world")).toBe(5);
  });

  test("String with one word and spaces after it: 'hello    '", () => {
    expect(lengthOfLastWord("hello    ")).toBe(5);
  });

  test("String with multiple spaces between words: 'a  b  c   '", () => {
    expect(lengthOfLastWord("a  b  c   ")).toBe(1);
  });

  test("String with a very long word: 'supercalifragilisticexpialidocious'", () => {
    expect(lengthOfLastWord("supercalifragilisticexpialidocious")).toBe(34);
  });

  test("String with multiple trailing spaces: 'test    '", () => {
    expect(lengthOfLastWord("test    ")).toBe(4);
  });

});