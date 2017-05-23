import ElephantContainer from '../../src/containers/ElephantContainer';
import Elephant from '../../src/components/Elephant';

describe('ElephantContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ElephantContainer />);
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ babyElephant: false });
  })

  it('should render an Elephant Component', () => {
    expect(wrapper.find(Elephant)).toBePresent();
  });

  it('should render the Elephant Component with specific props when babyElephant is false', () => {
    expect(wrapper.find(Elephant).props()).toEqual({
      image: "https://animalcorner.co.uk/wp-content/uploads/2015/02/elephant-1.jpg",
      onClick: jasmine.any(Function),
      text: 'that\'s a big elephant'
    });
  });

  it('should render the Elephant Component with specific props when babyElephant is true', () => {
    wrapper.setState({ babyElephant: true });
    expect(wrapper.find(Elephant).props()).toEqual({
      image: "http://akns-images.eonline.com/eol_images/Entire_Site/201438/rs_560x415-140408154504-1024.baby-elephant-grass.ls.4814.jpg",
      onClick: jasmine.any(Function),
      text: "Look at the baby elephant!"
    })
  })


  it('should render the tree of the Elephant component', () => {
    let pageText = wrapper.text();

    expect(pageText).toMatch('that\'s a big elephant');
  });

});
