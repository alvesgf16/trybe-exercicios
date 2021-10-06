const getRepos = require('./getRepos');

describe('Given a GitHub URL', () => {
  it('checks that the wanted repos are in the list', async () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    const repos = await getRepos(url);
    expect(repos).toContain('sd-01-week4-5-project-todo-list');
    expect(repos).toContain('sd-01-week4-5-project-meme-generator')
  });
});