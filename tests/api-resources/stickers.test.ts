// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Giphy from 'giphy';

const client = new Giphy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stickers', () => {
  // skipped: tests are disabled for the time being
  test.skip('getRandom', async () => {
    const responsePromise = client.stickers.getRandom();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getRandom: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stickers.getRandom({ rating: 'rating', tag: 'tag' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Giphy.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getTrending', async () => {
    const responsePromise = client.stickers.getTrending();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getTrending: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stickers.getTrending(
        { limit: 0, offset: 0, rating: 'rating' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Giphy.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('search: only required params', async () => {
    const responsePromise = client.stickers.search({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('search: required and optional params', async () => {
    const response = await client.stickers.search({
      q: 'q',
      lang: 'lang',
      limit: 0,
      offset: 0,
      rating: 'rating',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('translate: only required params', async () => {
    const responsePromise = client.stickers.translate({ s: 's' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('translate: required and optional params', async () => {
    const response = await client.stickers.translate({ s: 's' });
  });
});
