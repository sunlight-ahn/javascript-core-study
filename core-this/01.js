/*
자바스크립트 this는 상황에 따라 많이 바뀌기 때문에 혼동스럽습니다.
즉, 호출되는 상황(위치)에 따라서 달라지기 때문에 유형별로 이해해야합니다.

1.전역공간에서의 this는 "전역객체(window/global)"입니다.
2.함수(function)로 호출시 this는 "전역객체(window/global)"입니다.
3.메서드(function)로 호출시 this는 "메서드 호출주체"입니다. 
-점표기법으로 호출시 점 앞의 객체를 의미합니다.
4.콜백에서 호출시 기본은 "전역객체(window/global)"입니다. 
단, 콜백 종류마다 다르고, 호출 방식(call/apply, bind)에 따라 this는 달라집니다.
5.생성자 함수 호출시 this는 "인스턴스"입니다.
*/

/*전역공간의 this */
console.log(this);
console.log(this === window); //true

/* 함수 호출시 this */
var core = function(param) {
    console.log(this, param); //window{...}
    return this;
};
console.log(core(1) === window); // true

/* 메서스 호출시 this */
var core = {
    method: function (param) {
        console.log(this, param); //{method: f} 1
        return this;
    }
};
console.log(core.method(1) === core); //true
