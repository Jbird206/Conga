import { Haiku } from '../src/haiku.js';

describe('Haiku', () => {
  test('length of line1 is 5',() => {
    var haiku = new Haiku("your moms box is big", "This is not 7 words", " ");
    var haikuSplt = haiku.line1.split(" ")
    expect(haikuSplt.length).toEqual(5);
  })

  test('length of line2 should be 7', () => {
    var haiku = new Haiku("your moms box is big", "This is 7 words blah blah blah", " ");
    var line2Words = haiku.line2.split(" ");

    expect(line2Words.length).toEqual(7);
  })

  test('length should be 5', () => {
    var haiku = new Haiku("dose it equal to 5?", "some more words here and here, yup", "and then like 5 here");
    var line3Words = haiku.line3.split(" ");
    expect(line3Words.length).toEqual(5);
  })
});