import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import BottomBar from './bottom-bar.jsx';

// configure({ adapter: new Adapter() });

const open = [true, false];
const up = [true, false];

const testRender = function(openStatus, upStatus) {
  it('bottom bar renders correctly for state: ' + openStatus + ' and ' + upStatus, () => {
    const temp = renderer
      .create(<BottomBar open={openStatus} up={upStatus} balance={59} />)
      .toJSON();
    expect(temp).toMatchSnapshot();
  });
};

for (var openStatus in open) {
  for (var upStatus in up) {
    testRender(openStatus, upStatus);
  }
};
