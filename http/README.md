HTTP
====

HTTP fetch
----------

![HTTP](img/fetch-http.png)

HTTP pipelining is activated, several requests can be sent without waiting for the first response to be fully received.

HTTP Layer
----------

![HTTP Layer](img/http-layer.png)

TCP and TLS is transport protocol and reliable

TLS know as Sockets Layer(SSL)

User-Agent
----------

The user-agent is any tool that acts on the behalf of the user. This role is primarily performed by the Web browser The browser is always the entity initiating the request.

Proxy
-----

![Proxy](img/proxy.png)

Between the Web browser and the server, numerous computers and machines relay the HTTP messages.

HTTP is stateless, but not sessionless
--------------------------------------

while the core of HTTP itself is stateless, HTTP cookies allow the use of stateful sessions.

What can be controlled by HTTP
------------------------------

* Cache
* Relaxing the origin constraint (origin)
* Authentication
* Proxy and Tunneling
* Sessions

HTTP flow
---------

1. Open a TCP connection: The TCP connection will be used to send a request, or several, and receive an answer. The client may open a new connection, reuse an existing connection, or open several TCP connections to the servers.

2. Send an HTTP message: HTTP messages (before HTTP/2) are human-readable. With HTTP/2, these simple messages are encapsulated in frames, making them impossible to read directly, but the principle remains the same.

```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

3. Read the response sent by the server

```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
```
4. Close or reuse the connection for further requests.

Requests
--------

![Request](img/http-request.png)

Path www.google.com/

Response
--------

![Response](img/http-response.png)

**Reference** [Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
