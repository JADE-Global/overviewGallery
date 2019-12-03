import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// adds fetch support in node
import fetch from 'node-fetch';
global.fetch = fetch;