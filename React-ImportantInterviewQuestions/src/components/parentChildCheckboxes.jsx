import React, { useState } from 'react';

const NestedCheckboxes = () => {
  const [checkboxes, setCheckboxes] = useState({
    parent: {
      checked: false,
      children: [
        { id: 1, checked: false, label: 'Child 1' },
        { id: 2, checked: false, label: 'Child 2' },
        { id: 3, checked: false, label: 'Child 3' },
      ],
    },
  });

  const handleParentChange = () => {
    const newChecked = !checkboxes.parent.checked;
    setCheckboxes({
      parent: {
        ...checkboxes.parent,
        checked: newChecked,
        children: checkboxes.parent.children.map(child => ({
          ...child,
          checked: newChecked,
        })),
      },
    });
  };

  const handleChildChange = (id) => {
    const newChildren = checkboxes.parent.children.map(child => {
      if (child.id === id) {
        return { ...child, checked: !child.checked };
      }
      return child;
    });

    const allChildrenChecked = newChildren.every(child => child.checked);
    const someChildrenChecked = newChildren.some(child => child.checked);

    setCheckboxes({
      parent: {
        ...checkboxes.parent,
        checked: allChildrenChecked,
        indeterminate: !allChildrenChecked && someChildrenChecked,
        children: newChildren,
      },
    });
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={checkboxes.parent.checked}
          onChange={handleParentChange}
        />
        Parent Checkbox
      </div>
      <div style={{ paddingLeft: '20px' }}>
        {checkboxes.parent.children.map(child => (
          <div key={child.id}>
            <input
              type="checkbox"
              checked={child.checked}
              onChange={() => handleChildChange(child.id)}
            />
            {child.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export {NestedCheckboxes} ;
