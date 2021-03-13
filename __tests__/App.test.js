import React from 'react';
import {cleanup} from '@testing-library/react';
import { mount } from 'enzyme';
import { SearchBox } from '../src/components/search-box/search-box.component';

afterEach(cleanup);
// Support for the experimental syntax 'jsx' isn't currently enabled

// it('renders text input with label (default type)', () => {
//   const wrapper = mount(<SearchBox onSearchChange="test case" />);
//   const input = wrapper.find('input');
//   expect(input.prop('type')).toEqual('search');
//   expect(input.prop('onChange')).toEqual('test case');
// });
