import React, { useState } from 'react';

/* valueDator : 검증자 */
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function UseInput() {
  const maxLen = (value) => value.length <= 10;
  // const maxLen = (value) => !value.includes('@');
  const name = useInput('Mr.', maxLen);
  return (
    <div className='use-input'>
      <h2>검증 기능을 가진 input function 이다.</h2>
      <ul>
        <li>기능1 : Mr. 라는 이니셜이 기본값으로 등록된다.</li>
        <li>기능2 : 10글자 이상 적을수 없다.</li>
        <li>
          <pre>
            <code class='code'>
              const maxLen = (value) => !value.includes('@')
            </code>
          </pre>
          이 코드를 넣으면 '@'를 포함하고 있을 때 업데이트를 하지 않는 기능을
          추가할 수 있다.
        </li>
        <li>의문점 : 왜 3가지 기능이 동시에 적용은 안되는지 모르겠다.</li>
      </ul>
      <input placeholder='Name' {...name} />
    </div>
  );
}

export default UseInput;
