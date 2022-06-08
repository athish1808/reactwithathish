//toBe
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
    console.log('toBe is used');
  });

//toEqual
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
    console.log('toEqual is passed');
});

//toBeNull,toBeDefined,toBeUndefined,toBeTruthy,toBeFalsy
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    console.log('toBeNull is passed')

    expect(n).toBeDefined();
    console.log('toBeDefined is passed')

    expect(n).not.toBeUndefined();
    console.log('toBeUndefined is passed')

    expect(n).not.toBeTruthy();
    console.log('toBeTruthy is passed')

    expect(n).toBeFalsy();
    console.log('toBeFalsy is passed')

  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    console.log('toBeNull is passed')

    expect(z).toBeDefined();
    console.log('toBeDefined is passed')

    expect(z).not.toBeUndefined();
    console.log('toBeUndefined is passed')

    expect(z).not.toBeTruthy();
    console.log('toBeTruthy is passed')

    expect(z).toBeFalsy();
    console.log('toBeFalsy is passed')

  });

  //not.toBe
  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
        console.log('not toBe in add is passed')
      }
    }
  });

  //toBeGreater,toBegreaterthanorEqual,toBeLessthan,toBelessthanorequal
  test('four plus four', () => {
    const value = 4 + 4;
    expect(value).toBeGreaterThan(6);
    expect(value).toBeGreaterThanOrEqual(7.5);
    expect(value).toBeLessThan(9);
    expect(value).toBeLessThanOrEqual(8.5);
    console.log('toBeGreater,toBegreaterthanorEqual,toBeLessthan,toBelessthanorequal is passed for 4+4')
  })

  //toBeCloseTo
test('adding floating point numbers', () => {
    const value = 0.1 + 0.4;
    expect(value).toBeCloseTo(0.5); // toBe will not work in decimals for Rounding so toBeCloseTo is used
    console.log('toBeClosed is worked')
});

//toMatch
test('there is no B in Athish', () => {
    expect('Athish').not.toMatch(/B/);
    console.log('B is not found in Athish');
  });
  
  test('but there is a "age" in package', () => {
    expect('package').toMatch(/age/);
    console.log('age is present in package');
  });

//toContain array&iterable
const playerList = [
    'virat',
    'Raina',
    'Dhoni',
    'Jaddu',
    'Rahul',
    'hardik',

  ];
  
  test('the playersList has Dhoni', () => {
    expect(playerList).toContain('Dhoni');
    expect(new Set(playerList)).toContain('Dhoni');
    console.log('Dhoni is there in playerList');
  });