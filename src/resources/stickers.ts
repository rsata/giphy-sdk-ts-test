// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GifsAPI from './gifs';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Stickers extends APIResource {
  /**
   * Returns a random GIF, limited by tag. Excluding the tag parameter will return a
   * random GIF from the GIPHY catalog.
   */
  getRandom(
    query: StickerGetRandomParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StickerGetRandomResponse> {
    return this._client.get('/stickers/random', { query, ...options });
  }

  /**
   * Fetch Stickers currently trending online. Hand curated by the GIPHY editorial
   * team. Returns 25 results by default.
   */
  getTrending(
    query: StickerGetTrendingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StickerGetTrendingResponse> {
    return this._client.get('/stickers/trending', { query, ...options });
  }

  /**
   * Replicates the functionality and requirements of the classic GIPHY search, but
   * returns animated stickers rather than GIFs.
   */
  search(query: StickerSearchParams, options?: RequestOptions): APIPromise<StickerSearchResponse> {
    return this._client.get('/stickers/search', { query, ...options });
  }

  /**
   * The translate API draws on search, but uses the GIPHY `special sauce` to handle
   * translating from one vocabulary to another. In this case, words and phrases to
   * GIFs.
   */
  translate(query: StickerTranslateParams, options?: RequestOptions): APIPromise<StickerTranslateResponse> {
    return this._client.get('/stickers/translate', { query, ...options });
  }
}

export interface StickerGetRandomResponse {
  data?: GifsAPI.Gif;

  /**
   * The Meta Object contains basic information regarding the request, whether it was
   * successful, and the response given by the API. Check `responses` to see a
   * description of types of response codes the API might give you under different
   * cirumstances.
   */
  meta?: GifsAPI.Meta;
}

export interface StickerGetTrendingResponse {
  data?: Array<GifsAPI.Gif>;

  /**
   * The Meta Object contains basic information regarding the request, whether it was
   * successful, and the response given by the API. Check `responses` to see a
   * description of types of response codes the API might give you under different
   * cirumstances.
   */
  meta?: GifsAPI.Meta;

  /**
   * The Pagination Object contains information relating to the number of total
   * results available as well as the number of results fetched and their relative
   * positions.
   */
  pagination?: GifsAPI.Pagination;
}

export interface StickerSearchResponse {
  data?: Array<GifsAPI.Gif>;

  /**
   * The Meta Object contains basic information regarding the request, whether it was
   * successful, and the response given by the API. Check `responses` to see a
   * description of types of response codes the API might give you under different
   * cirumstances.
   */
  meta?: GifsAPI.Meta;

  /**
   * The Pagination Object contains information relating to the number of total
   * results available as well as the number of results fetched and their relative
   * positions.
   */
  pagination?: GifsAPI.Pagination;
}

export interface StickerTranslateResponse {
  data?: GifsAPI.Gif;

  /**
   * The Meta Object contains basic information regarding the request, whether it was
   * successful, and the response given by the API. Check `responses` to see a
   * description of types of response codes the API might give you under different
   * cirumstances.
   */
  meta?: GifsAPI.Meta;
}

export interface StickerGetRandomParams {
  /**
   * Filters results by specified rating.
   */
  rating?: string;

  /**
   * Filters results by specified tag.
   */
  tag?: string;
}

export interface StickerGetTrendingParams {
  /**
   * The maximum number of records to return.
   */
  limit?: number;

  /**
   * An optional results offset.
   */
  offset?: number;

  /**
   * Filters results by specified rating.
   */
  rating?: string;
}

export interface StickerSearchParams {
  /**
   * Search query term or prhase.
   */
  q: string;

  /**
   * Specify default language for regional content; use a 2-letter ISO 639-1 language
   * code.
   */
  lang?: string;

  /**
   * The maximum number of records to return.
   */
  limit?: number;

  /**
   * An optional results offset.
   */
  offset?: number;

  /**
   * Filters results by specified rating.
   */
  rating?: string;
}

export interface StickerTranslateParams {
  /**
   * Search term.
   */
  s: string;
}

export declare namespace Stickers {
  export {
    type StickerGetRandomResponse as StickerGetRandomResponse,
    type StickerGetTrendingResponse as StickerGetTrendingResponse,
    type StickerSearchResponse as StickerSearchResponse,
    type StickerTranslateResponse as StickerTranslateResponse,
    type StickerGetRandomParams as StickerGetRandomParams,
    type StickerGetTrendingParams as StickerGetTrendingParams,
    type StickerSearchParams as StickerSearchParams,
    type StickerTranslateParams as StickerTranslateParams,
  };
}
