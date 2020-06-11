Feature('Input To-do');

Scenario('할 일을 적지 않고 추가 버튼을 누르면 "할 일을 적어주세요."가 보인다. ', (I) => {
  I.amOnPage('/');
  I.click('추가');
  I.see('할 일을 적어주세요.');
});
