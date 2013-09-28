qflipper.js
=====

jQueryでフリックするやつをTypeScriptでつくってみた

## Get Started

### base HTML and CSS

> HTML Layout

```HTML
<html><head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0, maximum-scale=10">
  <script src="jquery.js"></script>
  <script src="qflipper.js"></script>
  <link rel="stylesheet" href="qflick.css" media="all" type="text/css">
</head><body>

  {{> body}}

</body></html>
```

> Body of HTML Layout

trigger className is `.view` &amp; `.item`.

```HTML
<section class="view-wrapper">
  <div class="view">
    <div id="qflipper" class="qflipper">
      <div class="item">
        <p class="sentence">0</p>
      </div>
      <div class="item">
        <p class="sentence">1</p>
      </div>
      <div class="item">
        <p class="sentence">2</p>
      </div>
      <div class="item">
        <p class="sentence">3</p>
      </div>
      <div class="item">
        <p class="sentence">4</p>
      </div>
    </div>
  </div>
</section>
```

> SCSS or CSS

```scss
@import "compass/utilities/general/clearfix"

a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.view-wrapper {
  width: 100%;
  overflow: hidden;
}
.view {
  width: 320px;
  margin-right: auto;
  margin-left: auto;
}
.qflipper {
  @include clearfix;
}
.item {
  width: 320px;
  float: left;
}
```

### Simple Initilize

> JavaScript

```JavaScript
$(function() {
  new Q.Flipper('#qflipper');
});
```

### Rich Initilize

> JavaScript

```JavaScript
$(function() {
  new Q.Flipper('#qflipper', {type: 'rich'});
});
```

## Lamp & buttons

> Body of HTML Layout

```html
<div class="unit">
  <section class="view-wrapper">
    <div class="view" id="qflipperView">
      <div id="qflipper" class="qflipper">
        <div class="item">
          <p class="sentence">0</p>
        </div>
        <div class="item">
          <p class="sentence">1</p>
        </div>
        <div class="item">
          <p class="sentence">2</p>
        </div>
        <div class="item">
          <p class="sentence">3</p>
        </div>
        <div class="item">
          <p class="sentence">4</p>
        </div>
      </div>
    </div>
  </section>
</div>
 
<div class="unit">
  <div class="lamp-area" id="lampArea"></div>
</div>
 
<div class="unit right">
  <button id="moveToPrev">prev</button>
  <button id="moveToNext">next</button>
</div>
<div class="unit right">
  <input type="text" id="input" size="4" value="0">
  <button id="moveToPoint">point</button>
</div>
<div class="unit right">
  <button id="refresh">refresh</button>
</div>
```

> add SCSS or CSS

```scss
.right {
  text-align: right;
}
.unit {
  margin: 0 0 1em;
}
.lamp-area {
  text-align: center;

  > .lamp {
    display: inline-block;
    vertical-align: top;
    width: 10px; height: 10px;
    @include border-radius(10px);
    border: solid 1px #f7f8f9;
    background-color: #f1f2f3;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }

    &.current {
      background-color: #167acb;
    }
  }
}
```

### Initilize

> JavaScript

```JavaScript
$(function() {
  var qflipper = new Q.Flipper('#qflipper');
 
  var setLamp = function() {
    var _result = '';
    for(var i = 0; i < qflipper.getMaxPoint(); i++) {
      if(i === qflipper.getPoint()) {
        _result += '<div class="lamp current"></div>';
      } else {
        _result += '<div class="lamp"></div>';
      }
    }
    $('#lampArea').html(_result);
  }
 
  var changeLamp = function() {
    $('.lamp', $('#lampArea')).removeClass('current');
    $('.lamp', $('#lampArea')).eq(qflipper.getPoint()).addClass('current');
  }
 
  setLamp();
 
  $('#moveToNext').on('click', function(){
    qflipper.toNext();
    changeLamp();
  });
 
  $('#moveToPrev').on('click', function(){
    qflipper.toPrev();
    changeLamp();
  });
 
  $('#moveToPoint').on('click', function(){
    qflipper.moveToPoint(parseInt($('#input').val()));
    changeLamp();
  });
 
  $('#refresh').on('click', function(){
    qflipper.refresh();
    changeLamp();
  });
});
```

## Options

options to second argument.

```JavaScript
new Q.Flipper('#qflipper', options);
```

default animation type is `simple`.

```JavaScript
{
  type: 'simple'
}
```
cool animation type is `rich`.

```JavaScript
{
  type: 'rich'
}
```

trigger className `.view` &amp; `.item`  can rename of options.

```JavaScript
{
  view: '.view',
  item: '.item'
}
```

> example

```JavaScript
new Q.Flipper('#qflipper', {
  type: 'rich',
  view: '.viewHoge',
  item: '.itemFuga'
});
```

## License

qflipper.js is released under the MIT license. See [LICENSE.md](https://github.com/funnythingz/qflipper/blob/master/LICENSE.md).

&copy; funnythingz
