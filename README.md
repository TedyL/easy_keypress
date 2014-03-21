easy_keypress
=============

Easy handle keypress event javascript library

Support 1.6.4 and above JQuery Lib.

Installation :

```sh

<script src="easy_keypress.js"></script>

<script>
registerKeyDownEvent({
 	".prevent_input" : [48, 96],
 	"#avoid_input" : [49, 91],
 	"window" : [],
	"document" : [],
});

</script>

```
Refer char codes from : http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

Supported class and id assigned, even document & window also supported too !

Have Fun !
