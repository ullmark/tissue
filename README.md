# Tissue
Tissue is an application I started coding while having some free time to
kill (on a train). It's supposed to be a super minimalistic wrapper around github
issues through the [Github Api v3][gapi]. The idea was to make the
application entirely client side, but for OAuth token, it uses
[SocketStream][] Pub/Sub.

Mostly it's about playing around with [Nodejs][node], [SocketStream][], [Backbone][] and
some other stuff like [Docco][]

Annotated source can be found [here][docs].

[gapi]: http://developer.github.com/v3/
[node]: http://nodejs.org
[SocketStream]: https://github.com/socketstream/socketstream
[Backbone]: http://backbonejs.org/
[Docco]: https://github.com/jashkenas/docco
[docs]: /docs
