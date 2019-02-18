import { PostFilterPipe } from '../../posts/post-filter.pipe';

describe('PostFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PostFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
