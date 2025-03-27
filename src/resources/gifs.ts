// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GifsAPI from './gifs';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Gifs extends APIResource {
  /**
   * Returns a GIF given that GIF's unique ID
   */
  retrieve(gifID: number, options?: RequestOptions): APIPromise<GifRetrieveResponse> {
    return this._client.get(path`/gifs/${gifID}`, options);
  }

  /**
   * A multiget version of the get GIF by ID endpoint.
   */
  list(query: GifListParams | null | undefined = {}, options?: RequestOptions): APIPromise<GifListResponse> {
    return this._client.get('/gifs', { query, ...options });
  }

  /**
   * Returns a random GIF, limited by tag. Excluding the tag parameter will return a
   * random GIF from the GIPHY catalog.
   */
  getRandom(
    query: GifGetRandomParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GifGetRandomResponse> {
    return this._client.get('/gifs/random', { query, ...options });
  }

  /**
   * Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.
   * The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25
   * results by default.
   */
  getTrending(
    query: GifGetTrendingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GifGetTrendingResponse> {
    return this._client.get('/gifs/trending', { query, ...options });
  }

  /**
   * Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and
   * ignored. Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling
   * or american+psycho.
   */
  search(query: GifSearchParams, options?: RequestOptions): APIPromise<GifSearchResponse> {
    return this._client.get('/gifs/search', { query, ...options });
  }

  /**
   * The translate API draws on search, but uses the GIPHY `special sauce` to handle
   * translating from one vocabulary to another. In this case, words and phrases to
   * GIF
   */
  translate(query: GifTranslateParams, options?: RequestOptions): APIPromise<GifTranslateResponse> {
    return this._client.get('/gifs/translate', { query, ...options });
  }
}

export interface Gif {
  /**
   * This GIF's unique ID
   */
  id?: string;

  /**
   * The unique bit.ly URL for this GIF
   */
  bitly_url?: string;

  /**
   * Currently unused
   */
  content_url?: string;

  /**
   * The date this GIF was added to the GIPHY database.
   */
  create_datetime?: string;

  /**
   * A URL used for embedding this GIF
   */
  embded_url?: string;

  /**
   * An array of featured tags for this GIF (Note: Not available when using the
   * Public Beta Key)
   */
  featured_tags?: Array<string>;

  /**
   * An object containing data for various available formats and sizes of this GIF.
   */
  images?: Gif.Images;

  /**
   * The creation or upload date from this GIF's source.
   */
  import_datetime?: string;

  /**
   * The MPAA-style rating for this content. Examples include Y, G, PG, PG-13 and R
   */
  rating?: string;

  /**
   * The unique slug used in this GIF's URL
   */
  slug?: string;

  /**
   * The page on which this GIF was found
   */
  source?: string;

  /**
   * The URL of the webpage on which this GIF was found.
   */
  source_post_url?: string;

  /**
   * The top level domain of the source URL.
   */
  source_tld?: string;

  /**
   * An array of tags for this GIF (Note: Not available when using the Public Beta
   * Key)
   */
  tags?: Array<string>;

  /**
   * The date on which this gif was marked trending, if applicable.
   */
  trending_datetime?: string;

  /**
   * Type of the gif. By default, this is almost always gif
   */
  type?: 'gif';

  /**
   * The date on which this GIF was last updated.
   */
  update_datetime?: string;

  /**
   * The unique URL for this GIF
   */
  url?: string;

  /**
   * The User Object contains information about the user associated with a GIF and
   * URLs to assets such as that user's avatar image, profile, and more.
   */
  user?: Gif.User;

  /**
   * The username this GIF is attached to, if applicable
   */
  username?: string;
}

export namespace Gif {
  /**
   * An object containing data for various available formats and sizes of this GIF.
   */
  export interface Images {
    /**
     * Data surrounding a version of this GIF downsized to be under 2mb.
     */
    downsized?: GifsAPI.Image;

    /**
     * Data surrounding a version of this GIF downsized to be under 8mb.
     */
    downsized_large?: GifsAPI.Image;

    /**
     * Data surrounding a version of this GIF downsized to be under 5mb.
     */
    downsized_medium?: GifsAPI.Image;

    /**
     * Data surrounding a version of this GIF downsized to be under 200kb.
     */
    downsized_small?: GifsAPI.Image;

    /**
     * Data surrounding a static preview image of the downsized version of this GIF.
     */
    downsized_still?: GifsAPI.Image;

    /**
     * Data surrounding versions of this GIF with a fixed height of 200 pixels. Good
     * for mobile use.
     */
    fixed_height?: GifsAPI.Image;

    /**
     * Data surrounding versions of this GIF with a fixed height of 200 pixels and the
     * number of frames reduced to 6.
     */
    fixed_height_downsampled?: GifsAPI.Image;

    /**
     * Data surrounding versions of this GIF with a fixed height of 100 pixels. Good
     * for mobile keyboards.
     */
    fixed_height_small?: GifsAPI.Image;

    /**
     * Data surrounding a static image of this GIF with a fixed height of 100 pixels.
     */
    fixed_height_small_still?: GifsAPI.Image;

    /**
     * Data surrounding a static image of this GIF with a fixed height of 200 pixels.
     */
    fixed_height_still?: GifsAPI.Image;

    /**
     * Data surrounding versions of this GIF with a fixed width of 200 pixels. Good for
     * mobile use.
     */
    fixed_width?: GifsAPI.Image;

    /**
     * Data surrounding versions of this GIF with a fixed width of 200 pixels and the
     * number of frames reduced to 6.
     */
    fixed_width_downsampled?: GifsAPI.Image;

    /**
     * Data surrounding versions of this GIF with a fixed width of 100 pixels. Good for
     * mobile keyboards.
     */
    fixed_width_small?: GifsAPI.Image;

    /**
     * Data surrounding a static image of this GIF with a fixed width of 100 pixels.
     */
    fixed_width_small_still?: GifsAPI.Image;

    /**
     * Data surrounding a static image of this GIF with a fixed width of 200 pixels.
     */
    fixed_width_still?: GifsAPI.Image;

    /**
     * Data surrounding a version of this GIF set to loop for 15 seconds.
     */
    looping?: GifsAPI.Image;

    /**
     * Data surrounding the original version of this GIF. Good for desktop use.
     */
    original?: GifsAPI.Image;

    /**
     * Data surrounding a static preview image of the original GIF.
     */
    original_still?: GifsAPI.Image;

    /**
     * Data surrounding a version of this GIF in .MP4 format limited to 50kb that
     * displays the first 1-2 seconds of the GIF.
     */
    preview?: GifsAPI.Image;

    /**
     * Data surrounding a version of this GIF limited to 50kb that displays the first
     * 1-2 seconds of the GIF.
     */
    preview_gif?: GifsAPI.Image;
  }

  /**
   * The User Object contains information about the user associated with a GIF and
   * URLs to assets such as that user's avatar image, profile, and more.
   */
  export interface User {
    /**
     * The URL for this user's avatar image.
     */
    avatar_url?: string;

    /**
     * The URL for the banner image that appears atop this user's profile page.
     */
    banner_url?: string;

    /**
     * The display name associated with this user (contains formatting the base
     * username might not).
     */
    display_name?: string;

    /**
     * The URL for this user's profile.
     */
    profile_url?: string;

    /**
     * The Twitter username associated with this user, if applicable.
     */
    twitter?: string;

    /**
     * The username associated with this user.
     */
    username?: string;
  }
}

export interface Image {
  /**
   * The number of frames in this GIF.
   */
  frames?: string;

  /**
   * The height of this GIF in pixels.
   */
  height?: string;

  /**
   * The URL for this GIF in .MP4 format.
   */
  mp4?: string;

  /**
   * The size in bytes of the .MP4 file corresponding to this GIF.
   */
  mp4_size?: string;

  /**
   * The size of this GIF in bytes.
   */
  size?: string;

  /**
   * The publicly-accessible direct URL for this GIF.
   */
  url?: string;

  /**
   * The URL for this GIF in .webp format.
   */
  webp?: string;

  /**
   * The size in bytes of the .webp file corresponding to this GIF.
   */
  webp_size?: string;

  /**
   * The width of this GIF in pixels.
   */
  width?: string;
}

/**
 * The Meta Object contains basic information regarding the request, whether it was
 * successful, and the response given by the API. Check `responses` to see a
 * description of types of response codes the API might give you under different
 * cirumstances.
 */
export interface Meta {
  /**
   * HTTP Response Message
   */
  msg?: string;

  /**
   * A unique ID paired with this response from the API.
   */
  response_id?: string;

  /**
   * HTTP Response Code
   */
  status?: number;
}

/**
 * The Pagination Object contains information relating to the number of total
 * results available as well as the number of results fetched and their relative
 * positions.
 */
export interface Pagination {
  /**
   * Total number of items returned.
   */
  count?: number;

  /**
   * Position in pagination.
   */
  offset?: number;

  /**
   * Total number of items available.
   */
  total_count?: number;
}

export interface GifRetrieveResponse {
  data?: Gif;

  /**
   * The Meta Object contains basic information regarding the request, whether it was
   * successful, and the response given by the API. Check `responses` to see a
   * description of types of response codes the API might give you under different
   * cirumstances.
   */
  meta?: Meta;
}

export interface GifListResponse {
  data?: Array<Gif>;

  /**
   * The Meta Object contains basic information regarding the request, whether it was
   * successful, and the response given by the API. Check `responses` to see a
   * description of types of response codes the API might give you under different
   * cirumstances.
   */
  meta?: Meta;

  /**
   * The Pagination Object contains information relating to the number of total
   * results available as well as the number of results fetched and their relative
   * positions.
   */
  pagination?: Pagination;
}

export interface GifGetRandomResponse {
  data?: Gif;

  /**
   * The Meta Object contains basic information regarding the request, whether it was
   * successful, and the response given by the API. Check `responses` to see a
   * description of types of response codes the API might give you under different
   * cirumstances.
   */
  meta?: Meta;
}

export interface GifGetTrendingResponse {
  data?: Array<Gif>;

  /**
   * The Meta Object contains basic information regarding the request, whether it was
   * successful, and the response given by the API. Check `responses` to see a
   * description of types of response codes the API might give you under different
   * cirumstances.
   */
  meta?: Meta;

  /**
   * The Pagination Object contains information relating to the number of total
   * results available as well as the number of results fetched and their relative
   * positions.
   */
  pagination?: Pagination;
}

export interface GifSearchResponse {
  data?: Array<Gif>;

  /**
   * The Meta Object contains basic information regarding the request, whether it was
   * successful, and the response given by the API. Check `responses` to see a
   * description of types of response codes the API might give you under different
   * cirumstances.
   */
  meta?: Meta;

  /**
   * The Pagination Object contains information relating to the number of total
   * results available as well as the number of results fetched and their relative
   * positions.
   */
  pagination?: Pagination;
}

export interface GifTranslateResponse {
  data?: Gif;

  /**
   * The Meta Object contains basic information regarding the request, whether it was
   * successful, and the response given by the API. Check `responses` to see a
   * description of types of response codes the API might give you under different
   * cirumstances.
   */
  meta?: Meta;
}

export interface GifListParams {
  /**
   * Filters results by specified GIF IDs, separated by commas.
   */
  ids?: string;
}

export interface GifGetRandomParams {
  /**
   * Filters results by specified rating.
   */
  rating?: string;

  /**
   * Filters results by specified tag.
   */
  tag?: string;
}

export interface GifGetTrendingParams {
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

export interface GifSearchParams {
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

export interface GifTranslateParams {
  /**
   * Search term.
   */
  s: string;
}

export declare namespace Gifs {
  export {
    type Gif as Gif,
    type Image as Image,
    type Meta as Meta,
    type Pagination as Pagination,
    type GifRetrieveResponse as GifRetrieveResponse,
    type GifListResponse as GifListResponse,
    type GifGetRandomResponse as GifGetRandomResponse,
    type GifGetTrendingResponse as GifGetTrendingResponse,
    type GifSearchResponse as GifSearchResponse,
    type GifTranslateResponse as GifTranslateResponse,
    type GifListParams as GifListParams,
    type GifGetRandomParams as GifGetRandomParams,
    type GifGetTrendingParams as GifGetTrendingParams,
    type GifSearchParams as GifSearchParams,
    type GifTranslateParams as GifTranslateParams,
  };
}
