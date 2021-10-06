const getUserName = require('./getUserName');

describe('getUserName - promise', () => {
  describe('When the user is found', () => {
    it('returns the user name', async () => {
      await expect(getUserName(1)).resolves.toBe('Mark');
    });
  });

  describe("When the user isn't found", () => {
    it('returns an error', async () => {
      await expect(getUserName(3)).rejects.toEqual(new Error('User with 3 not found.'));
    });
  });
});