/* eslint-disable prefer-template */
import assert from 'assert';

import { objectToGetParams } from './utils';

export function email(subject, body) {
  assert(subject, 'email.subject');
  assert(body, 'email.body');

  return 'mailto:' + objectToGetParams({ subject, body });
}

export function twitter(url, { title, via, hashtags = [] }) {
  assert(url, 'twitter.url');
  assert(Array.isArray(hashtags), 'twitter.hashtags is not an array');

  return 'https://twitter.com/share' + objectToGetParams({
    url,
    text: title,
    via,
    hashtags: hashtags.join(','),
  });
}

export function facebook(url, { title, description, picture, hashtag }) {
  assert(url, 'facebook.url');

  return 'https://facebook.com/sharer.php' + objectToGetParams({
    u: url,
    title,
    description,
    picture,
    hashtag,
  });
}


export function facebookMessenger(url, { appId, caption, description, name, picture }) {
    assert(url, 'facebook.url');

    return 'https://www.facebook.com/dialog/send' + objectToGetParams({
        display: 'popup',
        app_id: appId,
        link: url,
        caption,
        description,
        name,
        picture
    });
}


export function googlePlus(url) {
  assert(url, 'googlePlus.url');

  return 'https://plus.google.com/share' + objectToGetParams({ url });
}

export function linkedin(url, { title, description }) {
  assert(url, 'linkedin.url');

  return 'https://linkedin.com/shareArticle' + objectToGetParams({
    url,
    title,
    summary: description,
  });
}

export function pinterest(url, { media, description }) {
  assert(url, 'pinterest.url');
  assert(media, 'pinterest.media');

  return 'https://pinterest.com/pin/create/button/' + objectToGetParams({
    url,
    media,
    description,
  });
}

export function vk(url, { title, description, image }) {
  assert(url, 'vk.url');

  return 'https://vk.com/share.php' + objectToGetParams({
    url,
    title,
    description,
    image,
  });
}
