import Elephant from '../../src/components/Elephant';

describe('Elephant', () => {
  let image,
      text,
      wrapper,
      onClickSpy;

  beforeEach(() => {
    onClickSpy = jasmine.createSpy('onClick Spy')
    wrapper = mount(
      <Elephant
        image="http://fakeurl.com/elephant"
        text="I am an Elephant!"
        onClick={onClickSpy}
      />
    );
  });

  it('should render an h1 tag', () => {
    expect(wrapper.find('h1')).toBePresent();
  });

  it('should render an h1 tag with the text property value', () => {
    expect(wrapper.find('h1').text()).toBe('I am an Elephant!');
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://fakeurl.com/elephant',
      height: '400',
      width: '600'
    });
  });

  it('should invoke the onClick function from props when clicked', () => {
    wrapper.simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  })
});
