global.fetch = jest.fn(() => Promise.resolve(new Response(null)));

import { clerkClient } from '../clerkClient';

describe('clerkClient', () => {
  it('should pass version package to userAgent', async () => {
    const resolvedClerkClient = await clerkClient();

    await resolvedClerkClient.users.getUser('user_test');

    expect(global.fetch).toBeCalled();
    expect((global.fetch as any).mock.calls[0][1].headers).toMatchObject({
      Authorization: 'Bearer TEST_SECRET_KEY',
      'Content-Type': 'application/json',
      'User-Agent': '@clerk/nextjs@0.0.0-test',
    });
  });
});
