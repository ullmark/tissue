# Tissue
Tissue is an application I started coding while having some free time to
kill (on a train). It's supposed to be a super minimalistic wrapper around github
issues through the [Github Api v3][gapi]. The idea was to make the
application entirely client side, but for OAuth token, it uses
[SocketStream][] Pub/Sub.

Mostly it's about playing around with [Nodejs][node], [SocketStream][], [Backbone][] and
some other stuff like @justindujardin branch of [Docco][].

## Documentation
Annotated source can be found [here][docs].

## Running the application
To run the application up and running do the following

1. Follow the instructions and install [SocketStream][]
2. Clone the repository `git clone git://github.com/ullmark/tissue.git`
3. Install dependencies `npm install`
4. Link [SocketStream][] `npm link socketstream`

[gapi]: http://developer.github.com/v3/
[node]: http://nodejs.org
[SocketStream]: https://github.com/socketstream/socketstream
[Backbone]: http://backbonejs.org/
[Docco]: https://github.com/justindujardin/docco
[docs]: https://github.com/ullmark/tissue/tree/master/docs
