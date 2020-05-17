import React from 'react';
import renderer from 'react-test-renderer';
import ItemTree from '../components/ItemTree';

const oneItemList = [{"id":1,"label":"List item 1","parent_id":0}];
const itemList = [
  {"id":1,"label":"List item 1","parent_id":0},
  {"id":2,"label":"List item 2","parent_id":0},
  {"id":3,"label":"List item 3","parent_id":0},
  {"id":4,"label":"List item 4","parent_id":0},
  {"id":5,"label":"List item 5","parent_id":1},
  {"id":6,"label":"List item 6","parent_id":1},
  {"id":7,"label":"List item 7","parent_id":1},
  {"id":8,"label":"List item 8","parent_id":7},
  {"id":9,"label":"List item 9","parent_id":7}
];

describe('ItemTree', () => {

  it('should renders one item list', () => {    
    const tree = renderer
      .create(<ItemTree itemList={oneItemList} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('should renders sorted one item list', () => {
    const tree = renderer
      .create(<ItemTree itemList={oneItemList} sort />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('should renders item list', () => {
    const tree = renderer
      .create(<ItemTree itemList={itemList} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('should renders sorted item list', () => {
    const tree = renderer
      .create(<ItemTree itemList={itemList} sort />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders empty item list', () => {
    const tree = renderer
      .create(<ItemTree itemList={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});