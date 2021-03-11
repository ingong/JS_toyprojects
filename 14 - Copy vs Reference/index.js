    // 값은 하나인데 변수는 여러 개일 수 있으며, 이를 참조라고 한다
    let array = ['a', 'b', 'c'];
    let ref = array;

    // 배열과 객체는 복사 후에 복사된 값을 조작하면 원본 값이 같이 변한다
    // Why? 문자열, 숫자, 불린을 제외한 객체는 다른 변수에 대입할 때 값을 복사하는 것이 아니라
    // 참조(메모리의 주소)를 복사합니다
    // 따라서 아래와 같은 방법을 통해 복사를 해야 원본에 변화를 주지 않을 수 있다
    const team = ['A', 'B', 'C', 'D'];
    console.log(team);

    const team2 = team.slice();
    team2[1] = "Z";
    console.log("team : ", team);
    console.log("team2 : ", team2);

    // 제로초님이 추천하는 방식 
    // Why? 위와 같은 방식은 arguments 같은 것으 복사할 때는 사용할 수 없기 때문이다
    const team22 = Array.prototype.slice.call(team);
    team22[1] = "Z";

    const team3 = [].concat(team);
    team3[1] = "Z";


    const team4 = [...team];
    team4[1] = "Z";


    const team5 =  Array.from(team);
    team5[1] = "Z";

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    // one way

    // or create a new array and concat the old one in

    // or use the new ES6 Spread

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    const cap2 = Object.assign({}, person, {number: 99, age: 12});
    console.log(person)
    console.log(cap2)

    const cap3 = {...person};
    cap3.name = "INSONG";
    cap3.number = 7;
    // and think we make a copy:

    const wes = {
      name : 'Wes',
      age : 100,
      social : {
        facebook : '@leeingong',
        instagram : '@leeingong'
      }
    }

    const east = Object.assign({}, wes);
    east.name = 'Brian';
    east.social.facebook = '@hahaha';

    const north = JSON.parse(JSON.stringify(east));
    north.social.facebook = '@HelloWorld';
