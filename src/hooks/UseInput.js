import React, { useState } from 'react';

/* valueDator : 검증자 */
const useInput = (initialValue, maxLen, notIncluded) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let maxLenUpdate = true;
    let notIncludedUpdate = true;

    //검증 체크후 true 일때만 리렌더
    if (typeof maxLen === 'function') {
      maxLenUpdate = maxLen(value);
    }
    if (typeof notIncluded === 'function') {
      notIncludedUpdate = notIncluded(value);
    }
    if (maxLenUpdate && notIncludedUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function UseInput() {
  //검증할 항목 설정
  const maxLen = (value) => value.length <= 10;
  const notIncluded = (value) => !value.includes('@');
  const name = useInput('Mr.', maxLen, notIncluded);
  return (
    <div className='use-input'>
      {/* <h2>검증 기능을 가진 input function 이다.</h2>
      <ul>
        <li>기능1 : Mr. 라는 이니셜이 기본값으로 등록된다.</li>
        <li>기능2 : 10글자 이상 적을수 없다.</li>
        <li>
          <pre>
            <code class='code'>
              {`const maxLen = (value) => !value.includes('@')`}
            </code>
          </pre>
          이 코드를 넣으면 '@'를 포함하고 있을 때 업데이트를 하지 않는 기능을
          추가할 수 있다.
        </li>
        <li>의문점 : 왜 3가지 기능이 동시에 적용은 안되는지 모르겠다.</li>
        <li>
          6/19일 회고록 : 개발자가 되고 주말에 공부하며왜 안되는지 알았고,
          코드를 수정하니 바로작동되었다.
        </li>
      </ul> */}
      <input placeholder='Name' {...name} />
    </div>
  );
}

export default UseInput;
