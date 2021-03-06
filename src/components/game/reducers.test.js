import { GAME_NEW, GAME_END, word, scores } from './reducers';

describe('word tests:', () => {

  it('defaults to empty string', () => {
    const state = word('', {});
    expect(state).toEqual('');
  });

  it('sets a word', () => {
    const state = word('', { type: GAME_NEW, payload: { word: 'a' } });
    expect(state).toEqual('a');
  });

});

describe('scores tests:', () => {
  it('sets a endgame score', () => {
    const state = scores([], { type: GAME_END, payload: { player: 'me', score: 20 } });
    expect(state).toEqual([{ player: 'me', score: 20 }]);
  });
});