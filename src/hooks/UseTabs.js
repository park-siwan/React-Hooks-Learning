import React, { useState } from 'react';
// import React from 'react';
const content = [
  {
    tab: 'Section 1',
    content: '첫번째 컨텐츠',
  },
  {
    tab: 'Section 2',
    content: '두번째 컨텐츠',
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

function UseTabs() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className='use-tabs'>
      <h2>useState를 활용해 useTabs를 만들었다.</h2>
      <div>{currentItem.content}</div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <h4>배운점</h4>
      <ul>
        <li>최상위(at the Top Level) 에서만 Hook을 호출해야한다.</li>
        <li>
          render function이 없다고 render가 안되는게 아니다. 이 모든게 다시
          re-render 했다는걸 증명해준다.
        </li>
      </ul>
    </div>
  );
}

export default UseTabs;
