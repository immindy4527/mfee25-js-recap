let animals = [
    { id: 'a1', en: 'cat', cn: '貓', num: 30 },
    { id: 'a2', en: 'dog', cn: '狗', num: 10 },
    { id: 'a3', en: 'rabbit', cn: '兔', num: 5 },
    { id: 'a4', en: 'bear', cn: '熊', num: 15 },
    { id: 'a5', en: 'mouse', cn: '鼠', num: 20 }
  ];

  let findA10Index = animals.map((animal, index) => {
      let animals = {...animal}  //複製展開原本的內容
        animals.size = 'small'  //加一個屬性
        return animals  //回傳塞進去空陣列
  })
  console.log(findA10Index);

//   [
//     { id: 'a1', en: 'cat', cn: '貓', num: 30, size: 'small' },
//     { id: 'a2', en: 'dog', cn: '狗', num: 10, size: 'small' },
//     { id: 'a3', en: 'rabbit', cn: '兔', num: 5, size: 'small' },
//     { id: 'a4', en: 'bear', cn: '熊', num: 15, size: 'small' },
//     { id: 'a5', en: 'mouse', cn: '鼠', num: 20, size: 'small' }
//   ]