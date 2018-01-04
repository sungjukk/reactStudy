// Map 생성
var Map = Immutable.Map;

// 객체 내부에 있는 객체들도 Map로 감싸야 함
var data = Map({
    a: 1,
    b: 2,
    c: Map({
        d: 3,
        e: 4,
        f: 5
    })
})

// fromJS 생성
var fromJS = Immutable.fromJS;

// fromJS는 내부의 객체들도 Map로 변환해줌
var fData = fromJS({
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: 5
    }
})

// Map으로 만든건 일반 객체가 아니므로 그대로 프린트 할 수 없음
console.log(data.a); // undefined

// 자바스크립트 객체로 변환
var jData = data.toJS();

// 특정 키 값 불러오기
var a = data.get('a'); // 1

// 깊숙한 값 불러오기
var d = data.getIn(['c','d']); // 3

// 값 설정하기
var newData = data.set('a',4); // set을 해도 data가 변하지 않음. newData에 변화된 새 Map 생성

// 깊숙한 값 설정
var newData = data.setIn(['c','d'],10);

// 여러개 값 설정(mergeIn)
var newData = data.mergeIn(['c'],{'d':10, 'e':10}); // c.f의 값은 유지

// 여러개 값 설정(setIn)
var newData = data.setIn(['c','d'], 10).setIn(['c','e'], 10);

// 최상위에서 merge
var newData = data.merge({'a':10, 'b':10});


// set 또는 merge 중 어떤걸 선택할 지는 상황에 맞춰서 하면 되지만 성능상으로는 set을 여러번 하는것이 더 빠르다

// 전체 객체를 업데이트 하는 경우 merge보다는 set으로
var newData = data.set('c',Map({d:10, e:10, f:10}));


// List : 배열 대신 사용되는 데이터 구조
// 배열과 동일하게 map,filter,sort,push,pop 함수를 내장
// 내장함수들이 실행되면 또 다른 list를 반환
// react component는 Immutable의 list와 호환이 되기 때문에 이를 map해도 컴포넌트로 렌더링 해 줄 수 있다.

// List 생성
var List = Immutable.List;

var list = List([0,1,2,3,4]);


// 객체들의 배열이라면 다음과 같이 선언해야 추후에 get, set등을 할 수 있다.
var MapList = Immutable.List;
var Map = Immutable.Map;
var fromJS = Immutable.fromJS;

var mapList = List([
    Map({value : 1}),
    Map({value : 2})
]);

var fromJSList = fromJS([
    {value : 1},
    {value : 2}
]);

// Map와 동일하게 List도 toJS를 통해 일반 배열로 반환 가능
var jList = list.toJS();

// 값 가져오기
var listData = list.get(0);

// 0번째 아이템의 value값 읽어오기
mapList.getIn([0,'value']);

// 값 수정하기
var newList = mapList.setIn([0,'value'], 10);

// 값을 업데이트 시 기존 값을 참조해야 하는 경우 update 사용
var newList = mapList.update(
    1,
    item => item.set('value', item.get('value') * 5)
);

// update 사용하지 않고 기존 값 참조 후 업데이트
var newList = mapList.setIn([1,'value'],list.getIn([1,'value']) * 5);

// 값 변경
list.set(0,{value : 10});

// 값 추가
// Array처럼 기존 List를 수정하는건 아님
var newList = list.push(Map({value : 3}));

// List 맨 앞에 값을 추가시키는 경우
var newList = list.unshift(Map({value : 0}));

// index가 1인 값 제거하기
var newList = list.delete(1);

// 제일 마지막 index 값 제거
var newList = list.pop();

// List 크기 가져오기
console.log(mapList.size);

// 비어있는지 확인하기 true & false 반환
console.log(mapList.isEmpty());