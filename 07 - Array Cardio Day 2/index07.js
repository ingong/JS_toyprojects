// ## Array Cardio Day 2

    const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
    ];

    const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // Array.prototype.every() // is everyone 19 or older?
    const isAdult = people.some(function(person){
    const age = (new Date()).getFullYear() - person.year;
    if (age >= 19){
        return true;
    }
    })
    
    const isAdults = people.some(person => (new Date()).getFullYear() - person.year >= 19)
    console.log(isAdults);
    
    const allAdults = people.every(person => (new Date()).getFullYear() - person.year >= 19)
    console.log(allAdults);

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const comment = comments.find(function(comment){
        if(comment.id === 823423){
            return true
        }
    })
    console.log(comment);
    const newcomment = comments.find(comment => comment.id === 823423)
    console.log(newcomment)

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);



    /// splice, slice
    const a = comments.splice(index, 2);
    console.log(a);
    // 새로운 배열 만들기
    const news = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
    ];
    console.table(news);

    const arr = [1, 2, 3, 4]
    // 인덱스 1로부터 2개 제거 후 20, 30 삽입
    // result 에는 제거된 2, 3
    // arr 에는 변현된 1, 20, 30, 4
    // ! 원본이 변형된다
    const result = arr.splice(1, 2, 20, 30);
    
    // slice 
    const arr2 = [1, 2, 3];
    // arr[0] 부터 arr[1] 까지 arr[1] 미포함
    // ! 원본은 변형되지 않는다 
    arr2.slice(0, 1) 
