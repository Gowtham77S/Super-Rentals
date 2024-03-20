import Component from '@glimmer/component';
import { service } from '@ember/service';
const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
  @service router;
  get currentURL() {
    // return window.location.href;
    console.log('current url');
    console.log(this.router.currentURL, window.location.origin);
    return new URL(this.router.currentURL, window.location.origin);
  }

  get shareURL() {
    let url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentURL);

    if (this.args.text) {
      console.log(url.searchParams.set('text', this.args.text));
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      console.log(url.searchParams.set('hashtags', this.args.hashtags));
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      console.log(url.searchParams.set('via', this.args.via));
      url.searchParams.set('via', this.args.via);
    }
    console.log(url);
    return url;
  }
}
